import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listas = [];
  // si quisiera la referencia de un elemento especifico seria #lista y los llamo aqui como 'lista'
  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor(
    private router: Router,
    public deseosService: DeseosService,
    private alertCtrl: AlertController,
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

  async cambiarNombre(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Cambiar nombre de la lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            if ( data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}
