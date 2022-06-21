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
import { Programare, User } from "../../common/common";

export interface ProgramarePageProps {
  programare: Programare;
  userActual: User;
  isDetalii: boolean;
}

export const ProgramarePage = ({
  programare,
  userActual,
  isDetalii,
}: ProgramarePageProps) => {
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
    new Date(programare.data_programarii)
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
          <Input
            defaultValue={
              isDetalii ? userActual.nume : programare.pacient?.nume
            }
          />
        </Form.Item>
        <Form.Item name={["user", "prenume"]} label="Prenume">
          <Input
            defaultValue={
              isDetalii ? userActual.prenume : programare.pacient?.prenume
            }
          />
        </Form.Item>
        <Form.Item
          name={["user", "varsta"]}
          label="Varsta"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber
            defaultValue={
              isDetalii ? userActual.varsta : programare.pacient?.varsta
            }
          />
        </Form.Item>
        <Form.Item label="Diagnostic">
          <Input.TextArea
            defaultValue={
              isDetalii ? userActual.diagnostic : programare.pacient?.diagnostic
            }
          />
        </Form.Item>

        <Form.Item name={["user", "detalii"]} label="Detalii">
          <Input.TextArea
            defaultValue={
              isDetalii ? userActual.detalii : programare.pacient?.detalii
            }
          />
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
