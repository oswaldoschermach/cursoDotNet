import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../models/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  private _filtrosLista: string = '';

  modalRef?: BsModalRef; //fax referencia ao modal

  public get filtrosLista(): string {
    return this._filtrosLista;
  }
  public set filtrosLista(value: string) {
    this._filtrosLista = value;
    this.eventosFiltrados = this._filtrosLista
      ? this.filtrarEventos(this.filtrosLista)
      : this.eventos;
  }

  constructor(private eventoService: EventoService,
              private modalService: BsModalService,
              private toastr: ToastrService
  ) {}

  exibirImagem: boolean = true;

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (response: Evento[]) => {
        (this.eventos = response)
        this.eventosFiltrados = this.eventos
      },
      (error) => console.log(error)
    );
  }

  filtrarEventos(filtrarPor: string): Evento[] {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Seu evento foi deletado com sucesso', 'Deletado');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
