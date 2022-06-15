using BackendLicenta.Context;
using BackendLicenta.Models;
using BackendLicenta.Requests.TratamentRequests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("programare")]
    public class ProgramareController : BaseRepo
    {
        public ProgramareController(GeneralContext context, IConfiguration configuration) : base(context, configuration) { }


        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetProgramare()
        {
            var programare = await context.Programare.ToListAsync();
            return Ok(programare);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> AdaugareProgramare(CreateProgramareRequest request)
        {
            var dataCurenta = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            bool status = false;
            Console.WriteLine(dataCurenta);
            request.Data_programarii.Replace("T", " ");
            var d1 = DateTime.Parse(dataCurenta);
            var d2 = DateTime.Parse(request.Data_programarii);
            if (d2 > d1)
            {
                status = true;
            }
            else
                status = false;
          

            
            Doctor doctor = await context.Doctor.Where(p => p.DoctorId == request.DoctorId).Include(p=>p.Programari).FirstOrDefaultAsync();
            if (doctor == null)
            {
                return BadRequest();
            }
           doctor.Programari.Add(new Programare()
            {
                PacientId = request.PacientId,
                Detalii_aditionale = request.Detalii_aditionale,
                Data_programarii = request.Data_programarii.Replace("T", " "),
                Status = status,


            }) ; 


            await context.SaveChangesAsync();
            return Ok();

        }

        [HttpGet]
        [AllowAnonymous]
        [Route("/programare/programare_actuala")]
        public async Task<IActionResult> GetProgramareActuala([FromQuery] int programareId)
        {
            var programare = await context.Programare.Where(u => u.ProgramareId == programareId).Include(u => u.Pacient).FirstOrDefaultAsync();
            

            if (programare == null)
                return BadRequest("medicul nu exista");
            return Ok(programare);
        }
    }
}
