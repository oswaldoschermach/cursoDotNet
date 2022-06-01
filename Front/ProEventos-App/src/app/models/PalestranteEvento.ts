import { Evento } from "./Evento";
import { Palestrante } from "./Palestrante";

export interface PalestranteEvento {
   PalestranteId: number;
   Palestrante: Palestrante;
   EventoId: number;
   Evento: Evento;
}
