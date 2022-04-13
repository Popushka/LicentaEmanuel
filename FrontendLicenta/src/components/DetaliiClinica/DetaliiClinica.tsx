import * as React from "react";
import { Image } from "antd";
import { ListaDoctori } from "./ListaDoctori";
import { Map } from "../Map/Map";

export interface DetaliiClinicaProps {}

export const DetaliiClinica = ({}: DetaliiClinicaProps) => {
  return (
    <div style={{ marginLeft: "400px", display: "flex" }}>
      <ListaDoctori></ListaDoctori>
      <Map></Map>
    </div>
  );
};
