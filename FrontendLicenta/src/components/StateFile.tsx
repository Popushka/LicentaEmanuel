import { useState } from "react";
import { Clinica, Doctori, Programare, User } from "../common/common";
import axios from "axios";

export enum Screens {
  Loading,
  Autentificare,
  HealthProblem,
  Clinics,
  ClinicDetails,
  PacientiPage,
  SymptomChecker,
}

export const useApp = () => {
  const [screens, setScreens] = useState<number>(Screens.Loading);
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  const [headerTitle, setHeaderTitle] = useState("");
  const [backButtonVisible, setBackButtonVisible] = useState(false);
  const [clinicaActuala, setClinicaActuala] = useState<Clinica>({
    nume: "",
    adresa: "",
    clinicaId: 0,
    descriere: "",
    doctori: [
      {
        doctorId: 0,
        nume: "",
        prenume: "",
        programari: [
          {
            id: 0,
            pacient: {
              pacientId: 0,
              nume: "",
              prenume: "",
              parola: "",
              email: "",
              nume_utilizator: "",
              varsta: 0,
              diagnostic: "",
              detalii: "",
              pacientCNP: 0,
              programareId: 0,
            },
            data_programarii: "",
            detalii_aditionale: "",
            status: false,
            pacientId: 0,
          },
        ],
        imagine: "",
        descriere: "",
        codParafa: "",
      },
    ],
    longitudine: 0,
    latitudine: 0,
    imagine: "",
    tratamente: "",
  });
  const [doctori, setDoctori] = useState<Doctori[]>([]);
  const [pacienti, setPacienti] = useState<User[]>([]);
  const [clinici, setClinici] = useState<Clinica[]>([
    {
      nume: "",
      adresa: "",
      clinicaId: 0,
      descriere: "",
      doctori: [
        {
          doctorId: 0,
          nume: "",
          prenume: "",
          programari: [
            {
              id: 0,
              pacient: {
                pacientId: 0,
                nume: "",
                prenume: "",
                parola: "",
                email: "",
                nume_utilizator: "",
                varsta: 0,
                diagnostic: "",
                detalii: "",
                pacientCNP: 0,
                programareId: 0,
              },
              data_programarii: "",
              detalii_aditionale: "",
              status: false,
              pacientId: 0,
            },
          ],
          imagine: "",
          descriere: "",
          codParafa: "",
        },
      ],
      longitudine: 0,
      latitudine: 0,
      imagine: "",
      tratamente: "",
    },
  ]);
  const [programari, setProgramari] = useState<Programare[]>();
  const [userActual, setUserActual] = useState<User>({
    pacientId: 0,
    nume: "",
    prenume: "",
    parola: "",
    email: "",
    nume_utilizator: "",
    varsta: 0,
    diagnostic: "",
    detalii: "",
    pacientCNP: 0,
    programareId: 0,
  });
  const [user, setUser] = useState<User>();
  const [bearer, setBearer] = useState<any>([]);
  const [doctorActual, setDoctorActual] = useState<Doctori>({
    doctorId: 0,
    nume: "",
    prenume: "",
    programari: [
      {
        id: 0,
        pacient: {
          pacientId: 0,
          nume: "",
          prenume: "",
          parola: "",
          email: "",
          nume_utilizator: "",
          varsta: 0,
          diagnostic: "",
          detalii: "",
          pacientCNP: 0,
          programareId: 0,
        },
        data_programarii: "",
        detalii_aditionale: "",
        status: false,
        pacientId: 0,
      },
    ],
    imagine: "",
    descriere: "",
    codParafa: "",
  });
  const getBearer = async () => {
    axios
      .post<string>(
        "https://localhost:44386/authorization",
        { Username: "string", Password: "string" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setBearer(response);
      });
  };
  const getPacienti = async () => {
    axios
      .get("https://localhost:44386/pacient")
      .then(async (raspuns) => {
        setPacienti(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };
  const adaugareDiagnostic = async () => {
    axios
      .put("  https://localhost:44386/pacient", {
        pacientCNP: "string",
        diagnostic: "string",
      })
      .then(async (raspuns) => {
        setPacienti(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };

  const getDoctori = async () => {
    axios
      .get("https://localhost:44386/doctor")
      .then(async (raspuns) => {
        setDoctori(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };

  const getProgramare = async () => {
    axios
      .get("https://localhost:44386/programare")
      .then(async (raspuns) => {
        setProgramari(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };
  const getClinica = async () => {
    axios
      .get("https://localhost:44386/clinica")
      .then(async (raspuns) => {
        setClinici(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };

  const adaugareProgramare = async () => {
    axios
      .post("https://localhost:44386/programare", {
        params: {
          pacientCNP: 5000512114542,
          data_programarii: "string",
          detalii_aditionale: "string",
          doctorId: 2,
        },
      })
      .then(async (raspuns) => {
        setClinici(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };

  const getUserActual = async (nume_utilizator: string, parola: string) => {
    axios
      .get("https://localhost:44386/pacient/user_actual", {
        params: { numeUtilizator: nume_utilizator, password: parola },
      })
      .then(async (raspuns) => {
        setClinici(raspuns.data);
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };

  const navigateToAutentificare = () => {
    setScreens(Screens.Autentificare);
    setBackButtonVisible(false);
    setHeaderVisible(true);
    setHeaderTitle("Autentificare");
  };

  const navigateToSymptomChecker = () => {
    setScreens(Screens.SymptomChecker);
    setBackButtonVisible(false);
    setHeaderVisible(false);
  };

  const navigateToPacientiPage = () => {
    setScreens(Screens.PacientiPage);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Pacientii");
    getPacienti();
    getProgramare();
    getDoctori();
    console.log(pacienti);
  };

  const navigateToClinics = () => {
    setScreens(Screens.Clinics);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Clinicile disponibile pentru problema ta");
    getClinica();
  };
  const navigateToHealthProblems = () => {
    setScreens(Screens.HealthProblem);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Diagnosticarea problemei");
    getProgramare();
    console.log(programari);
  };
  const navigateToAppointment = () => {
    setScreens(Screens.ClinicDetails);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Detalii Clinica");
  };

  return {
    screens,
    headerVisible,
    headerTitle,
    backButtonVisible,
    navigateToClinics,
    navigateToHealthProblems,
    navigateToAppointment,
    navigateToAutentificare,
    navigateToPacientiPage,
    navigateToSymptomChecker,
    clinicaActuala,
    setClinicaActuala,
    clinici,
    doctori,
    programari,
    pacienti,
    setUserActual,
    userActual,
    setDoctorActual,
    doctorActual,
  };
};
