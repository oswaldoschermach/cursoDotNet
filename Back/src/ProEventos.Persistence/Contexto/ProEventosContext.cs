using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;

//contexto utilizado para criar as tabelas no banco de dados

namespace ProEventos.Peristence.Contexto
{
    public class ProEventosContext : DbContext
    {
        public ProEventosContext(DbContextOptions<ProEventosContext> options) : base(options)
        {
            
        }
        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<RedeSocial> RedesSociais { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
                .HasKey(PE => new {PE.EventoId, PE.PalestranteId}); //para associar o evento ao palestrante
            
            //deleta as redes sociais tanto do evento quanto do palestrante
            //isso acontece pois redes sociais tem duas chaves estrangeiras e esta atrelado a duas entidades
            modelBuilder.Entity<Evento>()
                        .HasMany(e => e.RedesSociais)
                        .WithOne(rs => rs.Evento)
                        .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Palestrante>()
                        .HasMany(p => p.RedesSociais)
                        .WithOne(rs => rs.Palestrante)
                        .OnDelete(DeleteBehavior.Cascade);
        }
    }
}