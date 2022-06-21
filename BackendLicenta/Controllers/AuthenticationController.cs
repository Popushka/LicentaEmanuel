using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BackendLicenta.Context;
using BackendLicenta.Models;
using BackendLicenta.Interaction;
using BackendLicenta.Utils;
using BackendLicenta;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("authorization")]
    public class AuthenticationController : BaseRepo
    {
        public AuthenticationController(GeneralContext context, IConfiguration configuration) : base(context, configuration)
        {
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post(AuthorizationRequest request)
        {
            string password = EncryptLibrary.EncryptString(configuration["Encription:Secret"], request.Password);
            if (request.Username.Equals("admin"))
            {
                password = request.Password;
            }
            Pacient pacient = await context.Pacient.FirstOrDefaultAsync(u => u.Nume_utilizator.Equals(request.Username.ToLower()) && u.Parola.Equals(password));
            if (pacient == null)
            {
                return BadRequest("Invalid credentials");
            }
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, configuration["Jwt:Subject"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()),
                new Claim("PacientId",pacient.PacientId.ToString()),
                new Claim("Nume_utilizator",pacient.Nume_utilizator)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(configuration["Jwt:Issuer"], configuration["Jwt:Audience"], 
                claims, DateTime.Now, DateTime.Now.AddHours(4), signingCredentials: signIn);
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }

    }
}
