import * as React from "react";
import { Image } from "antd";
import { ListaDoctori } from "./ListaDoctori";

export interface DetaliiClinicaProps {
  navigateToClinics: () => void;
  imagine: string | undefined;
}

export const DetaliiClinica = ({
  navigateToClinics,
  imagine,
}: DetaliiClinicaProps) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Image
        style={{ marginLeft: "1200px", marginTop: "150px" }}
        width={400}
        src={imagine}
        preview={false}
      />
      <ListaDoctori></ListaDoctori>
    </div>
  );
};
