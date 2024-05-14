import React from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Divider } from "components/divider";
import { BannerMenu } from "./banner-menu";
import { FollowOA } from "components/follow-oa";
import { RecommendProduct } from "./recomend-product";
import { RecommendService } from "./recomend-service";
import { VoucherList } from "./voucher";

// import { NewsList } from "./news";
// import { Banner } from "./banner";
// import { Inquiry } from "./inquiry";
// import { Categories } from "./categories";
// import { Recommend } from "./recommend";
// import { ProductList } from "./product-list";
// import { NewsList } from "./news";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        {/* <Inquiry /> */}
        {/* <Banner /> */}
        {/* <Suspense>
          <Categories />
        </Suspense> */}

        <BannerMenu />
        <FollowOA />
        <RecommendProduct />
        <Divider />
        <RecommendService />
        <Divider />
        <VoucherList />
        <Divider />
        {/* <NewsList /> */}

        <Divider />
        <Divider />
      </Box>
    </Page>
  );
};

export default HomePage;
