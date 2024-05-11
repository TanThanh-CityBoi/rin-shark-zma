import { DisplayPrice } from "components/display/price";
import React, { FC } from "react";
import { Voucher } from "types/voucher";
import { Box, Icon, Text } from "zmp-ui";
import voucherImg from "static/voucher.png";

export const VoucherItem: FC<{ voucher: Voucher }> = ({ voucher }) => {
  return (
    <div className="space-y-2 border border-[1px] border-[#d4d4d8] rounded-lg bg-white p-2 w-full">
      <Box
        className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton shadow-md mb-4"
        style={{
          backgroundImage: `url(${voucher.image || voucherImg})`,
        }}
      ></Box>

      <Text size="xSmall" className="italic text-center line-clamp-1">
        {voucher.name}
      </Text>
      <div className="relative border-b border-[1px] border-dashed border-gray">
        <div className="absolute -top-4 -left-[10px] h-8 w-4 rounded-r-full bg-white border border-[1px] border-[#d4d4d8] border-l-white"></div>
        <div className="absolute -top-4 -right-[10px] h-8 w-4 rounded-l-full bg-white border border-[1px] border-[#d4d4d8] border-r-white"></div>
      </div>
      <Box className="flex justify-between items-center px-4">
        <Text
          size="large"
          className="text-warning-600 font-semibold text-center w-full"
        >
          <DisplayPrice>{voucher.price}</DisplayPrice>
        </Text>

        <button>
          <Icon
            icon="zi-add-story"
            className="text-warning-600"
            size={30}
          ></Icon>
        </button>
      </Box>
    </div>
  );
};
