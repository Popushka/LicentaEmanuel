using BackendLicenta.Context;
using BackendLicenta.Interaction;
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
            
            var parola = EncryptLibrary.DecryptString(configuration["Encription:Secret"], encryptedUser.Parola);
            encryptedUser.Parola = parola;
            var user = encryptedUser;
            if (await context.Pacient.Where(u => u.Parola.Equals(password)).FirstOrDefaultAsync() == null)
                return BadRequest("parola nu e corecta");
            if (user == null)
                return BadRequest("medicul nu exista");
            return Ok(user);
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
