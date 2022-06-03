import { ListaDoctori } from "./ListaDoctori";
import { Map } from "../Map/Map";
import { Clinica, Doctori } from "../../common/common";
import { mockedDoctori } from "../../common/HardcodedData";

export interface DetaliiClinicaProps {
  clinicaActuala: Clinica | undefined;
}

export const DetaliiClinica = ({ clinicaActuala }: DetaliiClinicaProps) => {
  return (
    <div style={{ marginLeft: "400px", display: "flex" }}>
      <ListaDoctori doctori={mockedDoctori}></ListaDoctori>
      {clinicaActuala !== undefined ? (
        <Map
          latitudine={clinicaActuala?.latitudine}
          longitudine={clinicaActuala?.longitudine}
        ></Map>
      ) : null}
    </div>
  );
};
