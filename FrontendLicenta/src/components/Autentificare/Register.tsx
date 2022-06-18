import { Input, Form, InputNumber, Cascader, Button } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  mockedDoctori,
  mockedOptions,
  mockedUser,
} from "../../common/HardcodedData";
import { LockOutlined } from "@mui/icons-material";
import { User } from "../../common/common";
export interface ModalRegisterProps {
  isDoctor: boolean;
  setDatePacient: Dispatch<SetStateAction<User>>;
}
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

const options = mockedOptions;

export const ModalRegister = ({
  isDoctor,
  setDatePacient,
}: ModalRegisterProps) => {
  const onChange = (values: any) => {
    console.log(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const [value, setValue] = React.useState<Date | null>(
    new Date("2022-01-01T00:00:00.000Z")
  );
  let datePacient: User = {
    pacientId: 0,
    detalii: "",
    diagnostic: "",
    email: "",
    nume: "",
    nume_utilizator: "",
    pacientCNP: 0,
    parola: "",
    prenume: "",
    varsta: 0,
    programareId: 0,
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      labelAlign="left"
      layout="horizontal"
      onValuesChange={(e) => {
        console.log("date pacieeeent  :", datePacient);
      }}
      onFinish={(e) => {
        console.log("setare date :", datePacient);
        setDatePacient(datePacient);
      }}
    >
      <Form.Item label="Nume Utilizator">
        <Input
          onBlur={(e) => {
            datePacient.nume_utilizator = e.target.value;
          }}
          placeholder={mockedUser.nume}
        />
      </Form.Item>

      <Form.Item name={["user", "email"]} label="Email">
        <Input
          onBlur={(e) => {
            datePacient.email = e.target.value;
          }}
          placeholder={mockedUser.email}
        />
      </Form.Item>
      <Form.Item
        name={["user", "password"]}
        label="Parola"
        rules={[
          {
            required: true,
            message: "Introduceti parola!",
          },
        ]}
      >
        <Input
          onBlur={(e) => {
            console.log(e);
            datePacient.parola = e.target.value;
          }}
          type="password"
          placeholder="Parola"
        />
      </Form.Item>
      <Form.Item
        name={["user", "nume"]}
        label="Nume"
        rules={[{ required: true }]}
      >
        <Input
          onBlur={(e) => {
            datePacient.nume = e.target.value;
          }}
        />
      </Form.Item>
      <Form.Item
        name={["user", "prenume"]}
        label="Prenume"
        rules={[{ required: true }]}
      >
        <Input
          onBlur={(e) => {
            datePacient.prenume = e.target.value;
          }}
        />
      </Form.Item>
      <Form.Item
        name={["user", "varsta"]}
        label="Varsta"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber
          onBlur={(e) => {
            if (e.target.ariaValueNow != null)
              datePacient.varsta = parseInt(e.target.ariaValueNow);
          }}
        />
      </Form.Item>
      <Form.Item name={["user", "CNP"]} label="CNP">
        <InputNumber
          onBlur={(e) => {
            console.log("e", e);
            if (e.target.ariaValueNow != null)
              datePacient.pacientCNP = parseInt(e.target.ariaValueNow);
            console.log(datePacient);

            setDatePacient(datePacient);
          }}
          minLength={13}
          maxLength={13}
          style={{ width: "135px" }}
        />
      </Form.Item>
    </Form>
  );
};
