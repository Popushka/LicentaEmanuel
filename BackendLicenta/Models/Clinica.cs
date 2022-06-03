using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Clinica
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nume { get; set; }
        public string Descriere { get; set; }
        public string Imagine { get; set; }
        public double Latitudine { get; set; }
        public double Longitudine { get; set; }

        public int DoctorId { get; set; }
    }
}
