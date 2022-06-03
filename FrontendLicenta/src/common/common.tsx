export interface Clinica {
  nume: string;
  descriere: string;
  imagine: string;
  doctori: Doctori[];
  latitudine: number;
  longitudine: number;
  adresa: string;
}

export interface User {
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
}

export interface Doctori {
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
