import { User } from "../../common/common";
import { HealthProblemForm } from "./HealthProblemForm";

export interface HealthProblemPageProps {
  navigateToClinics: () => void;
  userActual: User | undefined;
  navigateToAutodiagnosticare: () => void;
}

export const HealthProblemPage = ({
  navigateToClinics,
  navigateToAutodiagnosticare,
  userActual,
}: HealthProblemPageProps) => {
  return (
    <div>
      <HealthProblemForm
        navigateToAutodiagnosticare={navigateToAutodiagnosticare}
        userActual={userActual}
        navigateToClinics={navigateToClinics}
      ></HealthProblemForm>
    </div>
  );
};
