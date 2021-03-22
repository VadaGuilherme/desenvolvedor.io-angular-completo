import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Produto } from "../models/produto";
import { ProdutoService } from "./produto.service";

@Injectable()
export class ProdutoResolve implements Resolve<Produto> {
    constructor(private produtoSerivce: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoSerivce.obterPorId(route.params['id']);
    }
}