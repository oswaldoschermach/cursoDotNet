using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {   
        public IEnumerable<Evento> _evento = new Evento[]{
                new Evento(){
                    EventoId = 1,
                    Tema = "Angular",
                    Local = "Curitiba",
                    lote = "primeiro",
                    QuantidadePessoas = 250,
                    DataEvento = DateTime.Now.AddDays(2).ToString()
                },
                new Evento(){
                    EventoId = 2,
                    Tema = "Java",
                    Local = "Maringa",
                    lote = "Segundo",
                    QuantidadePessoas = 550,
                    DataEvento = DateTime.Now.AddDays(2).ToString()
                },
                new Evento(){
                    EventoId = 3,
                    Tema = "C#",
                    Local = "Montreal",
                    lote = "Terceiro",
                    QuantidadePessoas = 666,
                    DataEvento = DateTime.Now.AddDays(2).ToString(),
                    ImageUrl = "image.png"
                }
            };
        public EventoController()
        {
            
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> Get(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "value";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put com id = {id}";
        }
    }
}
