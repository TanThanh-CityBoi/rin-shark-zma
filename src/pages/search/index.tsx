import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { SearchResult } from "./result";

const SearchPage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Tìm kiếm" className="bg-warning-600 text-white" />
      <Inquiry />
      <SearchResult />
    </Page>
  );
};

export default SearchPage;
