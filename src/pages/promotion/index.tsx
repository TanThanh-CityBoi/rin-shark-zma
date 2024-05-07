import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { Divider } from "components/divider";
import LuckyWheel from "./lucky-wheel";

const PromotionPage: FC = () => {
  return (
    <Page>
      <Header title="Ưu đãi" backIcon={false} />
      <Divider />

      <LuckyWheel></LuckyWheel>
    </Page>
  );
};

export default PromotionPage;
