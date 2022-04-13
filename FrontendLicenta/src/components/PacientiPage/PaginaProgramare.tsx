import { Descriptions } from "antd";
export interface DetaliiClinicaProps {}

export const ProgramarePage = ({}: DetaliiClinicaProps) => {
  return (
    <div>
      <Descriptions title="User Info">
        <Descriptions.Item label="Nume">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telefon">1810000000</Descriptions.Item>
        <Descriptions.Item label="Ora">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Diagnostic">empty</Descriptions.Item>
        <Descriptions.Item label="Adresa">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      ,
    </div>
  );
};
