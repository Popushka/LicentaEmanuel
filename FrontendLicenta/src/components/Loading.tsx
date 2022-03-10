import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

export interface LoadingProps {
  navigateToHealthProblems: () => void;
}

export const Loading = ({ navigateToHealthProblems }: LoadingProps) => {
  navigateToHealthProblems();
  return <LoadingOutlined />;
};
