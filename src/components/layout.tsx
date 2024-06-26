import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { getSystemInfo } from "zmp-sdk";
import { useHandlePayment } from "hooks";
import { Navigation } from "./navigation";
import { ScrollRestoration } from "./scroll-restoration";

import HomePage from "pages/index";
import NewsPage from "pages/news";
import ProfilePage from "pages/profile";
import ContactPage from "pages/contact";
import ProductPage from "pages/product";
import ServicePage from "pages/service";
import VendorMachineReceiptPage from "pages/vendor-machine-receipt";

// import NotificationPage from "pages/notification";
// import PromotionPage from "pages/promotion";
// import SearchPage from "pages/search";
// import CheckoutResultPage from "pages/result";
// import CartPage from "pages/cart";

if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
      window.devicePixelRatio
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}

export const Layout: FC = () => {
  useHandlePayment();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          {/* == */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          {/* == sub */}
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route
            path="/vendor-machine-receipt"
            element={<VendorMachineReceiptPage />}
          ></Route>

          {/* <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/result" element={<CheckoutResultPage />}></Route>
          <Route path="/promotion" element={<PromotionPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route> */}
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
