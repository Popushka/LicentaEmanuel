import * as React from "react";
import { Clinica } from "../../common/common";
import { ClinicsList } from "./ClinicsList";

export interface ClinicsProps {
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
  clinici: Clinica[]|undefined;
}

export const Clinics = ({
  navigateToAppointment,
  setClinicaActuala,
  clinici,
}: ClinicsProps) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
    >
      <ClinicsList
        clinici={clinici}
        navigateToAppointment={navigateToAppointment}
        setClinicaActuala={setClinicaActuala}
      />
    </div>
  );
};
