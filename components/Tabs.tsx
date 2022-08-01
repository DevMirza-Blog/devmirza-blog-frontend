import React from "react";
import { ICategory } from "../types";

interface IPropType {
  categories: ICategory[];
  handleOnSearch: (query: string) => void;
}

const Tabs = ({ categories, handleOnSearch }: IPropType) => {
  return <div>Tabs</div>;
};

export default Tabs;
