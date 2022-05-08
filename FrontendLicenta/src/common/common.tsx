export interface Clinica {
  nume: string;
  descriere: string;
  imagine: string;
  adresa: string;
  doctori: Doctori[];
}

export interface User {
  nume: string;
  prenume: string;
  varsta: number;
  diagnostic: string;
  detalii: string;
  email: string;
}

export interface Programare {
  pacient: User;
  data_programarii: string;
  detalii_aditionale: string;
}

export interface Doctori {
  nume: string;
  prenume: string;
  programari: Programare[];
  imagine: string;
  descriere: string;
  codParafa:string;
}

export interface Optiuni {
  value: string;
  label: string;
}
