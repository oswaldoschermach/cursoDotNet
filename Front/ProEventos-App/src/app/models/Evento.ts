import { Lote } from "./Lote";
import { PalestranteEvento } from "./PalestranteEvento";
import { RedeSocial } from "./RedeSocial";

export interface Evento {
    id : number;
    local : string;
    dataEvento?: Date;
    tema : string;
    quantidadePessoas : number;
    imageUrl : string;
    telefone : string;
    email : string;
    lotes : Lote[];
    redesSociais : RedeSocial[];
    palestrantesEventos : PalestranteEvento[];
}
