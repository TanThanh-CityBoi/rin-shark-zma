import { Divider } from "components/divider";
import { NewsList } from "./news-list";
import React, { FC } from "react";

import { Box, Text, Header, Page } from "zmp-ui";
import { FollowOA } from "components/follow-oa";
import { AboutUs } from "./about-us";
import { openUrlInWebview } from "utils/webview";

const NewsPage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header
        title={
          (
            <Box className="py-1">
              <Text size="xLarge" className="text-white font-semibold">
                Tin tức
              </Text>
            </Box>
          ) as unknown as string
        }
        className="bg-warning-600 text-white"
        showBackIcon={false}
      />
      <AboutUs />
      <FollowOA />
      <Divider />
      <NewsList />
      <Divider />
    </Page>
  );
};

export default NewsPage;
