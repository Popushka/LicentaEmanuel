using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendLicenta.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Nume_utilizator { get; set; }
        public string Parola { get; set; }
        public string Email { get; set; }
        public Pacient Detalii_utilizator { get; set; }
    }
}
