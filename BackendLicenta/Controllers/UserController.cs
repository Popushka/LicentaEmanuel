using BackendLicenta.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading.Tasks;
using BackendLicenta.Interaction;
using BackendLicenta.Repos;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : BaseRepo
    {
        public UserController(GeneralContext context, IConfiguration configuration) : base(context, configuration) { }

        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var user = await context.Pacient.ToListAsync();

            return Ok(user);
        }


        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserRequest request)
        {
            var registerResult = await CreateLogin(request);
            if (registerResult.Successfull)
            {
                return Ok("User created");
            }
            else
            {
                return BadRequest(registerResult.Error);
            }
        }
        [HttpPost("codregister")]
        public async Task<IActionResult> CreazaCodRegister()
        {
            string username = HttpContext.User.Claims.Where(u => u.Type.Equals("Username")).FirstOrDefault().Value;
            var user = await context.User.Where(u => u.Nume_utilizator.Equals(username)).FirstOrDefaultAsync();
            if (user == null)
            {
                return BadRequest("You dont have an account!");
            }

            var registerRepo = new RegistrationRepo(context);
            var code = await registerRepo.CreateRegistrationCode(user);
            if (code.Succsessfull)
            {
                return Ok(code.RegistrationCode.Code);
            }
            else
            {
                return BadRequest(code.Error);
            }
        }
    }
}
