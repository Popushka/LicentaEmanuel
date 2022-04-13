import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { User } from "../../common/common";

export interface PacientiItemInterface {
  pacient: User;
  navigateToProgramare: () => void;
}
export const PacientItem = ({
  pacient,
  navigateToProgramare,
}: PacientiItemInterface) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={
              "https://www.nephrocare.ro/fileadmin/_processed_/a/9/csm_in_centre_treatment15_40f1bba91c.jpg"
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary={pacient.nume + " " + pacient.prenume}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              Varsta:{pacient.varsta}
            </React.Fragment>
          }
        />
        <Button
          style={{ marginTop: "13px" }}
          size="small"
          color="info"
          variant="outlined"
          onClick={navigateToProgramare}
        >
          View
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
