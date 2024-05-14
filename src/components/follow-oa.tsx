import React, { FC, useEffect, useState } from "react";
import { followOA, getUserInfo } from "zmp-sdk";
import { Box, Button, Text } from "zmp-ui";
import { PiHandTapDuotone } from "react-icons/pi";

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
    <Box className="bg-white rounded-md shadow-md border border-warning-500 p-4 mx-4 my-2">
      <Text size="small" className="font-semibold text-center text-gray mb-3">
        Quan tâm OA để nhận nhiều ưu đãi tiện ích
      </Text>

      <div className="flex justify-center">
        <Button
          size="medium"
          className="uppercase shadow-md !bg-warning-500 relative font-bold"
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
          <span className="-rotate-[15deg] absolute top-5 right-2">
            <PiHandTapDuotone
              size={40}
              className="text-pricore-400 hand-tap-animate"
            />
          </span>
        </Button>
      </div>
    </Box>
  );
};
