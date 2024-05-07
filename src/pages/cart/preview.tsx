import { DisplayPrice } from "components/display/price";
import React, { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { totalPriceState, totalQuantityState, cartState } from "state";
import { Box, Button, Text } from "zmp-ui";
import { followOA, getUserInfo } from "zmp-sdk/apis";
import pay from "utils/product";

export const createOrder = ({ recipientId, orderId, totalAmount, items }) => {
  pay(totalAmount, "Đặt hàng");
};

export const CartPreview: FC = () => {
  const quantity = useRecoilValue(totalQuantityState);
  const totalPrice = useRecoilValue(totalPriceState);
  const cart = useRecoilValue(cartState);

  const [followedOA, setFollowedOA] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

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
            createOrder({
              recipientId: userProfile.id,
              items: cart,
              orderId: "#0001",
              totalAmount: totalPrice,
            });
          }
        }}
      >
        Đặt hàng
      </Button>
    </Box>
  );
};
