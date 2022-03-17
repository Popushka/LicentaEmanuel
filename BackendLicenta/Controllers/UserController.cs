using BackendLicenta.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace BackendLicenta.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly GeneralContext context;

        public UserController(GeneralContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var user = await context.Pacient.ToListAsync();

            return Ok(user);
        }
    }
}
