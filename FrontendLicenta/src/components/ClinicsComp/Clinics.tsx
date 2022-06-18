import * as React from "react";
import { Clinica, User } from "../../common/common";
import { ClinicsList } from "./ClinicsList";

export interface ClinicsProps {
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
  clinici: Clinica[];
  userActual: User | undefined;
  clinicaActuala: Clinica;
}

export const Clinics = ({
  navigateToAppointment,
  setClinicaActuala,
  clinici,
  userActual,
  clinicaActuala,
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
        clinicaActuala={clinicaActuala}
      />
    </div>
  );
};
