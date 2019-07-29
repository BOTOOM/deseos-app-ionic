import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listas = [];
  @Input() terminada = true;

  constructor(
    private router: Router,
    public deseosService: DeseosService,
  ) {
    // this.listas = this.deseosService.listas;
  }

  ngOnInit() {}

  listaSelecionada(lista: Lista) {
    this.router.navigateByUrl(`${this.router.url}/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

}
