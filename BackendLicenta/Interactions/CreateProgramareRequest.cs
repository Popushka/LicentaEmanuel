using BackendLicenta.Models;
using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Requests.TratamentRequests
{
    public class CreateProgramareRequest
    {
        [Required]
        [Range(0, long.MaxValue)]
        public int PacientCNP { get; set; }
        public string Data_programarii { get; set; }
        public string Detalii_aditionale { get; set; }

    }
}
