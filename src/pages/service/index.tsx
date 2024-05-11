import { Divider } from "components/divider";
import React, { FC, Suspense } from "react";

import { Header, Icon, Page } from "zmp-ui";
import { Banner } from "./banner";
import { ServiceList } from "./service-list";

const ServicePage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header
        title="Dịch vụ"
        backIcon={<Icon icon="zi-chevron-left" className="text-white"></Icon>}
        className="bg-warning-600 text-white"
      />
      <Banner />
      <ServiceList />
      <Divider />
    </Page>
  );
};

export default ServicePage;
