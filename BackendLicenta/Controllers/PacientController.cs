using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("pacient")]
    public class PacientController : ControllerBase
    {
        private readonly GeneralContext context;

        public PacientController(GeneralContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetPacient()
        {
            var pacient = await context.Pacient.ToListAsync();

            return Ok(pacient);
        }
    }
}
