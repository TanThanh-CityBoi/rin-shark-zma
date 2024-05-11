import React, { FC } from "react";
import {
  Box,
  Button,
  Header,
  Icon,
  Page,
  Text,
  useNavigate,
  useSnackbar,
} from "zmp-ui";
import { Divider } from "components/divider";
import html2canvas from "html2canvas";
import { saveImageToGallery } from "zmp-sdk";

const VendorMachineReceiptPage: FC = () => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  //
  const queryParameters = new URLSearchParams(window.location.search);
  const orderId = queryParameters.get("orderId");

  const handleDownloadImage = async () => {
    const element: HTMLElement | null =
      document.getElementById("__receipt_print");
    if (!element) {
      snackbar.openSnackbar({
        type: "error",
        text: "Lỗi tải hóa đơn",
      });
      return;
    }

    const canvas = await html2canvas(element, {});
    const imageData = canvas.toDataURL("image/png");

    saveImageToGallery({
      imageUrl: imageData,
      success: () => {
        snackbar.openSnackbar({
          type: "success",
          text: "Đã tải xuống",
        });
      },
      fail: (error) => {
        snackbar.openSnackbar({
          type: "error",
          text: "Lỗi tải hóa đơn",
        });
      },
    });
  };

  return (
    <Page>
      <Header
        title="Hóa Đơn Core+ Mart"
        backIcon={<Icon icon="zi-chevron-left" className="text-white"></Icon>}
        onBackClick={() => navigate("/")}
        className="bg-warning-600 text-white"
      />
      <Divider />
      <Box
        id="__receipt_print"
        className="m-4 py-6 px-4 border rounded-md border-[#d1d5db] shadow-md"
      >
        <Box className="flex justify-between items-end bg-sky-300 rounded-md p-2">
          <Text size="large" className="text-white font-semibold">
            Mã đơn: #{orderId}
          </Text>
          <Text size="large" className="text-white italic">
            05/07/2024
          </Text>
        </Box>

        <Box className="border-b border-gray my-2"></Box>

        <Box>
          <Text size="large" className="font-semibold text-gray">
            Sản phẩm:
          </Text>
          <Box className="flex justify-between py-1">
            <Text>Coca cola</Text>
            <Text>12.000đ X 2</Text>
          </Box>

          <Box className="flex justify-between py-1">
            <Text>Nước suối</Text>
            <Text>12.000đ X 2</Text>
          </Box>

          <Box className="flex justify-between py-1">
            <Text>Dừa trái</Text>
            <Text>12.000đ X 2</Text>
          </Box>

          <Box className="flex justify-between py-1">
            <Text>Mỳ Ly</Text>
            <Text>12.000đ X 2</Text>
          </Box>
        </Box>

        <Box className="border-b border-gray my-2"></Box>

        <Box className="flex justify-between items-center">
          <Text size="large" className="text-gray font-semibold">
            Tổng cộng:
          </Text>

          <Text size="large" className="text-gray font-semibold">
            96.000đ
          </Text>
        </Box>
      </Box>
      <Box className="px-4 flex justify-end">
        <Button
          size="medium"
          className="!bg-sky-400 font-semibold"
          onClick={handleDownloadImage}
        >
          {" "}
          Tải xuống <Icon icon="zi-download" />
        </Button>
      </Box>
    </Page>
  );
};

export default VendorMachineReceiptPage;
