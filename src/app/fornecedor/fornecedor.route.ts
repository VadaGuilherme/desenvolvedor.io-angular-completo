import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { EditarComponent } from "./editar/editar.component";
import { ExcluirComponent } from "./excluir/excluir.component";
import { FornecedorAppComponent } from "./fornecedor.app.component";
import { ListaComponent } from "./lista/lista.component";
import { NovoComponent } from "./novo/novo.component";
import { FornecedorGuard } from "./services/fornecedor.guard";
import { FornecedorResolve } from "./services/fornecedor.resolve";

const fornecedorRouterConfig: Routes = [
    {
        path: '', component: FornecedorAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canActivate: [FornecedorGuard],
                canDeactivate: [FornecedorGuard],
                data: [
                    {
                        claim: { nome: 'Fornecedor', valor: 'Adicionar' }
                    }
                ]
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: {
                    fornecedor: FornecedorResolve
                },
                canActivate: [FornecedorGuard],
                data: [
                    {
                        claim: { nome: 'Fornecedor', valor: 'Atualizar' }
                    }
                ]
            },
            {
                path: 'detalhes/:id', component: DetalhesComponent,
                resolve: {
                    fornecedor: FornecedorResolve
                }
            },
            {
                path: 'excluir/:id', component: ExcluirComponent,
                resolve: {
                    fornecedor: FornecedorResolve
                },
                canActivate: [FornecedorGuard],
                data: [
                    {
                        claim: { nome: 'Fornecedor', valor: 'Excluir' }
                    }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fornecedorRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class FornecedorRoutingModule { }