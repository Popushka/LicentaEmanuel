using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Programare
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public Pacient pacient { get; set; }
        public string Data_programarii { get; set; }
        public string Detalii_aditionale { get; set; }
    }
}
