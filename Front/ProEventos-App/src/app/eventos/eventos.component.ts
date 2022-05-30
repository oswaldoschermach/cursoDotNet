import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  public eventosFiltrados: any = [];
  private _filtrosLista: string = '';

  public get filtrosLista(): string {
    return this._filtrosLista;
  }
  public set filtrosLista(value: string) {
    this._filtrosLista = value;
    this.eventosFiltrados = this._filtrosLista
      ? this.filtrarEventos(this.filtrosLista)
      : this.eventos;
  }

  constructor(private http: HttpClient) {}

  exibirImagem: boolean = true;

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/Evento').subscribe(
      (response) => {
        (this.eventos = response)
        this.eventosFiltrados = this.eventos
      },
      (error) => console.log(error)
    );
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                                                    evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  ngOnInit() {
    //inicializa ao abrir a aplicação
    this.getEventos();
  }
}
