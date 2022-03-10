import { Card } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Doctori } from "../../common/common";
import { useState } from "react";
import { ModalProgramare } from "./ModalProgramare";

const { Meta } = Card;
export interface DetaliiDoctorProps {
  doctor: Doctori;
}

export const DetaliiDoctor = ({ doctor }: DetaliiDoctorProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
            src={doctor.imagine}
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
        <ModalProgramare></ModalProgramare>
      </Modal>
    </div>
  );
};
