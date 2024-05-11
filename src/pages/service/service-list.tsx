import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { servicesState } from "state";
import { Box } from "zmp-ui";
import { ProductItemSkeleton } from "components/skeletons";
import { ServiceItem } from "components/service/item";

export const ServiceListContent: FC = () => {
  const services = useRecoilValue(servicesState);

  return (
    <Box className="grid grid-cols-2 gap-4 m-4">
      {services.map((service) => (
        <Box className="neumorphism-flat-xs rounded-md p-2" key={service.id}>
          <ServiceItem service={service} />
        </Box>
      ))}
    </Box>
  );
};

export const ServiceListFallback: FC = () => {
  const services = [...new Array(12)];

  return (
    <Box className="grid grid-cols-2 gap-4">
      {services.map((_, i) => (
        <ProductItemSkeleton key={i} />
      ))}
    </Box>
  );
};

export const ServiceList: FC = () => {
  return (
    <Suspense fallback={<ServiceListFallback />}>
      <ServiceListContent />
    </Suspense>
  );
};
