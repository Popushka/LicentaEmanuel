using BackendLicenta.Models;

namespace BackendLicenta.Operations
{
    public class CreateRegistrationCodeResult
    {
        public bool Succsessfull { get; set; }
        public RegistrationCode RegistrationCode { get; set; }
        public string Error { get; set; }
    }
}
