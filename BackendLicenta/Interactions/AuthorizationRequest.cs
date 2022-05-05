using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Interaction
{
    public class AuthorizationRequest
    {
        [Required(AllowEmptyStrings = false)]
        public string Username { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
    }
}
