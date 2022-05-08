using Microsoft.AspNetCore.Mvc;
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
using BackendLicenta.Repos;
using BackendLicenta.Utils;

namespace BackendLicenta
{
    public class BaseRepo : ControllerBase
    {
        public readonly GeneralContext context;
        public readonly IConfiguration configuration;

        public BaseRepo(GeneralContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<CreateUserResult> CreateLogin(CreatePacientRequest request)
        {
            var user = await context.User.Where(u => u.Nume_utilizator.Equals(request.Nume_utilizator.ToLower())).FirstOrDefaultAsync();
            if (user != null)
            {
                return new CreateUserResult() {Successfull=false,Error="A user already exists with this username" };
            }
            var regRepo = new RegistrationRepo(context);
            if(await regRepo.CheckRegistration(request.RegistrationCode))
            {
                await regRepo.UseRegistration(request, configuration);
                return new CreateUserResult() { Successfull = true };
            }
            else
            {
                return new CreateUserResult() { Successfull = false, Error = "Wrong registration code!" };
            }
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<CreateUserResult> CreateLoginPacient(CreatePacientRequest request)
        {
            var user = await context.User.Where(u => u.Nume_utilizator.Equals(request.Nume_utilizator.ToLower())).FirstOrDefaultAsync();
            if (user != null)
            {
                return new CreateUserResult() { Successfull = false, Error = "A user already exists with this username" };
            }
            var regRepo = new RegistrationRepo(context);
            if (await regRepo.CheckRegistration(request.RegistrationCode))
            {
                await regRepo.UseRegistration(request, configuration);
                return new CreateUserResult() { Successfull = true };
            }
            else
            {
                return new CreateUserResult() { Successfull = false, Error = "Wrong registration code!" };
            }
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<User> CheckLogin(string username,string password)
        {
            string encryptedPassword = EncryptLibrary.EncryptString(configuration["Encription:Secret"], password);
            if (username.Equals("admin"))
            {
                encryptedPassword = password;
            }
            return await context.User.Where(u => u.Nume_utilizator.Equals(username.ToLower())&&u.Parola.Equals(encryptedPassword)).FirstOrDefaultAsync();
        }
    }
}
