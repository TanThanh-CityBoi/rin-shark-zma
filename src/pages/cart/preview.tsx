import { DisplayPrice } from "components/display/price";
import React, { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { totalPriceState, totalQuantityState } from "state";
import { Box, Button, Text } from "zmp-ui";
import { followOA, getUserInfo } from "zmp-sdk/apis";
import pay from "utils/product";
import axios from "axios";

export const postOANotify = async () => {
  const apiUrl = "https://business.openapi.mini.zalo.me/message/template";
  const body = {
    phone: "",
    template_id: "7895417a7d3f9461cd2e",
    template_data: {
      ky: "1",
      thang: "4/2020",
      start_date: "20/03/2020",
      end_date: "20/04/2020",
      customer: "Nguyễn Thị Hoàng Anh",
      cid: "PE010299485",
      address: "VNG Campus, TP.HCM",
      amount: "100",
      total: "100000",
    },
    tracking_id: "123455",
  };

  const headers = {
    "access-token": import.meta.env.VITE_ACCESS_TOKEN,
    "Content-Type": "application/json",
  };
  const response = await axios.post(apiUrl, body, {
    headers: headers,
  });
  console.log("post response:", response);

  return response.data;
};

export const createOrder = () => {
  postOANotify();
};

export const CartPreview: FC = () => {
  const quantity = useRecoilValue(totalQuantityState);
  const totalPrice = useRecoilValue(totalPriceState);
  const [followedOA, setFollowedOA] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  // const OA_ID = "386237860505888586";
  const OA_ID = import.meta.env.VITE_OA_ID;

  useEffect(() => {
    getUserInfo({
      success: (data) => {
        // xử lý khi gọi api thành công
        const { userInfo } = data;
        console.log("user infooo: ", userInfo);
        setFollowedOA(userInfo.followedOA || false);
        setUserProfile(userInfo);
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      },
    });
  }, []);

  return (
    <Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
      <Box
        flex
        flexDirection="column"
        justifyContent="space-between"
        className="min-w-[120px] flex-none"
      >
        <Text className="text-gray" size="xSmall">
          {quantity} sản phẩm
        </Text>
        <Text.Title size="large">
          <DisplayPrice>{totalPrice}</DisplayPrice>
        </Text.Title>
      </Box>
      <Button
        type="highlight"
        disabled={!quantity}
        fullWidth
        onClick={() => {
          if (!followedOA)
            followOA({
              id: OA_ID,
              success: () => {
                setFollowedOA(true);
                console.log("follow success");
              },
              fail: (err) => {},
            });
          else {
            // pay(quantity, "Đặt hàng handler");
            createOrder();
          }
        }}
      >
        Đặt hàng
      </Button>
    </Box>
  );
};
