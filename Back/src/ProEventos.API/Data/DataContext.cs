using Microsoft.EntityFrameworkCore;
using ProEventos.API.Models;

//contexto utilizado para criar as tabelas no banco de dados

namespace ProEventos.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Evento> Eventos { get; set; }
        
    }
}