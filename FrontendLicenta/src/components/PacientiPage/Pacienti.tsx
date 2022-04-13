import { List } from "antd";
import { mockedDoctori, mockedProgramari } from "../../common/HardcodedData";
import { PacientItem } from "./PacientItem";
export interface DetaliiClinicaProps {
}

export const PacientiPage = ({ }: DetaliiClinicaProps) => {
  const pacienti = mockedDoctori[1].programari;
  return (
    <List
      style={{
        width: "100%",
        maxWidth: 700,
        marginTop: "30px",
        marginLeft: "570px",
      }}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
        position: "bottom",
        simple: true,
        hideOnSinglePage: true,
        style: { margin: "0px 500px 0px 0px" },
      }}
      dataSource={pacienti}
      renderItem={(pacient) => (
        <PacientItem
          pacient={pacient.pacient}
        ></PacientItem>
      )}
    />
  );
};
