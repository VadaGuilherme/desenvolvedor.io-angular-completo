import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {

  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private route: ActivatedRoute) {

    this.fornecedor = this.route.snapshot.data['fornecedor'];
  }
}
