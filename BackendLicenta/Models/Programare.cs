using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Programare
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProgramareId { get; set; }
        public Pacient Pacient { get; set; }
        public string Data_programarii { get; set; }
        public string Detalii_aditionale { get; set; }
        public bool Status { get; set; }
        public int PacientId { get; set; }

    }
}
