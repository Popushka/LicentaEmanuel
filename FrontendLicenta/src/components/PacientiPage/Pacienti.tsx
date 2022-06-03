import { List } from "antd";
import { Doctori, Programare, User } from "../../common/common";
import { mockedDoctori, mockedProgramari } from "../../common/HardcodedData";
import { PacientItem } from "./PacientItem";
export interface PacientiPageProps {
  doctor: Doctori[] | undefined;
  programari: Programare[] | undefined;
  pacient: User[] | undefined;
}

export const PacientiPage = ({
  doctor,
  programari,
  pacient,
}: PacientiPageProps) => {
  // const pacienti = doctor?.programari;
  console.log("doctor", doctor);
  console.log("programare", programari);
  if (pacient != undefined && programari != undefined)
    console.log("pacienti", pacient[1]);

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
      dataSource={programari}
      renderItem={(programari) => (
        <PacientItem programare={programari}></PacientItem>
      )}
    />
  );
};
