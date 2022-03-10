import * as React from "react";
import { Form, Input, InputNumber, Button, Cascader } from "antd";

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
}

export const HealthProblemForm = ({
  navigateToClinics,
}: HealthProblemFormProps) => {
  const onChange = (values: any) => {
    console.log(values);
  };
  const onFinish = (values: any) => {
    console.log(values);
    navigateToClinics();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "nume"]}
            label="Nume"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "prenume"]}
            label="Prenume"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "varsta"]}
            label="Varsta"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item label="Diagnostic">
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="Please select"
            />
          </Form.Item>

          <Form.Item name={["user", "detalii"]} label="Detalii">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
