import {
  Input,
  Form,
  InputNumber,
  Cascader,
  Button,
  Row,
  Col,
  Modal,
} from "antd";
import React, { useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { mockedProgramari } from "../../common/HardcodedData";
import BodyMap from "../BodyMap";
import HomePageMain from "../SymptomChecker/HomePageMain";
export interface ProgramarePageProps {}

export const ProgramarePage = ({}: ProgramarePageProps) => {
  const onChange = (values: any) => {
    console.log(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
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
  const [value, setValue] = React.useState<Date | null>(
    new Date(mockedProgramari[1].data_programarii)
  );
  return (
    <div style={{}}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        size="large"
        layout="horizontal"
      >
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
          <Input.TextArea
            defaultValue={mockedProgramari[1].pacient.diagnostic}
          />
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
        <Form.Item label="BodyMap">
          <Button onClick={showModal}>Apasa pentru a afisa BodyMap</Button>
        </Form.Item>
      </Form>
      <Modal
        title="Body Map"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <BodyMap></BodyMap>
      </Modal>
    </div>
  );
};
