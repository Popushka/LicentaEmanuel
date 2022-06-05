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

        public async Task<Pacient> UseRegistration(CreatePacientRequest request,IConfiguration configuration)
        {
            string password = EncryptLibrary.EncryptString(configuration["Encription:Secret"], request.Password);
            var pacient = new Pacient()
            {   Id=request.Id,
                Nume_utilizator = request.Nume_utilizator.ToLower(),
                Parola = request.Password,
                Email = request.Email,
                Nume=request.Nume,
                Prenume=request.Prenume,
                Varsta=request.Varsta,
                Diagnostic=request.Diagnostic,
                Detalii=request.Detalii,
                PacientCNP=request.PacientCNP
            };

            context.Pacient.Add(pacient);
            await context.SaveChangesAsync();
            return pacient;
        }
    }
}
