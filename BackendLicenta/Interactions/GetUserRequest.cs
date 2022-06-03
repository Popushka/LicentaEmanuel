using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendLicenta.Interactions
{
    public class GetUserRequest
    {
       
        [Required(AllowEmptyStrings = false)]
        public string Nume_utilizator { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Password { get; set; }
        
       
    }
}
