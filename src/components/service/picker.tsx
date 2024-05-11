import { DisplayPrice } from "components/display/price";
import { Sheet } from "components/fullscreen-sheet";
import React, { FC, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { Service } from "types/service";
import { Box, Button, Text } from "zmp-ui";

export interface ServicePickerProps {
  service?: Service;
  children: (methods: { open: () => void; close: () => void }) => ReactNode;
}

export const ServicePicker: FC<ServicePickerProps> = ({
  children,
  service,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {service && (
            <Box className="space-y-6" p={6}>
              <Box className="space-y-2">
                <img
                  src={service.image}
                  alt="service.img"
                  className="w-full aspect-video"
                ></img>

                <Text.Title>{service.name}</Text.Title>
                <Text className="font-semibold text-warning-600">
                  <DisplayPrice>{service.price}</DisplayPrice>
                </Text>
                <Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: service.description ?? "",
                    }}
                  ></div>
                </Text>
              </Box>
              <Box className="space-y-5">
                <Button
                  variant="primary"
                  type="highlight"
                  className="bg-gradient-to-r from-pricore-500 to-pricore-300"
                  fullWidth
                  onClick={() => {
                    //
                    setVisible(false);
                  }}
                >
                  Xem chi tiết
                </Button>
              </Box>
            </Box>
          )}
        </Sheet>,
        document.body
      )}
    </>
  );
};
