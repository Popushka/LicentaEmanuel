import { Doctori, Clinica, Programare, User, Optiuni } from "./common";

export const mockedUser: User = {
  pacientId: 1,
  nume: "Emanuel",
  prenume: "Oltean",
  varsta: 21,
  diagnostic: "Picior Rupt",
  detalii: "Ma doare piciorul",
  email: "emanuel.oltean12@gmail.com",
  programareId: 1,
  nume_utilizator: "popushka",
  parola: "bicicleta",
  pacientCNP: 12345678910,
};

export const mockedProgramari: Programare[] = [
  {
    id: 0,
    pacient: mockedUser,
    data_programarii: "2022-31-06T16:00:00.000Z",
    detalii_aditionale: mockedUser.detalii,
    status: true,
    pacientId: 0,
  },
  {
    id: 1,
    pacient: mockedUser,
    data_programarii: "2022-06-31T16:00:00.000Z",
    detalii_aditionale: mockedUser.detalii,
    status: false,
    pacientId: 0,
  },
];

export const mockedDoctori: Doctori[] = [
  {
    doctorId: 0,
    nume: "Stefan",
    prenume: "Carina",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
    codParafa: "1234",
  },
  {
    doctorId: 0,
    nume: "Paul",
    prenume: "",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
    codParafa: "1025",
  },
  {
    doctorId: 0,
    nume: "Oltean",
    prenume: "Emanuel",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
    codParafa: "1133",
  },
  {
    doctorId: 0,
    nume: "Oltean",
    prenume: "Emanuel",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
    codParafa: "asd",
  },
  {
    doctorId: 0,
    nume: "Piscot5",
    prenume: "Iscot",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
    codParafa: "1000",
  },
];

export const mockedClinici: Clinica[] = [
  {
    clinicaId: 0,
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
    latitudine: 22,
    longitudine: 11,
    //doctorId: 1,
    //id: 1,
    tratamente: "string",
  },
  {
    clinicaId: 0,
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
    latitudine: 22,
    longitudine: 11,
    //doctorId: 1,
    //id: 1,
    tratamente: "string",
  },
  {
    clinicaId: 0,
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
    latitudine: 22,
    longitudine: 11,
    //doctorId: 1,
    //id: 1,
    tratamente: "string",
  },
  {
    clinicaId: 0,
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
    latitudine: 22,
    longitudine: 11,
    //doctorId: 1,
    //id: 1,
    tratamente: "string",
  },
  {
    clinicaId: 0,
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
    latitudine: 22,
    longitudine: 11,
    //doctorId: 1,
    //id: 1,
    tratamente: "string",
  },
  {
    clinicaId: 0,
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
    latitudine: 22,
    longitudine: 11,
    //doctorId: 1,
    //id: 1,
    tratamente: "string",
  },
];

export const mockedOptions: Optiuni[] = [
  { value: "Picior Rupt", label: "picior_rupt" },
  { value: "Durere de gat", label: "durere_gat" },
];
