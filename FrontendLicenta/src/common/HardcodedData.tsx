import { Doctori, Clinica, Programare, User, Optiuni } from "./common";

export const mockedUser: User = {
  nume: "Emanuel",
  prenume: "Oltean",
  varsta: 21,
  diagnostic: "Picior Rupt",
  detalii: "Ma doare piciorul",
};

export const mockedProgramari: Programare[] = [
  {
    pacient: mockedUser,
    data_programarii: "12 mai 2022",
    detalii_aditionale: mockedUser.detalii,
  },
];

export const mockedDoctori: Doctori[] = [
  {
    nume: "Stefan",
    prenume: "Carina",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
  },
  {
    nume: "Paul",
    prenume: "",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
  },
  {
    nume: "Oltean",
    prenume: "Emanuel",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
  },
  {
    nume: "Oltean",
    prenume: "Emanuel",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
  },
  {
    nume: "Piscot5",
    prenume: "Iscot",
    programari: mockedProgramari,
    imagine:
      "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg",
    descriere: `Aici e descrierea fiecarui doctooooor`,
  },
];

export const mockedClinici: Clinica[] = [
  {
    nume: "Clinica 1",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
  },
  {
    nume: "Clinica 2",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
  },
  {
    nume: "Clinica 3",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
  },
  {
    nume: "Clinica 4",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
  },
  {
    nume: "Clinica 5",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
  },
  {
    nume: "Clinica 6",
    adresa: "Revolutiei 192",
    descriere: "descriere",
    imagine: "https://placekitten.com/400/400",
    doctori: mockedDoctori,
  },
];

export const mockedOptions: Optiuni[] = [
  { value: "Picior Rupt", label: "picior_rupt" },
  { value: "Durere de gat", label: "durere_gat" },
];
