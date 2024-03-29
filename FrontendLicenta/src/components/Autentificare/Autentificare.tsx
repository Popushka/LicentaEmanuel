import * as React from "react";
import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { ModalRegister } from "./Register";
import { Doctori, User } from "../../common/common";
import axios from "axios";
import queryString from "query-string";

export interface LoginProps {
  navigateToHealthProblems: () => void;
  navigateToAutentificare: () => void;
  navigateToPacientiPage: () => void;
  navigateToSymptomChecker: () => void;
  setUserActual: (arg0: User) => void;
  setDoctorActual: (arg0: Doctori) => void;
}

export const Autentificare = ({
  navigateToHealthProblems,
  navigateToAutentificare,
  navigateToPacientiPage,
  setUserActual,
  setDoctorActual,
  navigateToSymptomChecker,
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
  const [nume_utilizator, setNume_Utilizator] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cod_parafa, setCod_Parafa] = React.useState("");
  const [datePacient, setDatePacient] = React.useState<User>({
    pacientId: 0,
    nume: "",
    prenume: "",
    nume_utilizator: "",
    parola: "",
    email: "",
    varsta: 0,
    diagnostic: "",
    detalii: "",
    pacientCNP: 0,
    programareId: 0,
  });

  console.log(isDoctor);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("datePacient??:", datePacient);
    if (datePacient != undefined)
      axios
        .post(
          "  https://localhost:44386/pacient",
          {
            Nume_utilizator: datePacient.nume_utilizator,
            Password: datePacient.parola,
            Email: datePacient.email,
            Nume: datePacient.nume,
            Prenume: datePacient.prenume,
            Varsta: datePacient.varsta,
            Diagnostic: " ",
            Detalii: "string",
            PacientCNP: datePacient.pacientCNP,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(async (raspuns) => {
          console.log(raspuns.data);
        })
        .catch((e) => console.log(e));
    navigateToSymptomChecker();
    //navigateToHealthProblems();
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
              onChange={(e) => {
                setNume_Utilizator(e.currentTarget.value);
              }}
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
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
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
                onChange={(e) => {
                  setCod_Parafa(e.currentTarget.value);
                }}
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
              style={{
                marginRight: "64px",
                width: isDoctor ? "155px" : "",
                marginLeft: isDoctor ? "60px" : "",
              }}
              type="primary"
              className="login-form-button"
              onClick={() => {
                console.log("nume_utilizator:", nume_utilizator);
                console.log("parola", password);
                if (isDoctor === false) {
                  axios
                    .get("https://localhost:44386/pacient/user_actual", {
                      params: {
                        numeUtilizator: nume_utilizator,
                        password: password,
                      },
                    })
                    .then(async (raspuns) => {
                      setUserActual(raspuns.data);
                      console.log(raspuns.data);
                    })
                    .catch((e) => console.log(e));
                  navigateToHealthProblems();
                } else {
                  axios
                    .get("https://localhost:44386/doctor/doctor_actual", {
                      params: {
                        codParafa: cod_parafa,
                      },
                    })
                    .then(async (raspuns) => {
                      setDoctorActual(raspuns.data);
                      console.log("doctorActual", raspuns.data);
                    })
                    .catch((e) => console.log(e));
                  navigateToPacientiPage();
                }
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
            >
              <ModalRegister
                setDatePacient={setDatePacient}
                isDoctor={isDoctor}
              ></ModalRegister>
            </Modal>
          ) : null}
        </Form>
      </div>
    </div>
  );
};
