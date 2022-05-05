using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Interaction
{
    public class CreateUserRequest
    {
        [Required(AllowEmptyStrings = false)]
        public string Username { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Email { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string RegistrationCode { get; set; }
    }
}
