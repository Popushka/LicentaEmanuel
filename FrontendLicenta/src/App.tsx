import "./App.css";
import { Clinics } from "./components/ClinicsComp/Clinics";
import { Loading } from "./components/Loading";
import { SiteHeader } from "./components/Header";
import { HealthProblemPage } from "./components/HealthProblem/HealthProblemPage";
import { Navigation } from "./components/Navigation";
import { useApp } from "./components/StateFile";
import { DetaliiClinica } from "./components/DetaliiClinica/DetaliiClinica";
import { mockedClinici } from "./common/HardcodedData";

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
    clinicaActuala
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
      />
      <Navigation activeScreen={screens}>
        <Loading navigateToHealthProblems={navigateToHealthProblems}></Loading>
        <HealthProblemPage navigateToClinics={navigateToClinics} />
        <Clinics navigateToAppointment={navigateToAppointment} setClinicaActuala={setClinicaActuala} />
        <DetaliiClinica navigateToClinics={navigateToClinics} imagine={clinicaActuala?.imagine} />
      </Navigation>
    </div>
  );
};

export default App;
