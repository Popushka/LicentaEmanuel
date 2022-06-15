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
    [Route("doctor")]
    public class DoctorController : BaseRepo
    {
        public DoctorController(GeneralContext context, IConfiguration configuration) : base(context, configuration) { }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetDoctor()
        {
            
            var doctors = await context.Doctor.ToListAsync();

            return Ok(doctors);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("/doctor/doctor_actual")]
        public async Task<IActionResult> GetDoctorActual([FromQuery] string codParafa)
        {
            var doctor = await context.Doctor.Where(u => u.CodParafa == codParafa).Include(u=>u.Programari).FirstOrDefaultAsync();
            foreach (Programare programari in doctor.Programari)
                await context.Programare.Where(u => u.ProgramareId == programari.ProgramareId).Include(u => u.Pacient).FirstOrDefaultAsync();
            
            if (doctor == null)
                return BadRequest("medicul nu exista");
            return Ok(doctor);
        }
    }
}
