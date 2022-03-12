import * as React from "react";
import { Image } from "antd";
import { ListaDoctori } from "./ListaDoctori";
import { Map } from "../Map/Map";

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
        style={{ marginLeft: "1500px", marginTop:"180px" }}
        width={400}
        src={imagine}
        preview={false}
      />
      <ListaDoctori></ListaDoctori>
      <Map></Map>
    </div>
  );
};
