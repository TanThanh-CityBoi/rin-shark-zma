import React, { FC, useEffect, useRef, useState } from "react";
import { Box, Button, Header, Icon, Page, Text, useSnackbar } from "zmp-ui";
import subscriptionDecor from "static/subscription-decor.svg";
import { ListRenderer } from "components/list-renderer";
import { userState } from "state";
import { useRecoilValueLoadable } from "recoil";
import { FollowOA } from "components/follow-oa";
import { useNavigate } from "react-router";
import { openUrlInWebview } from "utils/webview";
import { getAppInfo, openShareSheet, saveImageToGallery } from "zmp-sdk";
import html2canvas from "html2canvas";

const Subscription: FC = () => {
  return (
    <Box className="m-4 shadow-md rounded-lg" onClick={() => {}}>
      <Box
        className="bg-green text-white rounded-lg p-4 space-y-2"
        style={{
          backgroundImage: `url(${subscriptionDecor})`,
          backgroundPosition: "right 8px center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Text.Title className="font-bold">Quyền lợi thành viên</Text.Title>
        <Text size="xxSmall">Tích điểm đổi thưởng, mở rộng tiện ích</Text>
      </Box>
    </Box>
  );
};

const Personal: FC = () => {
  const snackbar = useSnackbar();

  return (
    <Box className="m-4 shadow-md rounded-lg">
      <ListRenderer
        title="Cá nhân"
        onClick={() => {}}
        items={[
          {
            left: <Icon icon="zi-user" />,
            right: (
              <Box
                flex
                onClick={() => {
                  snackbar.openSnackbar({
                    type: "success",
                    text: "Chức năng đang được tích hợp phát triển...",
                  });
                }}
              >
                <Text.Header className="flex-1 items-center font-normal">
                  Thông tin tài khoản
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-clock-2" />,
            right: (
              <Box
                flex
                onClick={() => {
                  snackbar.openSnackbar({
                    type: "success",
                    text: "Chức năng đang được tích hợp phát triển...",
                  });
                }}
              >
                <Text.Header className="flex-1 items-center font-normal">
                  Lịch sử đơn hàng
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
        ]}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};

const Other: FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="m-4 shadow-md rounded-lg">
      <ListRenderer
        title="Khác"
        onClick={() => {}}
        items={[
          {
            left: <Icon icon="zi-star" />,
            right: (
              <Box
                flex
                onClick={() => openUrlInWebview("https://corevision.vn/")}
              >
                <Text.Header className="flex-1 items-center font-normal">
                  Về Core Vision
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
          {
            left: <Icon icon="zi-call" />,
            right: (
              <Box flex onClick={() => navigate("/contact")}>
                <Text.Header className="flex-1 items-center font-normal">
                  Liên hệ và góp ý
                </Text.Header>
                <Icon icon="zi-chevron-right" />
              </Box>
            ),
          },
        ]}
        renderLeft={(item) => item.left}
        renderRight={(item) => item.right}
      />
    </Box>
  );
};

const ProfileHeader: FC = () => {
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

const AppQr: FC = () => {
  const [appInfo, setAppInfo] = useState<any>(null);
  const snackbar = useSnackbar();

  const handleDownloadImage = async () => {
    if (!appInfo?.qrCodeUrl) {
      snackbar.openSnackbar({
        type: "error",
        text: "Lỗi tải hình ảnh",
      });
    }

    saveImageToGallery({
      imageUrl: appInfo.qrCodeUrl,
      success: () => {
        snackbar.openSnackbar({
          type: "success",
          text: "Đã tải xuống",
        });
      },
      fail: (error) => {
        snackbar.openSnackbar({
          type: "error",
          text: "Lỗi tải hình ảnh",
        });
      },
    });
  };
  const handleShareApp = () => {
    openShareSheet({
      type: "link",
      data: {
        link: appInfo.appUrl,
      },
      success: (data) => {},
      fail: (err) => {},
    });
  };

  useEffect(() => {
    getAppInfo({
      success: (data) => {
        setAppInfo(data);
      },
      fail: () => {
        setAppInfo({});
      },
    });
  }, []);

  if (!appInfo) return <Box></Box>;
  return (
    <Box className="mx-4 mb-4 rounded-lg bg-white p-4 shadow-md">
      <Text size="large" className="text-center mt-4">
        {" "}
        Giải pháp được phát triển bởi
      </Text>
      <Text size="large" className="text-center mb-4">
        {" "}
        Công ty cổ phần công nghệ Core Vision
      </Text>
      <Text size="large" className="text-center mb-6 italic font-semibold">
        {'"Tiện lợi - Ổn định - Bền vững" '}
      </Text>

      <Box className="relative flex justify-center items-center mb-6">
        <img className="h-52 w-52 aspect-square" src={appInfo?.qrCodeUrl}></img>
        <img
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-10 w-10 aspect-square rounded-md"
          src={appInfo?.logoUrl}
        ></img>
      </Box>

      <Box className="flex justify-center gap-x-4">
        <Button
          className="!bg-white text-gray !shadow-md"
          size="medium"
          onClick={() => handleDownloadImage()}
        >
          <Icon icon="zi-download" className="mr-2"></Icon>
          Tải xuống
        </Button>
        <Button
          className="!bg-white text-gray !shadow-md"
          size="medium"
          onClick={() => handleShareApp()}
        >
          <Icon icon="zi-share-external-2" className="mr-2"></Icon>
          Chia sẻ
        </Button>
      </Box>
    </Box>
  );
};

const ProfilePage: FC = () => {
  return (
    <Page>
      <ProfileHeader />
      <Subscription />
      <FollowOA />
      <Personal />
      <Other />
      <AppQr />
    </Page>
  );
};

export default ProfilePage;
