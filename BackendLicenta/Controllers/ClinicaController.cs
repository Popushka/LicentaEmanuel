using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("clinica")]
    public class ClinicaController : ControllerBase
    {
        private readonly GeneralContext context;

        public ClinicaController(GeneralContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetClinica()
        {
            var clinics = await context.Clinica.ToListAsync();

            return Ok(clinics);
        }
    }
}
