import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private router: Router, ) { }

  volverTab1() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  ngOnInit() {
  }

}
