import React, { FC, Suspense } from "react";

import { Header, Page } from "zmp-ui";
import { Banner } from "./banner";
import { ServiceList } from "./service-list";

const ServicePage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Dịch vụ" />
      <Banner />

      <ServiceList />
    </Page>
  );
};

export default ServicePage;
