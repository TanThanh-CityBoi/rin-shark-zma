import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { newsState } from "state";
import { Box } from "zmp-ui";
import { NewsItemSkeleton } from "components/skeletons";
import { NewsItem } from "components/news/news-item";

export const NewsListContent: FC = () => {
  const newsList = useRecoilValue(newsState);

  return (
    <Box className="grid grid-cols-1 gap-4 m-4">
      {newsList.map((news) => (
        <Box className="neumorphism-flat-xs rounded-md p-2" key={news.id}>
          <NewsItem news={news} />
        </Box>
      ))}
    </Box>
  );
};

export const NewsListFallback: FC = () => {
  const newsList = [...new Array(12)];

  return (
    <Box className="grid grid-cols-1 gap-4 m-4">
      {newsList.map((_, i) => (
        <Box className="neumorphism-flat-xs rounded-md p-2" key={i}>
          <NewsItemSkeleton />
        </Box>
      ))}
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
