using BackendLicenta.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendLicenta.Context
{
    public class GeneralContext : DbContext
    {
        public DbSet<Clinica> Clinica { get; set; }

        public GeneralContext(DbContextOptions<GeneralContext> options)
            : base(options) { }
    }
}
