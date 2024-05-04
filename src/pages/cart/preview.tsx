import { DisplayPrice } from "components/display/price";
import React, { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { totalPriceState, totalQuantityState } from "state";
import { Box, Button, Text } from "zmp-ui";
import { followOA, getUserInfo } from "zmp-sdk/apis";
import pay from "utils/product";

export const CartPreview: FC = () => {
  const quantity = useRecoilValue(totalQuantityState);
  const totalPrice = useRecoilValue(totalPriceState);
  const [visible, setVisible] = useState(false);

  const [followedOA, setFollowedOA] = useState(false);

  useEffect(() => {
    getUserInfo({
      success: (data) => {
        // xử lý khi gọi api thành công
        const { userInfo } = data;
        console.log("user infooo: ", userInfo);
        setFollowedOA(userInfo.followedOA || false);
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
              id: "386237860505888586",
              success: () => {
                setFollowedOA(true);
                console.log("follow success");
              },
              fail: (err) => {},
            });
          else {
            pay(quantity, "Đặt hàng handler");
          }
        }}
      >
        Đặt hàng
      </Button>
    </Box>
  );
};
