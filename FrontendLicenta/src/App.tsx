import "./App.css";
import { Clinics } from "./components/ClinicsComp/Clinics";
import { Loading } from "./components/Loading";
import { SiteHeader } from "./components/Header";
import { HealthProblemPage } from "./components/HealthProblem/HealthProblemPage";
import { Navigation } from "./components/Navigation";
import { useApp } from "./components/StateFile";
import { DetaliiClinica } from "./components/DetaliiClinica/DetaliiClinica";
import { mockedClinici } from "./common/HardcodedData";
import { Autentificare } from "./components/Autentificare/Autentificare";
import { PacientiPage } from "./components/PacientiPage/Pacienti";
import { ProgramarePage } from "./components/PacientiPage/PaginaProgramare";
import HomePageMain from "./components/medical-symptom-checker-master/src/HomePageMain";

export const App = () => {
  const {
    screens,
    headerVisible,
    headerTitle,
    backButtonVisible,
    navigateToClinics,
    navigateToHealthProblems,
    navigateToAppointment,
    setClinicaActuala,
    navigateToAutentificare,
    navigateToPacientiPage,
    navigateToSymptomChecker,
    clinicaActuala,
    clinici,
    doctori,
    programari,
    pacienti,
    setUserActual,
    userActual,
    setDoctorActual,
    doctorActual,
  } = useApp();
  return (
    <div>
      <SiteHeader
        backButtonVisible={backButtonVisible}
        screens={screens}
        headerTitle={headerTitle}
        headerVisible={headerVisible}
        navigateToAppointment={navigateToAppointment}
        navigateToClinics={navigateToClinics}
        navigateToHealthProblems={navigateToHealthProblems}
        navigateToAutentificare={navigateToAutentificare}
        navigateToPacientiPage={navigateToPacientiPage}
      />
      <Navigation activeScreen={screens}>
        <Loading navigateToAutentificare={navigateToAutentificare}></Loading>
        <Autentificare
          setDoctorActual={setDoctorActual}
          setUserActual={setUserActual}
          navigateToSymptomChecker={navigateToSymptomChecker}
          navigateToPacientiPage={navigateToPacientiPage}
          navigateToHealthProblems={navigateToHealthProblems}
          navigateToAutentificare={navigateToAutentificare}
        ></Autentificare>
        <HealthProblemPage
          doctorActual={doctorActual}
          navigateToAutodiagnosticare={navigateToSymptomChecker}
          userActual={userActual}
          navigateToClinics={navigateToClinics}
        />
        <Clinics
          clinicaActuala={clinicaActuala}
          userActual={userActual}
          clinici={clinici}
          navigateToAppointment={navigateToAppointment}
          setClinicaActuala={setClinicaActuala}
        />
        <DetaliiClinica
          userActual={userActual}
          clinicaActuala={clinicaActuala}
        />
        <PacientiPage
          DoctorActual={doctorActual}
          isDetalii={false}
          programari={programari}
        ></PacientiPage>
        <HomePageMain></HomePageMain>
      </Navigation>
    </div>
  );
};

export default App;
