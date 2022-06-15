using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Clinica
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClinicaId { get; set; }
        public string Nume { get; set; }
        public string Descriere { get; set; }
        public string Imagine { get; set; }
        public double Latitudine { get; set; }
        public string Adresa { get; set; }
        public double Longitudine { get; set; }

        public List<Doctor> Doctori { get; set; }
        public string Tratamente { get; set; }
    }
}
