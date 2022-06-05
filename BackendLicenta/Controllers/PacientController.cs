using BackendLicenta.Context;
using BackendLicenta.Interaction;
using BackendLicenta.Interactions;
using BackendLicenta.Models;
using BackendLicenta.Repos;
using BackendLicenta.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("pacient")]
    public class PacientController : BaseRepo
    {
        public PacientController(GeneralContext context, IConfiguration configuration) : base(context, configuration) { }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetPacient()
        {
            var pacient = await context.Pacient.ToListAsync();

            return Ok(pacient);
        }
        [HttpGet]
        [AllowAnonymous]
        [Route("/pacient/user_actual")]
        public async Task<IActionResult> GetUser([FromQuery] string numeUtilizator, [FromQuery] string password)
        {
            var encryptedUser=await context.Pacient.Where(u => u.Nume_utilizator == numeUtilizator).FirstOrDefaultAsync();
            
           // var parola = EncryptLibrary.DecryptString(configuration["Encription:Secret"], encryptedUser.Parola);
           // encryptedUser.Parola = parola;
            var user = encryptedUser;
            if (await context.Pacient.Where(u => u.Parola.Equals(password)).FirstOrDefaultAsync() == null)
                return BadRequest("parola nu e corecta");
            if (user == null)
                return BadRequest("medicul nu exista");
            return Ok(user);
        }
        [HttpPut]
        public async Task<IActionResult> AdaugareDiagnostic(AdaugaDiagnosticRequest request)
        {

            await context.Pacient.Where(m => m.PacientCNP == request.PacientCNP).LoadAsync();
            Pacient pacient = await context.Pacient.Where(m => m.PacientCNP == request.PacientCNP).FirstOrDefaultAsync();
            if (pacient == null)
            {
                return BadRequest("Nu exista un pacient cu acest cnp!");
            }

            pacient.Diagnostic = request.Diagnostic;

            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateUser(CreatePacientRequest request)
        {
            var registerResult = await CreateLoginPacient(request);
            if (registerResult.Successfull)
            {
                return Ok("User created");
            }
            else
            {
                return BadRequest(registerResult.Error);
            }
        }

    }
}
