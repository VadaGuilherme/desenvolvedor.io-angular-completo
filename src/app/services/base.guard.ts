import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { LocalStorageUtils } from "../utils/localstorage";

export abstract class BaseGuard {

    private localStorageUtils = new LocalStorageUtils();

    constructor(protected router: Router) { }

    protected validarClaims(routerAc: ActivatedRouteSnapshot): boolean {
        if (!this.localStorageUtils.ObterTokenUsuario()) {
            this.router.navigate(['/conta/login'], { queryParams: { returnUrl: this.router.url } });
        }

        let user = this.localStorageUtils.ObterUsuario();
        let claim: any = routerAc.data[0];

        if (claim !== undefined) {
            let claim = routerAc.data[0]['claim'];

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
}