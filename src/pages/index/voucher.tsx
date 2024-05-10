import React, { FC, Suspense } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { vouchersState } from "state";
import { Box } from "zmp-ui";
import { ProductItemSkeleton } from "components/skeletons";
import { VoucherItem } from "components/promotion/voucher-item";

export const VoucherListContent: FC = () => {
  const vouchers = useRecoilValue(vouchersState);

  return (
    <Section padding="title-only" title="Ưu đãi">
      <Box className="grid grid-cols-2 gap-4 px-4 py-2">
        {vouchers.slice(0, 6).map((voucher) => (
          <div key={voucher.id} className="!shadow-md rounded-lg">
            <VoucherItem voucher={voucher} />
          </div>
        ))}
      </Box>
    </Section>
  );
};

export const VoucherListFallback: FC = () => {
  const news = [...new Array(6)];

  return (
    <Section title="Ưu đãi">
      <Box className="grid grid-cols-2 gap-4">
        {news.map((_, i) => (
          <ProductItemSkeleton key={i} />
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
