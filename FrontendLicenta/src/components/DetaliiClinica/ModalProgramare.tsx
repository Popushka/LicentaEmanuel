import { Input, Form, InputNumber, Cascader, Button } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { mockedOptions, mockedUser } from "../../common/HardcodedData";
import { User } from "../../common/common";
export interface ModalProgramareProps {
  setDetaliiAditionale: Dispatch<SetStateAction<string>>;
  setDataProgramarii: Dispatch<SetStateAction<string>>;
  userActual: User;
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

export const ModalProgramare = ({
  setDetaliiAditionale,
  userActual,
  setDataProgramarii,
}: ModalProgramareProps) => {
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
        <Input defaultValue={userActual.nume} />
      </Form.Item>
      <Form.Item name={["user", "prenume"]} label="Prenume">
        <Input defaultValue={userActual.prenume} />
      </Form.Item>
      <Form.Item
        name={["user", "varsta"]}
        label="Varsta"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber defaultValue={userActual.varsta} />
      </Form.Item>
      <Form.Item label="Diagnostic">
        <Input.TextArea defaultValue={userActual.diagnostic} />
      </Form.Item>

      <Form.Item name={["user", "detalii"]} label="Detalii">
        <Input.TextArea
          defaultValue={userActual.detalii}
          onChange={(e) => {
            setDetaliiAditionale(e.currentTarget.value.toString());
          }}
        />
      </Form.Item>
      <Form.Item label="Data">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Calendar"
            renderInput={(params: any) => <TextField {...params} />}
            value={value}
            inputFormat="yyyy/MM/dd hh:mm:ss"
            mask="___/__/__ __:__ _M"
            onChange={(newValue: any) => {
              let data: string = newValue;
              data = data.toString().slice(0, -5);
              setDataProgramarii(data);
              console.log("data", data);
            }}
          />
        </LocalizationProvider>
      </Form.Item>
    </Form>
  );
};
