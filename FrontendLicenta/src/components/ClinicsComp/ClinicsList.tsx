import * as React from "react";
import { ClinicsItem } from "./ClinicsItem";
import { mockedClinici } from "../../common/HardcodedData";
import { List } from "antd";
import { Clinica } from "../../common/common";
export interface ClinicsListProps {
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
  clinici: Clinica[] | undefined;
}

export const ClinicsList = ({
  navigateToAppointment,
  setClinicaActuala,
  clinici,
}: ClinicsListProps) => {
  return (
    <List
      style={{ width: "100%", maxWidth: 900 }}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={clinici}
      renderItem={(item) => (
        <ClinicsItem
          clinica={item}
          navigateToAppointment={navigateToAppointment}
          setClinicaActuala={setClinicaActuala}
        />
      )}
    />
  );
};
