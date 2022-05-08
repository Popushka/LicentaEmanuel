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
            var user = await context.User.ToListAsync();

            return Ok(user);
        }
    }
}
