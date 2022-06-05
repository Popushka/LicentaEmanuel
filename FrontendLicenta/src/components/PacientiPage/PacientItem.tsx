import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Programare, User } from "../../common/common";
import { useState } from "react";
import { ProgramarePage } from "./PaginaProgramare";
import { Modal } from "antd";

export interface PacientiItemInterface {
  programare: Programare;
  isDetalii: boolean;
}
export const PacientItem = ({
  programare,
  isDetalii,
}: PacientiItemInterface) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const statusProgramare = programare.status ? "Activa" : "Inactiva";
  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
          primary={
            isDetalii
              ? programare.pacient.diagnostic
              : programare.pacient?.nume + " " + programare.pacient?.prenume
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              Varsta:{programare.pacient?.varsta}
            </React.Fragment>
          }
        />
        <ListItemText
          primary={<React.Fragment> Status: {statusProgramare}</React.Fragment>}
        />
        <Button
          size="small"
          color="info"
          variant="outlined"
          onClick={showModal}
        >
          View
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
      <Modal
        title="Programare"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProgramarePage programare={programare}></ProgramarePage>
      </Modal>
    </div>
  );
};
