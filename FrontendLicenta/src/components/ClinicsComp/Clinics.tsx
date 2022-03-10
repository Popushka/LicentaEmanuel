import * as React from "react";
import { Clinica } from "../../common/common";
import { ClinicsList } from "./ClinicsList";

export interface ClinicsProps {
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
}

export const Clinics = ({
  navigateToAppointment,
  setClinicaActuala,
}: ClinicsProps) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
    >
      <ClinicsList
        navigateToAppointment={navigateToAppointment}
        setClinicaActuala={setClinicaActuala}
      />
    </div>
  );
};
