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
      />
      <Navigation activeScreen={screens}>
        <Loading navigateToAutentificare={navigateToAutentificare}></Loading>
        <Autentificare
          navigateToHealthProblems={navigateToHealthProblems}
          navigateToAutentificare={navigateToAutentificare}
        ></Autentificare>
        <HealthProblemPage navigateToClinics={navigateToClinics} />
        <Clinics
          navigateToAppointment={navigateToAppointment}
          setClinicaActuala={setClinicaActuala}
        />
        <DetaliiClinica
          navigateToClinics={navigateToClinics}
          imagine={clinicaActuala?.imagine}
        />
      </Navigation>
    </div>
  );
};

export default App;
