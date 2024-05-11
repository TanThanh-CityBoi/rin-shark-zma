import React, { FC } from "react";
import { Box, Icon } from "zmp-ui";
import coreMart from "static/core-mart.png";
import coreVision from "static/core-vision.png";
import { openWebview } from "zmp-sdk";

export const AboutUs: FC = () => {
  const listContents = [
    {
      title: "Core Vision",
      url: "https://corevision.vn/",
      icon: coreVision,
    },
    {
      title: "Core Mart",
      url: "https://corevision.vn/",
      icon: coreMart,
    },
  ];

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
    <Box className="m-4">
      {listContents.map((item, id) => (
        <Box
          className="relative neumorphism-flat-xs rounded-md p-2 flex justify-center h-20 mb-2"
          key={id}
          onClick={() => openUrlInWebview(item.url)}
        >
          <img src={item.icon} className="object-contain"></img>
          <Icon
            icon="zi-chevron-right"
            className="absolute top-6 right-2 font-semibold text-warning-600"
          ></Icon>
        </Box>
      ))}
    </Box>
  );
};
