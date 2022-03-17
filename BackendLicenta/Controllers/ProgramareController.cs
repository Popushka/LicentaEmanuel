using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("programare")]
    public class ProgramareController : ControllerBase
    {
        private readonly GeneralContext context;

        public ProgramareController(GeneralContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProgramare()
        {
            var programare = await context.Pacient.ToListAsync();

            return Ok(programare);
        }
    }
}
