import { HealthProblemForm } from "./HealthProblemForm";

export interface HealthProblemPageProps {
  navigateToClinics: () => void;
}

export const HealthProblemPage = ({
  navigateToClinics,
}: HealthProblemPageProps) => {
  return (
    <div>
      <HealthProblemForm
        navigateToClinics={navigateToClinics}
      ></HealthProblemForm>
    </div>
  );
};
