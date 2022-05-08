import * as React from "react";
import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { ModalRegister } from "./Register";

export interface LoginProps {
  navigateToHealthProblems: () => void;
  navigateToAutentificare: () => void;
  navigateToPacientiPage: () => void;
}

export const Autentificare = ({
  navigateToHealthProblems,
  navigateToAutentificare,
  navigateToPacientiPage,
}: LoginProps) => {
  navigateToAutentificare();

  const [alignment, setAlignment] = React.useState("pacient");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isDoctor, setIsDoctor] = React.useState(false);
  console.log(isDoctor);
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
      <ToggleButtonGroup
        style={{ display: "flex", justifyContent: "flex-end" }}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton
          value="doctor"
          onClick={() => {
            setIsDoctor(true);
          }}
        >
          Doctor
        </ToggleButton>
        <ToggleButton
          value="pacient"
          onClick={() => {
            setIsDoctor(false);
          }}
        >
          Pacient
        </ToggleButton>
      </ToggleButtonGroup>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Introduceti numele de utilizator!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nume Utilizator"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Introduceti parola!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="middle"
              type="password"
              placeholder="Parola"
            />
          </Form.Item>
          {alignment === "doctor" ? (
            <Form.Item
              name="cod_parafa"
              rules={[
                {
                  required: true,
                  message: "Introduceti codul parafa!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="middle"
                type="cod_parafa"
                placeholder="Cod Parafa"
              />
            </Form.Item>
          ) : (
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Introduceti adresa de email!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="middle"
                type="email"
                placeholder="Email"
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              style={{ marginRight: "64px", width:isDoctor?"155px":"", marginLeft:isDoctor?"60px":"" }}
              type="primary"
              className="login-form-button"
              onClick={() => {
                if (isDoctor === false) navigateToHealthProblems();
                else navigateToPacientiPage();
              }}
            >
              Log in
            </Button>
            {isDoctor === false ? (
              <Button
                onClick={() => {
                  setIsModalVisible(true);
                }}
                style={{ marginLeft: "64px" }}
              >
                Register
              </Button>
            ) : null}
          </Form.Item>
          {isDoctor === false ? (
            <Modal
              title="Inregistrare"
              visible={isModalVisible}
              okText="Register"
              onOk={handleOk}
              onCancel={handleCancel}
            ><ModalRegister isDoctor={isDoctor}></ModalRegister></Modal>
          ) : null}
        </Form>
      </div>
    </div>
  );
};
