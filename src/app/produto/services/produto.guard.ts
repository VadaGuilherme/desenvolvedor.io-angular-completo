import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from "@angular/router";
import { BaseGuard } from "src/app/services/base.guard";
import { NovoComponent } from "../novo/novo.component";

@Injectable()
export class ProdutoGuard extends BaseGuard implements CanActivate, CanDeactivate<NovoComponent> {

    constructor(protected router: Router) { super(router); }

    canActivate(route: ActivatedRouteSnapshot) {
        return super.validarClaims(route);
    }

    canDeactivate(component: NovoComponent) {
        if (component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário ?');
        }

        return true;
    }
}
