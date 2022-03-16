import { Input, Form, InputNumber, Cascader, Button } from "antd";
import React, { useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { mockedOptions, mockedUser } from "../../common/HardcodedData";
import { LockOutlined } from "@mui/icons-material";
export interface ModalRegisterProps {}
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

export const ModalRegister = ({}: ModalRegisterProps) => {
  const onChange = (values: any) => {
    console.log(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const [value, setValue] = React.useState<Date | null>(
    new Date("2022-01-01T00:00:00.000Z")
  );
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item name={["user", "nume"]} label="Nume">
        <Input placeholder={mockedUser.nume} />
      </Form.Item>
      <Form.Item name={["user", "prenume"]} label="Prenume">
        <Input placeholder={mockedUser.prenume} />
      </Form.Item>
      <Form.Item name={["user", "email"]} label="Email">
        <Input placeholder={mockedUser.email} />
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
        <Input type="password" placeholder="Parola" />
      </Form.Item>
    </Form>
  );
};
