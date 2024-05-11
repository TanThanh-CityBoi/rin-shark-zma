import { FinalPrice } from "components/display/final-price";
import React, { FC } from "react";
import { Service } from "types/service";
import { Box, Text } from "zmp-ui";
import { ServicePicker } from "./picker";

export const ServiceItem: FC<{ service: Service }> = ({ service }) => {
  return (
    <ServicePicker service={service}>
      {({ open }) => (
        <div className="space-y-2" onClick={open}>
          <Box className="w-full aspect-square relative">
            <img
              loading="lazy"
              src={service.image}
              className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
            />
          </Box>
          <Text>{service.name}</Text>
          <Text size="small" className="text-warning-600 pb-2">
            <FinalPrice>{service}</FinalPrice>
          </Text>
        </div>
      )}
    </ServicePicker>
  );
};
