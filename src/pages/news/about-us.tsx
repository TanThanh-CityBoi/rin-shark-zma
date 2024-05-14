import React, { FC } from "react";
import { Box } from "zmp-ui";
import coreMart from "static/core-mart-mini.png";
import coreVision from "static/logo.png";
import { openUrlInWebview } from "utils/webview";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";

export const AboutUs: FC = () => {
  const listContents = [
    {
      title: "Core Vision",
      image: coreVision,
    },
    {
      title: "Core Mart",
      image: coreMart,
    },
  ];

  return (
    <Box className="p-2 rounded-lg mx-4 bg-white my-2 shadow-md bg-gradient-to-r from-pricore-300 via-pricore-200 to-pricore-300">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay
        loop
        cssMode
        spaceBetween={16}
      >
        {listContents.map((item, i) => (
          <SwiperSlide
            key={i}
            onClick={() => openUrlInWebview("https://corevision.vn/")}
          >
            <Box
              className="w-full rounded-lg aspect-[2/1] bg-contain bg-center bg-skeleton bg-no-repeat bg-white"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
