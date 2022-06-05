using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendLicenta.Interactions
{
    public class AdaugaDiagnosticRequest
    {
        [Required(AllowEmptyStrings = false)]
        public long PacientCNP { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Diagnostic { get; set; }
    }
}
