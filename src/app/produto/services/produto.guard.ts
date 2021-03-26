import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageUtils } from "src/app/utils/localstorage";
import { NovoComponent } from "../novo/novo.component";

@Injectable()
export class ProdutoGuard implements CanActivate, CanDeactivate<NovoComponent> {

    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.localStorageUtils.ObterTokenUsuario()) {
            this.router.navigate(['/conta/login'], { queryParams: { returnUrl: this.router.url } });
        }

        let user = this.localStorageUtils.ObterUsuario();
        let claim: any = route.data[0];

        if (claim !== undefined) {
            let claim = route.data[0]['claim'];

            if (claim) {
                if (!user.claims) {
                    this.navegarAcessoNegado();
                }

                let userClaims = user.claims.find(x => x.type === claim.nome);

                if (!userClaims) {
                    this.navegarAcessoNegado();
                }

                let valoresClaim = userClaims.value as string;

                if (!valoresClaim.includes(claim.valor)) {
                    this.navegarAcessoNegado();
                }
            }
        }

        return true;
    }

    navegarAcessoNegado() {
        this.router.navigate(['/acesso-negado']);
    }

    canDeactivate(component: NovoComponent) {
        if (component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário ?');
        }

        return true;
    }
}
