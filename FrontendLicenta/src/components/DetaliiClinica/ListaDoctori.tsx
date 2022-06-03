import * as React from "react";

import { mockedClinici, mockedDoctori } from "../../common/HardcodedData";
import { List } from "antd";
import { DetaliiDoctor } from "./DetaliiDoctor";
import { Doctori } from "../../common/common";

export interface ListaDoctoriProps {
  doctori: Doctori[] | undefined;
}
export const ListaDoctori = ({ doctori }: ListaDoctoriProps) => {
  return (
    <List
      grid={{
        gutter: 16,
        column: 2,
      }}
      style={{
        width: "100%",
        maxWidth: 700,
        marginTop: "30px",
        marginLeft: "-220px",
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
      dataSource={doctori}
      renderItem={(doctor) => <DetaliiDoctor doctor={doctor}></DetaliiDoctor>}
    />
  );
};
