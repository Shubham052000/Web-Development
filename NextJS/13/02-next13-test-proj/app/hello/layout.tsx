import React from "react";

export const metadata = {
  title: "Hello Route",
  description: "Generated by Shubham Satyawali",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
