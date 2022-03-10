import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Clinica } from "../../common/common";

export interface ClinicsItemInterface {
  clinica: Clinica;
  navigateToAppointment: () => void;
  setClinicaActuala: (clinica: Clinica) => void;
}

export const ClinicsItem = ({
  clinica,
  navigateToAppointment,
  setClinicaActuala,
}: ClinicsItemInterface) => {
  setClinicaActuala(clinica);
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
          onClick={navigateToAppointment}
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
