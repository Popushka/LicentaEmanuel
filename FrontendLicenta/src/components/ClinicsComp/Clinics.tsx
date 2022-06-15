import * as React from "react";
import { Clinica, User } from "../../common/common";
import { ClinicsList } from "./ClinicsList";

export interface ClinicsProps {
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
  clinici: Clinica[] | undefined;
  userActual: User | undefined;
}

export const Clinics = ({
  navigateToAppointment,
  setClinicaActuala,
  clinici,
  userActual,
}: ClinicsProps) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
    >
      <ClinicsList
        userActual={userActual}
        clinici={clinici}
        navigateToAppointment={navigateToAppointment}
        setClinicaActuala={setClinicaActuala}
      />
    </div>
  );
};
