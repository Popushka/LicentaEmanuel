using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("doctor")]
    public class DoctorController : BaseRepo
    {
        public DoctorController(GeneralContext context, IConfiguration configuration) : base(context, configuration) { }

        [HttpGet]
        public async Task<IActionResult> GetDoctor()
        {
            var doctor = await context.Doctor.ToListAsync();

            return Ok(doctor);
        }
    }
}
