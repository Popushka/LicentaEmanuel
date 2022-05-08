using BackendLicenta.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendLicenta.Context
{
    public class GeneralContext : DbContext
    {
        public DbSet<Clinica> Clinica { get; set; }
        public DbSet<Doctor> Doctor { get; set; }
        public DbSet<Pacient> Pacient { get; set; }
        public DbSet<Programare> Programare { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<RegistrationCode> RegistrationCode { get; set; }

        public GeneralContext(DbContextOptions<GeneralContext> options)
            : base(options) { }
    }
}
