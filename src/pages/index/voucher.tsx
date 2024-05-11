import React, { FC, Suspense } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { vouchersState } from "state";
import { Box } from "zmp-ui";
import { ProductSlideSkeleton } from "components/skeletons";
import { SwiperSlide, Swiper } from "swiper/react";
import { VoucherItem } from "components/promotion/voucher-item";

export const VoucherListContent: FC = () => {
  const vouchers = useRecoilValue(vouchersState);

  return (
    <Section padding="title-only" title="Ưu đãi">
      <Swiper
        slidesPerView={1.25}
        spaceBetween={16}
        className="px-4 pt-3 pb-3 !mt-0"
      >
        {vouchers.slice(0, 6).map((voucher) => (
          <SwiperSlide key={voucher.id}>
            <div className="space-y-3 neumorphism-flat-xs p-2 rounded-md bg-white">
              <VoucherItem voucher={voucher} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export const VoucherListFallback: FC = () => {
  const news = [...new Array(6)];

  return (
    <Section title="Ưu đãi">
      <Box className="grid grid-cols-2 gap-4">
        {news.map((_, i) => (
          <SwiperSlide key={i}>
            <ProductSlideSkeleton />
          </SwiperSlide>
        ))}
      </Box>
    </Section>
  );
};

export const VoucherList: FC = () => {
  return (
    <Suspense fallback={<VoucherListFallback />}>
      <VoucherListContent />
    </Suspense>
  );
};
