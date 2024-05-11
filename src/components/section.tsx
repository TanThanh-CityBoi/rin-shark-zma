import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Icon, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export interface SectionProps extends BoxProps {
  title: string;
  padding?: "all" | "none" | "title-only";
  titleClick?: Function;
  viewMore?: Boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  title,
  className,
  titleClick,
  padding = "all",
  viewMore = true,
  ...props
}) => {
  return (
    <Box
      className={`${padding === "all" ? "p-4" : ""} ${
        padding === "title-only" ? "py-2 space-y-2" : ""
      }
      ${className}`}
      {...props}
    >
      <Box
        className="flex justify-between bg-white ms-4 p-2 rounded-l-md shadow-md"
        onClick={() => {
          if (titleClick) {
            titleClick();
          }
        }}
      >
        <Text.Title
          className={`${
            padding === "title-only" ? "px-4" : ""
          } bg-gradient-to-r from-pricore-500 to-pricore-300 inline-block text-transparent bg-clip-text`}
        >
          {title}
        </Text.Title>

        {viewMore && (
          <Box className="flex items-center text-warning-700">
            <Text size="xxSmall">Xem thêm</Text>
            <Icon icon="zi-chevron-right"></Icon>
          </Box>
        )}
      </Box>
      {children}
    </Box>
  );
};
