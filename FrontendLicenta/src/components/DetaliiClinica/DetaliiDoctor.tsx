import { Card } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Doctori, User } from "../../common/common";
import { useState } from "react";
import { ModalProgramare } from "./ModalProgramare";
import axios from "axios";

const { Meta } = Card;
export interface DetaliiDoctorProps {
  doctor: Doctori;
  userActual: User;
}

export const DetaliiDoctor = ({ doctor, userActual }: DetaliiDoctorProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataProgramarii, setDataProgramarii] = useState<string>("");
  const [detaliiAditionale, setDetaliiAditionale] = useState<string>("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(userActual);
    axios
      .post("https://localhost:44386/programare", {
        data_programarii: "2022-07-07 13:45:00",
        detalii_aditionale: userActual.detalii,
        doctorId: doctor.doctorId,
        pacientId: userActual.pacientId,
      })
      .then(async (raspuns) => {
        console.log(raspuns.data);
      })
      .catch((e) => console.log(e));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Card
        style={{ width: 250 }}
        bodyStyle={{ padding: "20px" }}
        cover={
          <img
            alt="example"
            src={
              "https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg"
            }
            style={{ border: "0.1px solid #e6e6e6" }}
          />
        }
        actions={[
          <CalendarOutlined
            key="CalendarOutlined"
            style={{ fontSize: "15px" }}
            onClick={() => {
              showModal();
            }}
          />,
        ]}
      >
        <Meta
          title={doctor.nume + " " + doctor.prenume}
          description={doctor.descriere}
          style={{ maxHeight: "60px", marginTop: "-22px" }}
        />
      </Card>
      <Modal
        title="Programare consult"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalProgramare
          userActual={userActual}
          setDataProgramarii={setDataProgramarii}
          setDetaliiAditionale={setDetaliiAditionale}
        ></ModalProgramare>
      </Modal>
    </div>
  );
};
