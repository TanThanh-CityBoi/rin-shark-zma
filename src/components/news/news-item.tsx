import React, { FC } from "react";
import { News } from "types/news";
import { openUrlInWebview } from "utils/webview";
import { Box, Text } from "zmp-ui";

export const NewsItem: FC<{ news: News }> = ({ news }) => {
  return (
    <div
      className="space-y-2 bg-white"
      onClick={() =>
        openUrlInWebview(news.url || "https://corevision.vn/bai-viet")
      }
    >
      <Box className="w-full aspect-[2/1] relative">
        <img
          loading="lazy"
          src={news.image}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
        />
      </Box>
      <Box className="px-1 py-2">
        <Text className="uppercase font-semibold mb-2">{news.title}</Text>
        <Text size="small" className="italic text-gray line-clamp-2">
          {news.description}
        </Text>
      </Box>
    </div>
  );
};
