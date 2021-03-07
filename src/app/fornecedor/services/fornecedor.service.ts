import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BaseService } from "src/app/services/base.service";
import { Fornecedor } from "../models/fornecedor";

@Injectable()
export class FornecedorService extends BaseService {
    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Fornecedor[]> {
        return this.http
            .get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores")
            .pipe(catchError(super.ServiceError));
    }

    obterPorId(id: string): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }

    novoFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }

    atualizarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }

    excluirFornecedor(id: string): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }
}