using BackendLicenta.Context;
using BackendLicenta.Models;
using BackendLicenta.Requests.TratamentRequests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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
        public async Task<IActionResult> GetProgramare()
        {
            var programare = await context.Pacient.ToListAsync();

            return Ok(programare);
        }

        [HttpPost]
        public async Task<IActionResult> AdaugareProgramare(CreateProgramareRequest request)
        {
            await context.Pacient.Where(p => p.PacientCNP == request.PacientCNP).Include(p => p.Programare).FirstOrDefaultAsync();
            Pacient pacient = context.Pacient.Where(p => p.PacientCNP == request.PacientCNP).FirstOrDefault();
            if (pacient == null)
            {
                return BadRequest();
            }
            pacient.Programare.Add(new Programare()
            { PacientId=pacient.Id,
            Detalii_aditionale=request.Detalii_aditionale,
            Data_programarii=request.Data_programarii

            }) ;


            await context.SaveChangesAsync();
            return Ok();

        }
    }
}
