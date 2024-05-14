import React, { FC, Suspense } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { vouchersState } from "state";
import { Box, Text } from "zmp-ui";
import { ProductSlideSkeleton } from "components/skeletons";
import { SwiperSlide, Swiper } from "swiper/react";
import { VoucherItem } from "components/promotion/voucher-item";
import { PiGiftFill } from "react-icons/pi";

export const VoucherListContent: FC = () => {
  const vouchers = useRecoilValue(vouchersState);

  return (
    <Box className="relative">
      <PiGiftFill className="absolute h-9 w-9 left-1.5 -top-2.5 -rotate-[18deg] text-red-600"></PiGiftFill>
      <Section
        padding="title-only"
        title={
          (
            <Text.Title className="bg-gradient-to-r from-pricore-500 to-pricore-300 inline-block text-transparent bg-clip-text font-bold">
              E-voucher <span className="font-medium">(phiếu quà tặng)</span>
            </Text.Title>
          ) as unknown as string
        }
      >
        <Swiper
          slidesPerView={1.25}
          spaceBetween={16}
          className="px-4 pt-3 pb-3 !mt-0"
        >
          {vouchers.slice(0, 6).map((voucher) => (
            <SwiperSlide key={voucher.id}>
              <div className="space-y-3 rounded-lg bg-white">
                <VoucherItem voucher={voucher} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Box>
  );
};

export const VoucherListFallback: FC = () => {
  const vouchers = [...new Array(3)];

  return (
    <Box className="relative">
      <PiGiftFill className="absolute h-9 w-9 left-1.5 -top-2.5 -rotate-[18deg] text-red-600"></PiGiftFill>
      <Section
        padding="title-only"
        title={
          (
            <Text.Title className="bg-gradient-to-r from-pricore-500 to-pricore-300 inline-block text-transparent bg-clip-text font-bold">
              E-voucher <span className="font-medium">(phiếu quà tặng)</span>
            </Text.Title>
          ) as unknown as string
        }
      >
        <Swiper
          slidesPerView={1.25}
          spaceBetween={16}
          className="px-4 pt-3 pb-3 !mt-0"
        >
          {vouchers.map((_, i) => (
            <SwiperSlide key={i}>
              <div className="space-y-3 rounded-lg bg-white">
                <ProductSlideSkeleton />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Box>
  );
};

export const VoucherList: FC = () => {
  return (
    <Suspense fallback={<VoucherListFallback />}>
      <VoucherListContent />
    </Suspense>
  );
};
