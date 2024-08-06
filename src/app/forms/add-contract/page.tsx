import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "اضافة عقد",
  description:
    "goldpro",
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        اضافة عقد
      </h2>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;
