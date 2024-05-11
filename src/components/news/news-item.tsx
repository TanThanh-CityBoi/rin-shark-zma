import React, { FC } from "react";
import { News } from "types/news";
import { openWebview } from "zmp-sdk";
import { Box, Text } from "zmp-ui";

export const NewsItem: FC<{ news: News }> = ({ news }) => {
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
    <div className="space-y-2" onClick={() => openUrlInWebview(news.url)}>
      <Box className="w-full aspect-[2/1] relative">
        <img
          loading="lazy"
          src={news.image}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
        />
      </Box>
      <Text>{news.title}</Text>
    </div>
  );
};
