using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("detalii_clinica")]
    public class DetaliiClinicaController:ControllerBase
    {
        private readonly GeneralContext context;

        public DetaliiClinicaController(GeneralContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDetaliiClinica()
        {
            var detalii_clinica = await context.Detalii_Clinica.ToListAsync();

            return Ok(detalii_clinica);
        }
    }
}
