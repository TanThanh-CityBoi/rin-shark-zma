import { FinalPrice } from "components/display/final-price";
import { DisplayPrice } from "components/display/price";
import { ProductPicker } from "components/product/picker";
import { Section } from "components/section";
import { ProductSlideSkeleton } from "components/skeletons";
import React, { Suspense } from "react";
import { FC } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { recommendProductsState } from "state";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "zmp-ui";

export const RecommendContent: FC = () => {
  const navigate = useNavigate();
  const recommendProducts = useRecoilValue(recommendProductsState);

  return (
    <Section
      title="Sản phẩm xanh"
      padding="title-only"
      className="!bg-[#f5f5f5]"
      titleClick={() => {
        navigate("/product");
      }}
    >
      <Swiper
        slidesPerView={1.25}
        spaceBetween={16}
        className="px-4 pt-3 pb-3 !mt-0"
      >
        {recommendProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductPicker product={product}>
              {({ open }) => (
                <div
                  onClick={open}
                  className="space-y-3 neumorphism-flat-xs p-2 rounded-md bg-white"
                >
                  <Box
                    className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {product.sale && (
                      <Text
                        size="xxxxSmall"
                        className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
                      >
                        Giảm{" "}
                        {product.sale.type === "percent" ? (
                          `${product.sale.percent * 100}%`
                        ) : (
                          <DisplayPrice>{product.sale.amount}</DisplayPrice>
                        )}
                      </Text>
                    )}
                  </Box>
                  <Box className="space-y-1">
                    <Text size="small" className="line-clamp-1">
                      {product.name}
                    </Text>
                    <Text size="xxSmall" className="line-through text-gray">
                      <DisplayPrice>{product.price}</DisplayPrice>
                    </Text>
                    <Text size="large" className="font-medium text-warning-600">
                      <FinalPrice>{product}</FinalPrice>
                    </Text>
                  </Box>
                </div>
              )}
            </ProductPicker>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export const RecommendFallback: FC = () => {
  const recommendProducts = [...new Array(3)];

  return (
    <Section title="Sản phẩm xanh" padding="title-only">
      <Swiper
        slidesPerView={1.25}
        spaceBetween={16}
        className="px-4 pt-3 pb-4 !mt-0"
      >
        {recommendProducts.map((_, i) => (
          <SwiperSlide key={i}>
            <ProductSlideSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export const RecommendProduct: FC = () => {
  return (
    <Suspense fallback={<RecommendFallback />}>
      <RecommendContent />
    </Suspense>
  );
};
