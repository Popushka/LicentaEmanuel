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
  const [clinicaActuala, setClinicaActuala] = useState<Clinica>();
  const [doctori, setDoctori] = useState<Doctori[]>([]);
  const [pacienti, setPacienti] = useState<User[]>([]);
  const [clinici, setClinici] = useState<Clinica[]>();
  const [programari, setProgramari] = useState<Programare[]>();
  const [user, setUser] = useState<User>();
  const [bearer, setBearer] = useState<any>([]);
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

  const getUserActual = async () => {
    axios
      .get("https://localhost:44386/pacient/user_actual", {
        params: { numeUtilizator: "", password: "" },
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
  };
};
