using BackendLicenta.Context;
using BackendLicenta.Interaction;
using BackendLicenta.Repos;
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
        public async Task<IActionResult> GetPacient()
        {
            var pacient = await context.Pacient.ToListAsync();

            return Ok(pacient);
        }

        [AllowAnonymous]
        [HttpPost]
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
