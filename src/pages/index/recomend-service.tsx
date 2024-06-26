import { FinalPrice } from "components/display/final-price";
import { DisplayPrice } from "components/display/price";
import { Section } from "components/section";
import { ServicePicker } from "components/service/picker";
import { ProductSlideSkeleton } from "components/skeletons";
import React, { Suspense } from "react";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { recommendServicesState } from "state";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, useNavigate } from "zmp-ui";
import titleIcon from "static/lacay.png";

export const RecommendContent: FC = () => {
  const navigate = useNavigate();
  const recommendServices = useRecoilValue(recommendServicesState);

  return (
    <Box className="relative">
      <img src={titleIcon} className="h-10 w-10 absolute -top-2 left-1.5"></img>
      <Section
        title="Dịch vụ xanh"
        padding="title-only"
        className="!bg-[#f5f5f5]"
        titleClick={() => {
          navigate("/service");
        }}
      >
        <Swiper
          slidesPerView={1.25}
          spaceBetween={16}
          className="px-4 pt-3 pb-3 !mt-0"
        >
          {recommendServices.map((service) => (
            <SwiperSlide key={service.id}>
              <ServicePicker service={service}>
                {({ open }) => (
                  <div
                    onClick={open}
                    className="space-y-3 neumorphism-flat-xs p-2 rounded-md bg-white"
                  >
                    <Box
                      className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      {service.sale && (
                        <Text
                          size="xxxxSmall"
                          className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
                        >
                          Giảm{" "}
                          {service.sale.type === "percent" ? (
                            `${service.sale.percent * 100}%`
                          ) : (
                            <DisplayPrice>{service.sale.amount}</DisplayPrice>
                          )}
                        </Text>
                      )}
                    </Box>
                    <Box className="space-y-1">
                      <Text size="small">{service.name}</Text>
                      <Text
                        size="large"
                        className="font-medium text-warning-600"
                      >
                        <FinalPrice>{service}</FinalPrice>
                      </Text>
                    </Box>
                  </div>
                )}
              </ServicePicker>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Box>
  );
};

export const RecommendFallback: FC = () => {
  const recommendProducts = [...new Array(3)];

  return (
    <Box className="relative">
      <img src={titleIcon} className="h-10 w-10 absolute -top-2 left-1.5"></img>
      <Section title="Dịch vụ xanh" padding="title-only">
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
    </Box>
  );
};

export const RecommendService: FC = () => {
  return (
    <Suspense fallback={<RecommendFallback />}>
      <RecommendContent />
    </Suspense>
  );
};
