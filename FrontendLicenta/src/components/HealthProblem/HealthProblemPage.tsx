import { Doctori, User } from "../../common/common";
import { HealthProblemForm } from "./HealthProblemForm";

export interface HealthProblemPageProps {
  navigateToClinics: () => void;
  userActual: User | undefined;
  navigateToAutodiagnosticare: () => void;
  doctorActual: Doctori;
}

export const HealthProblemPage = ({
  navigateToClinics,
  navigateToAutodiagnosticare,
  userActual,
  doctorActual,
}: HealthProblemPageProps) => {
  return (
    <div>
      <HealthProblemForm
        doctorActual={doctorActual}
        navigateToAutodiagnosticare={navigateToAutodiagnosticare}
        userActual={userActual}
        navigateToClinics={navigateToClinics}
      ></HealthProblemForm>
    </div>
  );
};
