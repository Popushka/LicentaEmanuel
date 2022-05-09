import { useState } from "react";
import { Clinica } from "../common/common";

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
  };

  const navigateToClinics = () => {
    setScreens(Screens.Clinics);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Clinicile disponibile pentru problema ta");
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
  };
};
