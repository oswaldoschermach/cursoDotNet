namespace ProEventos.API.Models
{
    public class Evento
    {
        public int EventoId {get; set;}
        public string Local {get; set;}
        public string DataEvento {get; set;}
        public string Tema {get; set;}
        public int QuantidadePessoas {get; set;}
        public string lote {get; set;}
        public string ImageUrl {get; set;}
    }

}
