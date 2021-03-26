import { NgModule } from "@angular/core";
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FornecedorRoutingModule } from "./fornecedor.route";
import { CommonModule } from "@angular/common";
import { FornecedorService } from "./services/fornecedor.service";
import { FornecedorAppComponent } from "./fornecedor.app.component";
import { NgBrazil } from "ng-brazil";
import { TextMaskModule } from "angular2-text-mask";
import { FornecedorResolve } from "./services/fornecedor.resolve";
import { NgxSpinnerModule } from "ngx-spinner";
import { FornecedorGuard } from "./services/fornecedor.guard";
import { ListaProdutosComponent } from "./produtos/lista-produtos.component";

@NgModule({
    declarations: [
        FornecedorAppComponent,
        DetalhesComponent,
        EditarComponent,
        ExcluirComponent,
        NovoComponent,
        ListaComponent,
        ListaProdutosComponent
    ],
    imports: [
        CommonModule,
        FornecedorRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgBrazil,
        TextMaskModule,
        NgxSpinnerModule
    ],
    providers: [
        FornecedorService,
        FornecedorResolve,
        FornecedorGuard
    ]
})

export class FornecedorModule { }