import { Button, PageHeader } from "antd";
import React from "react";

export interface HeaderProps {
  headerVisible: boolean;
  headerTitle: string;
  backButtonVisible: boolean;
  screens: number;
  navigateToHealthProblems: () => void;
  navigateToClinics: () => void;
  navigateToAppointment: () => void;
  navigateToAutentificare: () => void;
  navigateToPacientiPage: () => void;
  navigateToProgramare: () => void;
}

export const SiteHeader = ({
  headerVisible,
  headerTitle,
  screens,
  backButtonVisible,
  navigateToPacientiPage,
  navigateToClinics,
  navigateToHealthProblems,
  navigateToAutentificare,
  navigateToProgramare,
}: HeaderProps) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {headerVisible ? (
        <>
          <PageHeader
            style={{ position: "absolute" }}
            className="site-page-header"
            title={<h1>{headerTitle}</h1>}
            backIcon
          />
          {backButtonVisible ? (
            <Button
              size="large"
              onClick={() => {
                console.log(screens);
                if (screens === 2 || screens === 5) navigateToAutentificare();
                if (screens === 3) navigateToHealthProblems();
                else if (screens === 4) navigateToClinics();
                else if (screens === 5) navigateToProgramare();
              }}
              style={{
                marginTop: "30px",
                marginLeft: "1800px",
              }}
            >
              🡸 Inapoi
            </Button>
          ) : null}
        </>
      ) : null}
    </div>
  );
};
