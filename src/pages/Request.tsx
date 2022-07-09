import React from "react";
import FormRequest from "../components/Content/FormRequest";
import { Header } from "../components/Navbar/Header";

export const Request = () => {
  return (
    <div className="h-screen overflow-scroll">
      <Header></Header>
      <div className="flex justify-center pt-6 space-x-4 ">
        <FormRequest></FormRequest>
      </div>
    </div>
  );
};
