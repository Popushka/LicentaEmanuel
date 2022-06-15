using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Doctor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DoctorId { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public List<Programare> Programari { get; set; } = new List<Programare>();
        public string Descriere { get; set; }
        public string Imagine { get; set; }
        public string CodParafa { get; set; }
    }
}
