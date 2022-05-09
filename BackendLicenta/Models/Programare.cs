using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class ProgramarePacient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public Pacient Pacient { get; set; }
        public int PacientId { get; set; }
        public string Data_programarii { get; set; }
        public string Detalii_aditionale { get; set; }
    }
}
