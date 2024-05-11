import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { newsState } from "state";
import { Box } from "zmp-ui";
import { NewsItemSkeleton } from "components/skeletons";
import { NewsItem } from "components/news/news-item";
import { Section } from "components/section";
import { openWebview } from "zmp-sdk";

export const NewsListContent: FC = () => {
  const newsList = useRecoilValue(newsState);

  const openUrlInWebview = async (url: string) => {
    try {
      await openWebview({
        url: url || "https://corevision.vn/",
        config: {
          style: "bottomSheet",
          leftButton: "back",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section
      title="Tin tức"
      padding="title-only"
      titleClick={() => openUrlInWebview("https://corevision.vn/ ")}
    >
      <Box className="grid grid-cols-1 gap-4 mx-4 pt-1">
        {newsList.slice(0, 4).map((news) => (
          <Box className="neumorphism-flat-xs rounded-md p-2" key={news.id}>
            <NewsItem news={news} />
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export const NewsListFallback: FC = () => {
  const newsList = [...new Array(12)];

  return (
    <Section title="Tin tức">
      <Box className="grid grid-cols-1 gap-4">
        {newsList.map((_, i) => (
          <Box className="neumorphism-flat-xs rounded-md p-2" key={i}>
            <NewsItemSkeleton />
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export const NewsList: FC = () => {
  return (
    <Suspense fallback={<NewsListFallback />}>
      <NewsListContent />
    </Suspense>
  );
};
