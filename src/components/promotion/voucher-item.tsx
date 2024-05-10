import { DisplayPrice } from "components/display/price";
import React, { FC } from "react";
import { Voucher } from "types/voucher";
import { Box, Icon, Text } from "zmp-ui";

export const VoucherItem: FC<{ voucher: Voucher }> = ({ voucher }) => {
  return (
    <div className="space-y-2 border border-[#d4d4d8] rounded-lg bg-white p-2 border border-dashed">
      <Box className="w-full aspect-video relative">
        <img
          loading="lazy"
          src={voucher.image}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-contain object-center"
        />
      </Box>
      <Text size="xSmall" className="italic line-clamp-1">
        {voucher.name}
      </Text>
      <div className="border-b border-dashed"></div>
      <Box className="flex justify-between items-center">
        <Text size="small" className="text-warning-600">
          <DisplayPrice>{voucher.price}</DisplayPrice>
        </Text>

        <button>
          <Icon icon="zi-add-story" className="text-warning-600"></Icon>
        </button>
      </Box>
    </div>
  );
};
