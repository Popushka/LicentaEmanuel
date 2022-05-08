using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendLicenta.Context;
using BackendLicenta.Models;
using BackendLicenta.Interaction;
using BackendLicenta.Operations;
using BackendLicenta.Utils;

namespace BackendLicenta.Repos
{
    public class RegistrationRepo
    {
        private readonly GeneralContext context;

        public RegistrationRepo(GeneralContext context)
        {
            this.context = context;
        }

        public async Task<CreateRegistrationCodeResult> CreateRegistrationCode(User user)
        {
            RegistrationCode registrationCode = new RegistrationCode()
            {
                CreatedByUserId = user.Id,
                Code = Guid.NewGuid().ToString()
            };
            context.RegistrationCode.Add(registrationCode);
            await context.SaveChangesAsync();
            return new CreateRegistrationCodeResult()
            {
                Succsessfull = true,
                RegistrationCode = registrationCode
            };
        }
        public async Task<bool> CheckRegistration(String code)
        {
            var reg = await context.RegistrationCode.Where(r => r.Code.Equals(code)&&!r.Used).FirstOrDefaultAsync();
            return reg != null;
        }
        public async Task<User> UseRegistration(CreatePacientRequest request,IConfiguration configuration)
        {
            string password = EncryptLibrary.EncryptString(configuration["Encription:Secret"], request.Password);
            var user = new User()
            {
                Nume_utilizator = request.Nume_utilizator.ToLower(),
                Parola = password,
                Email = request.Email,
                Detalii_utilizator=request.Detalii_utilizator
            };
            var reg = await context.RegistrationCode.Where(r => r.Code.Equals(request.RegistrationCode)).FirstOrDefaultAsync();
            reg.Used = true;
            reg.User = user;
            context.User.Add(user);
            await context.SaveChangesAsync();
            return user;
        }
    }
}
