import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate, Router } from "@angular/router";
import { CadastroComponent } from "../conta/cadastro/cadastro.component";
import { LocalStorageUtils } from "../utils/localstorage";

@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent>, CanActivate {

    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router) { }

    canDeactivate(component: CadastroComponent) {
        if (component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o formulário ?');
        }

        return true;
    }

    canActivate() {
        if (this.localStorageUtils.ObterTokenUsuario()) {
            this.router.navigate(['/home']);
        }

        return true;
    }
}
