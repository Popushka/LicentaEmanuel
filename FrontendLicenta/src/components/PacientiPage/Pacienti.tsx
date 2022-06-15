import { List } from "antd";
import { Doctori, Programare, User } from "../../common/common";
import { mockedDoctori, mockedProgramari } from "../../common/HardcodedData";
import { PacientItem } from "./PacientItem";
export interface PacientiPageProps {
  programari: Programare[] | undefined;
  DoctorActual: Doctori;
  isDetalii: boolean;
  // doctorActual: Doctori | undefined;
}

export const PacientiPage = ({
  programari,
  isDetalii,
  DoctorActual,
}: PacientiPageProps) => {
  console.log("doctorActual1111", DoctorActual.programari);

  return (
    <List
      style={{
        marginLeft: isDetalii ? "" : "570px",
        width: "100%",
        maxWidth: 700,
        marginTop: "30px",
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
      dataSource={DoctorActual.programari}
      renderItem={(programari) => {
        console.log("programaripacient", programari);
        return (
          <PacientItem
            isDetalii={isDetalii}
            programare={programari}
          ></PacientItem>
        );
      }}
    />
  );
};
