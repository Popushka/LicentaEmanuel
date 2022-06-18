import { ListaDoctori } from "./ListaDoctori";
import { Map } from "../Map/Map";
import { Clinica, Doctori, User } from "../../common/common";
import { mockedDoctori } from "../../common/HardcodedData";

export interface DetaliiClinicaProps {
  clinicaActuala: Clinica | undefined;
  userActual: User;
}

export const DetaliiClinica = ({
  clinicaActuala,
  userActual,
}: DetaliiClinicaProps) => {
  console.log("clinicaActuala:", clinicaActuala?.doctori);
  return (
    <div style={{ marginLeft: "400px", display: "flex" }}>
      <ListaDoctori
        userActual={userActual}
        doctori={clinicaActuala?.doctori}
      ></ListaDoctori>
      {clinicaActuala !== undefined ? (
        <Map
          latitudine={clinicaActuala?.latitudine}
          longitudine={clinicaActuala?.longitudine}
        ></Map>
      ) : null}
    </div>
  );
};
