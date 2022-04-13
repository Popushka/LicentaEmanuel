import { Input, Form, InputNumber, Cascader, Button } from "antd";
import React, { useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { mockedProgramari } from "../../common/HardcodedData";
export interface ProgramarePageProps {}

export const ProgramarePage = ({}: ProgramarePageProps) => {
  const onChange = (values: any) => {
    console.log(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const [value, setValue] = React.useState<Date | null>(
    new Date(mockedProgramari[1].data_programarii)
  );
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item name={["user", "nume"]} label="Nume">
        <Input defaultValue={mockedProgramari[1].pacient.nume} />
      </Form.Item>
      <Form.Item name={["user", "prenume"]} label="Prenume">
        <Input defaultValue={mockedProgramari[1].pacient.prenume} />
      </Form.Item>
      <Form.Item
        name={["user", "varsta"]}
        label="Varsta"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber defaultValue={mockedProgramari[1].pacient.varsta} />
      </Form.Item>
      <Form.Item label="Diagnostic">
        <Input.TextArea defaultValue={mockedProgramari[1].pacient.diagnostic} />
      </Form.Item>

      <Form.Item name={["user", "detalii"]} label="Detalii">
        <Input.TextArea defaultValue={mockedProgramari[1].pacient.detalii} />
      </Form.Item>
      <Form.Item label="Data">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Calendar"
            renderInput={(params: any) => <TextField {...params} />}
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
              console.log(newValue);
            }}
          />
        </LocalizationProvider>
      </Form.Item>
    </Form>
  );
};
