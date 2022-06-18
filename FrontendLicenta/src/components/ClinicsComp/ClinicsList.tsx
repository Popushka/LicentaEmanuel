import * as React from "react";
import { ClinicsItem } from "./ClinicsItem";
import { mockedClinici } from "../../common/HardcodedData";
import { List } from "antd";
import { Clinica, User } from "../../common/common";
export interface ClinicsListProps {
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
  clinici: Clinica[];
  userActual: User | undefined;
  clinicaActuala: Clinica;
}

export const ClinicsList = ({
  navigateToAppointment,
  setClinicaActuala,
  clinicaActuala,
  clinici,
  userActual,
}: ClinicsListProps) => {
  return (
    <List
      style={{ width: "100%", maxWidth: 900 }}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log("page:", page);
        },
        pageSize: 10,
      }}
      dataSource={clinici}
      renderItem={(item) => {
        if (item.tratamente === userActual?.diagnostic)
          return (
            <ClinicsItem
              clinicaActuala={clinicaActuala}
              clinica={item}
              navigateToAppointment={navigateToAppointment}
              setClinicaActuala={setClinicaActuala}
            />
          );
      }}
    />
  );
};
