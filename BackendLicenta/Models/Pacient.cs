using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Pacient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nume_utilizator { get; set; }
        public string Parola { get; set; }
        public string Email { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public int Varsta { get; set; }
        public string Diagnostic { get; set; }
        public string Detalii { get; set; }
        public long PacientCNP { get; set; }
        public ICollection<ProgramarePacient> Programare { get; set; } = new List<ProgramarePacient>();
    }
}
