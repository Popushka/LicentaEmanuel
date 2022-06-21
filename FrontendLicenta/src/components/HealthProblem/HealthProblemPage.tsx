import { Doctori, Programare, User } from "../../common/common";
import { HealthProblemForm } from "./HealthProblemForm";

export interface HealthProblemPageProps {
  navigateToClinics: () => void;
  userActual: User;
  navigateToAutodiagnosticare: () => void;
  doctorActual: Doctori;
  programari: Programare[] | undefined;
}

export const HealthProblemPage = ({
  navigateToClinics,
  navigateToAutodiagnosticare,
  userActual,
  doctorActual,
  programari,
}: HealthProblemPageProps) => {
  return (
    <div>
      <HealthProblemForm
        doctorActual={doctorActual}
        navigateToAutodiagnosticare={navigateToAutodiagnosticare}
        userActual={userActual}
        navigateToClinics={navigateToClinics}
        programari={programari}
      ></HealthProblemForm>
    </div>
  );
};
