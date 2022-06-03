using BackendLicenta.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("clinica")]
    public class ClinicaController : BaseRepo
    {
        public ClinicaController(GeneralContext context, IConfiguration configuration) : base(context, configuration) { }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetClinica()
        {
            var clinics = await context.Clinica.ToListAsync();

            return Ok(clinics);
        }
    }
}
