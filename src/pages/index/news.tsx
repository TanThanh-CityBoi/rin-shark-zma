import React, { FC, Suspense } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { productsState } from "state";
import { Box } from "zmp-ui";
import { ProductItem } from "components/product/item";
import { ProductItemSkeleton } from "components/skeletons";

export const NewsListContent: FC = () => {
  const products = useRecoilValue(productsState);

  return (
    <Section padding="title-only" title="Tin tức">
      <Box className="grid grid-cols-2 gap-4 p-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
    </Section>
  );
};

export const NewsListFallback: FC = () => {
  const news = [...new Array(12)];

  return (
    <Section title="Tin tức">
      <Box className="grid grid-cols-2 gap-4">
        {news.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const NewsList: FC = () => {
  return (
    <Suspense fallback={<NewsListFallback />}>
      <NewsListContent />
    </Suspense>
  );
};
