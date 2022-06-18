export interface Clinica {
  clinicaId: number;
  nume: string;
  descriere: string;
  imagine: string;
  doctori: Doctori[];
  latitudine: number;
  longitudine: number;
  adresa: string;
  tratamente: string;
}

export interface User {
  pacientId: number;
  nume: string;
  prenume: string;
  parola: string;
  email: string;
  nume_utilizator: string;
  varsta: number;
  diagnostic: string;
  detalii: string;
  pacientCNP: number;
  programareId: number;
}

export interface Programare {
  id: number;
  pacient: User;
  data_programarii: string;
  detalii_aditionale: string;
  status: boolean;
}

export interface Doctori {
  doctorId: number;
  nume: string;
  prenume: string;
  programari: Programare[];
  imagine: string;
  descriere: string;
  codParafa: string;
}

export interface Optiuni {
  value: string;
  label: string;
}
