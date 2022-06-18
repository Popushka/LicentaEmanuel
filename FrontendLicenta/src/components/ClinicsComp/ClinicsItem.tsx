import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Clinica } from "../../common/common";
import axios from "axios";
import { AnyARecord } from "dns";

export interface ClinicsItemInterface {
  clinica: Clinica;
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
  clinicaActuala: Clinica;
}

export const ClinicsItem = ({
  clinica,
  clinicaActuala,
  navigateToAppointment,
  setClinicaActuala,
}: ClinicsItemInterface) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={clinica.imagine} />
        </ListItemAvatar>
        <ListItemText
          primary={clinica.nume}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {clinica.adresa}
            </React.Fragment>
          }
        />
        <Button
          onClick={(e) => {
            axios
              .get("https://localhost:44386/clinica/clinica_actual", {
                params: { ClinicaId: clinica.clinicaId },
              })
              .then(async (raspuns) => {
                let clinicaTemporar: Clinica = raspuns.data;
                console.log("clinicaTemporar:", clinicaTemporar);
                setClinicaActuala({
                  nume: clinicaTemporar.nume,
                  adresa: clinicaTemporar.adresa,
                  doctori: clinicaTemporar.doctori,
                  imagine: clinicaTemporar.imagine,
                  latitudine: clinicaTemporar.latitudine,
                  longitudine: clinicaTemporar.longitudine,
                  descriere: clinicaTemporar.descriere,
                  clinicaId: clinicaTemporar.clinicaId,
                  tratamente: clinicaTemporar.tratamente,
                });
                console.log("clinica Actualaaaaaaa:", clinicaActuala);
                console.log("raspuns clinica:", raspuns.data);
              })
              .catch((e) => console.log(e));
            navigateToAppointment();
          }}
          style={{ marginTop: "13px" }}
          size="small"
          color="info"
          variant="outlined"
        >
          View
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
