using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("doctor")]
    public class DoctorController : ControllerBase
    {
        private readonly GeneralContext context;

        public DoctorController(GeneralContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDoctor()
        {
            var doctor = await context.Doctor.ToListAsync();

            return Ok(doctor);
        }
    }
}
