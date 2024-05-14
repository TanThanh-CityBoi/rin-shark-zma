import { DisplayPrice } from "components/display/price";
import React, { FC } from "react";
import { Voucher } from "types/voucher";
import { Box, Icon, Text } from "zmp-ui";
import voucherImg from "static/voucher.png";

export const VoucherItem: FC<{ voucher: Voucher }> = ({ voucher }) => {
  return (
    <div className="space-y-2 border border-[1px] border-[#d4d4d8] rounded-lg bg-white p-2 w-full shadow-md">
      <Box
        className="relative aspect-video rounded-lg bg-cover bg-no-repeat bg-center bg-skeleton shadow-md mx-4 mb-8 mt-4"
        style={{
          backgroundImage: `url(${voucher.image || voucherImg})`,
        }}
      ></Box>

      <Text size="xSmall" className="italic text-center line-clamp-1">
        {voucher.name}
      </Text>
      <div className="relative border-b border-[1px] border-dashed border-gray">
        <div className="flex absolute -top-4 -left-[18px] rounded-r-full bg-[#f5f5f5] shadow-[inset_-5px_0_7px_-7px_rgba(0,0,0,0.2)]">
          <div className="w-2"></div>
          <div className="h-8 w-4 rounded-r-full border border-[1px] border-[#d4d4d8] border-l-[rgba(0,0,0,0.001)] bg-transparent"></div>
        </div>
        <div className="flex absolute -top-4 -right-[18px] rounded-l-full bg-[#f5f5f5] shadow-[inset_5px_0_9px_-7px_rgba(0,0,0,0.2)]">
          <div className="h-8 w-4 rounded-l-full border border-[1px] border-[#d4d4d8] border-r-[rgba(0,0,0,0.001)] bg-transparent"></div>
          <div className="w-2"></div>
        </div>
      </div>
      <Box className="flex justify-between items-center px-4">
        <Text
          size="xLarge"
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
