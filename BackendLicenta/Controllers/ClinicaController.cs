using BackendLicenta.Context;
using BackendLicenta.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
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
        [HttpGet]
        [AllowAnonymous]
        [Route("/clinica/clinica_actual")]
        public async Task<IActionResult> GetDoctorActual([FromQuery] int ClinicaId)
        {
            var clinica = await context.Clinica.Where(u => u.ClinicaId == ClinicaId).Include(u => u.Doctori).FirstOrDefaultAsync();
            foreach (Doctor doctori in clinica.Doctori)
            { await context.Doctor.Where(u => u.DoctorId == doctori.DoctorId).Include(u => u.Programari).FirstOrDefaultAsync(); 
            var programari= await context.Doctor.Where(u => u.DoctorId == doctori.DoctorId).Include(u => u.Programari).FirstOrDefaultAsync();
                foreach (Programare programare in programari.Programari)
                    await context.Programare.Where(u => u.ProgramareId == programare.ProgramareId).Include(u => u.Pacient).FirstOrDefaultAsync();
            }

            if (clinica == null)
                return BadRequest("medicul nu exista");
            return Ok(clinica);
        }
    }
}
