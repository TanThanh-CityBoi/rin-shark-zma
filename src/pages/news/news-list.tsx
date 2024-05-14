import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { newsState } from "state";
import { Box, Icon, Text } from "zmp-ui";
import { NewsItemSkeleton } from "components/skeletons";
import { NewsItem } from "components/news/news-item";
import { openUrlInWebview } from "utils/webview";

export const NewsListContent: FC = () => {
  const newsList = useRecoilValue(newsState);

  return (
    <Box className="mx-4">
      <Box
        className="flex justify-between items-center rounded-md bg-white shadow-lg mb-2 p-2"
        onClick={() => openUrlInWebview("https://corevision.vn/bai-viet")}
      >
        <Text size="large" className="text-warning-600 ps-2">
          Tất cả
        </Text>
        <Icon
          size={20}
          className="bg-white text-warning-600"
          icon="zi-arrow-right"
        ></Icon>
      </Box>
      <Box className="grid grid-cols-1 gap-4">
        {newsList.map((news) => (
          <Box
            className="neumorphism-flat-xs rounded-md p-2 bg-white"
            key={news.id}
          >
            <NewsItem news={news} />
          </Box>
        ))}
      </Box>
      <Box
        className="flex items-center justify-center mb-6 mt-6 bg-white py-2 rounded-md shadow-lg gap-x-1"
        onClick={() => openUrlInWebview("https://corevision.vn/bai-viet")}
      >
        <Text size="large" className="text-warning-600 text-center">
          Xem thêm
        </Text>
        <Icon
          size={20}
          className="bg-white text-warning-600"
          icon="zi-arrow-right"
        ></Icon>
      </Box>
    </Box>
  );
};

export const NewsListFallback: FC = () => {
  const newsList = [...new Array(12)];

  return (
    <Box className="mx-4">
      <Box
        className="flex justify-between items-center rounded-md bg-white shadow-lg mb-2 p-2"
        onClick={() => openUrlInWebview("https://corevision.vn/bai-viet")}
      >
        <Text size="large" className="text-warning-600">
          Tất cả
        </Text>
        <Icon
          className="bg-white text-warning-600"
          icon="zi-arrow-right"
        ></Icon>
      </Box>
      <Box className="grid grid-cols-1 gap-4">
        {newsList.map((_, i) => (
          <Box className="neumorphism-flat-xs rounded-md p-2" key={i}>
            <NewsItemSkeleton />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const NewsList: FC = () => {
  return (
    <Suspense fallback={<NewsListFallback />}>
      <NewsListContent />
    </Suspense>
  );
};
