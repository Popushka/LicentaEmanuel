using BackendLicenta.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Interaction
{
    public class CreatePacientRequest
    {
        public int Id { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Nume_utilizator { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Email { get; set; }

        public string Nume { get; set; }
        public string Prenume { get; set; }
        public int Varsta { get; set; }
        public string Diagnostic { get; set; }
        public string Detalii { get; set; }
        public long PacientCNP { get; set; }
    }
}
