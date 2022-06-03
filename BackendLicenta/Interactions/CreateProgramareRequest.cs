using BackendLicenta.Models;
using System.ComponentModel.DataAnnotations;

namespace BackendLicenta.Requests.TratamentRequests
{
    public class CreateProgramareRequest
    {
        [Required]
        [Range(0, long.MaxValue)]
        public long PacientCNP { get; set; }
        public string Data_programarii { get; set; }
        public string Detalii_aditionale { get; set; }
        public int DoctorId { get; set; }

    }
}
