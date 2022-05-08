using BackendLicenta.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Interaction
{
    public class CreatePacientRequest
    {
        [Required(AllowEmptyStrings = false)]
        public string Nume_utilizator { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Email { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string RegistrationCode { get; set; }

        public Pacient Detalii_utilizator { get; set; }
    }
}
