import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Titulo',
  templateUrl: './Titulo.component.html',
  styleUrls: ['./Titulo.component.css']
})
export class TituloComponent implements OnInit {

  public titulo = 'Eventos';

  constructor() { }

  ngOnInit() {
  }

}
