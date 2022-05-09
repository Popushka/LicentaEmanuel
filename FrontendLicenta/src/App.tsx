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
import HomePageMain from "./components/SymptomChecker/HomePageMain";

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
          navigateToSymptomChecker={navigateToSymptomChecker}
          navigateToPacientiPage={navigateToPacientiPage}
          navigateToHealthProblems={navigateToHealthProblems}
          navigateToAutentificare={navigateToAutentificare}
        ></Autentificare>
        <HealthProblemPage navigateToClinics={navigateToClinics} />
        <Clinics
          navigateToAppointment={navigateToAppointment}
          setClinicaActuala={setClinicaActuala}
        />
        <DetaliiClinica />
        <PacientiPage></PacientiPage>
        <HomePageMain></HomePageMain>
      </Navigation>
    </div>
  );
};

export default App;
