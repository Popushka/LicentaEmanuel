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
