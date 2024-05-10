import React, { FC } from "react";
import { Box, Header, Text } from "zmp-ui";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "state";

export const Welcome: FC = () => {
  const user = useRecoilValueLoadable(userState);

  return (
    <Header
      className="app-header no-border pl-4 flex-none pb-[6px] bg-warning-600"
      showBackIcon={false}
      title={
        (
          <Box flex alignItems="center" className="space-x-2 pb-2">
            <img
              className="w-9 h-9 rounded-full border-inset"
              src={user.getValue().avatar || ""}
            />
            <Box>
              <Text size="xxSmall" className="text-white">
                Xin chào,
              </Text>
              {user.state === "hasValue" ? (
                <Text.Title size="small" className="text-white">
                  {user.contents.name}
                </Text.Title>
              ) : (
                <Text>...</Text>
              )}
            </Box>
          </Box>
        ) as unknown as string
      }
    />
  );
};
