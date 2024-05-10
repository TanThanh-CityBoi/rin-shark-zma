import React, { FC, useEffect, useState } from "react";
import { followOA, getUserInfo } from "zmp-sdk";
import { Box, Button, Text } from "zmp-ui";

export const FollowOA: FC = () => {
  const OA_ID = import.meta.env.VITE_OA_ID;
  const [followedOA, setFollowedOA] = useState<Boolean>(true);

  useEffect(() => {
    getUserInfo({
      success: (data) => {
        setFollowedOA(Boolean(data?.userInfo?.followedOA));
      },
      fail: () => {},
    });
  }, []);

  if (followedOA) return <div></div>;
  return (
    <Box className="bg-white mx-4 p-2 rounded-md">
      <Box className="bg-white px-4 py-3 rounded-md bg-warning-100 border border-warning-700">
        <Text
          size="xSmall"
          className="font-semibold text-center text-gray mb-2"
        >
          Quan tâm OA để nhận nhiều ưu đãi tiện ích
        </Text>

        <div className="flex justify-center">
          <Button
            size="medium"
            className="uppercase shadow-md !bg-gradient-to-r from-pricore-500 to-pricore-300"
            onClick={() =>
              followOA({
                id: OA_ID,
                success: () => {
                  setFollowedOA(true);
                },
              })
            }
          >
            quan tâm
          </Button>
        </div>
      </Box>
    </Box>
  );
};
