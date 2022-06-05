import * as React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Cascader,
  Card,
  Avatar,
  Modal,
} from "antd";
import { User } from "../../common/common";
import Disease from "../medical-symptom-checker-master/src/components/Disease/Disease";
import Meta from "antd/lib/card/Meta";
import { ProgramarePage } from "../PacientiPage/PaginaProgramare";
import { mockedProgramari } from "../../common/HardcodedData";
import { PacientiPage } from "../PacientiPage/Pacienti";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const options = [
  {
    value: "picior_rupt",
    label: "Picior Rupt",
  },
  {
    value: "durere_gat",
    label: "Durere in gat",
  },
];
export interface HealthProblemFormProps {
  navigateToClinics: () => void;
  userActual: User | undefined;
  navigateToAutodiagnosticare: () => void;
}

export const HealthProblemForm = ({
  navigateToClinics,
  navigateToAutodiagnosticare,
  userActual,
}: HealthProblemFormProps) => {
  const onChange = (values: any) => {
    console.log(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
    navigateToClinics();
  };
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isDetalii, setIsDetalii] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsDetalii(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsDetalii(false);
  };
  console.log("userActual:", userActual);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      {" "}
      <Button
        style={{
          marginTop: " -100px",
          marginLeft: " -500px",
          marginRight: " 300px",
        }}
        type="default"
        htmlType="button"
        onClick={(e) => {
          setIsDetalii(true);
          setIsModalVisible(true);
        }}
      >
        Programare:
      </Button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="Diagnostic">
            <Card style={{ width: 300 }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={userActual?.nume}
                description={userActual?.diagnostic}
              />
            </Card>
          </Form.Item>

          <Form.Item
            style={{ display: "flex", alignContent: "center" }}
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          >
            <Button
              style={{ marginLeft: "50px" }}
              type="primary"
              htmlType="button"
              onClick={(e) => {
                navigateToAutodiagnosticare();
              }}
            >
              Autodiagnosticare din nou
            </Button>
            <Button
              style={{ marginTop: "20px", marginLeft: "80px" }}
              type="default"
              htmlType="submit"
            >
              Cautare Clinici
            </Button>
          </Form.Item>

          <Modal
            title="Programare"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <PacientiPage
              isDetalii={isDetalii}
              programari={mockedProgramari}
            ></PacientiPage>
            {/* <ProgramarePage programare={userActual?.programareId}></ProgramarePage> */}
          </Modal>
        </Form>
      </div>
    </div>
  );
};
