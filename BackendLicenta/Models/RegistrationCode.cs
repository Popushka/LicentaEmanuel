using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Models
{
    public class RegistrationCode
    {
        [Key]
        public int RegistrationCodeId { get; set; }
        public string Code { get; set; }
        public int CreatedByUserId { get; set; }
        //Used by
        public int UserId { get; set; }
        public User User { get; set; }
        public bool Used { get; set; }
    }
}
