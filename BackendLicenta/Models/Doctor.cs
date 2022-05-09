using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class Doctor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public ProgramarePacient[] Programari { get; set; }
        public string Descriere { get; set; }
        public string Imagine { get; set; }
        public string Cod_parafa { get; set; }
    }
}
