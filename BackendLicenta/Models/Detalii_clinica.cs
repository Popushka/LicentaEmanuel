using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Detalii_clinica
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Adresa_clinica { get; set; }
        public string Imagine_clinica { get; set; }
    }
}
