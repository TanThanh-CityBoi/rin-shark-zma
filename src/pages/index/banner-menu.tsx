import React, { FC } from "react";
import { Box, Text } from "zmp-ui";
import coreMartLogo from "static/core-mart.png";
import productIcon from "static/product-icon.png";
import serviceIcon from "static/service-icon.png";
import promotionIcon from "static/promotion-icon.png";
import contactIcon from "static/contact-icon.png";
import { useNavigate } from "react-router";
import { openWebview } from "zmp-sdk";

export const BannerMenu: FC = () => {
  const bannerMenuItems = [
    {
      label: "Sản phẩm",
      icon: productIcon,
      url: "/product",
    },
    {
      label: "Dịch vụ",
      icon: serviceIcon,
      url: "/service",
    },
    {
      label: "Ưu đãi",
      icon: promotionIcon,
      url: "/promotion",
    },
    {
      label: "Liên hệ",
      icon: contactIcon,
      url: "/contact",
    },
  ];

  const navigate = useNavigate();

  const openUrlInWebview = async () => {
    try {
      await openWebview({
        url: "https://corevision.vn/",
        config: {
          style: "bottomSheet",
          leftButton: "back",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      className="bg-white relative overflow-hidden h-52 !bg-[#f5f5f5]"
      pb={4}
    >
      <Box className="absolute -top-0 w-full h-12 scale-x-[1.1] rounded-b-full z-10 bg-warning-600"></Box>
      <Box className="absolute top-1 bg-transparent w-full z-20 px-4">
        <Box className="h-full w-full rounded-lg bg-gradient-to-r from-pricore-500 to-pricore-300 shadow-md">
          <Box className="p-3">
            <Box
              className="flex justify-center"
              onClick={() => openUrlInWebview()}
            >
              <img src={coreMartLogo} className="h-9"></img>
            </Box>
            <Text size="small" className="text-center text-white italic">
              Chuỗi cửa hàng tự động hóa đa chức năng
            </Text>

            <hr className="text-white my-2"></hr>

            <Box className="flex justify-between w-full bg-white pt-3 pb-1 rounded-md">
              {bannerMenuItems.map((item, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => {
                      navigate(item.url);
                    }}
                    className="flex flex-col space-y-2 items-center h-20 w-20"
                  >
                    <img
                      className="h-12 w-12 rounded-full object-contain bg-white"
                      src={item.icon}
                    />
                    <Text size="xxSmall" className="text-gray text-center">
                      {item.label}
                    </Text>
                  </div>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
