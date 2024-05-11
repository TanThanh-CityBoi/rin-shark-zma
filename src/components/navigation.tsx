import { useVirtualKeyboardVisible } from "hooks";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "types/menu";
import { Text, BottomNavigation, Box, Icon } from "zmp-ui";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
    activeIcon: <Icon icon="zi-home" className="text-warning-700" />,
  },
  // "/notification": {
  //   label: "Thông báo",
  //   icon: <Icon icon="zi-notif" />,
  // },
  // "/promotion": {
  //   label: "Ưu đãi",
  //   icon: <Icon icon="zi-star" />,
  // },
  // "/cart": {
  //   label: "Giỏ hàng",
  //   icon: <CartIcon />,
  //   activeIcon: <CartIcon active />,
  // },
  "/news": {
    label: "Tin tức",
    icon: <Icon icon="zi-note" />,
    activeIcon: <Icon icon="zi-note" className="text-warning-700" />,
  },
  "/contact": {
    label: "Tin nhắn",
    icon: <Icon icon="zi-chat" />,
    activeIcon: <Icon icon="zi-chat" className="text-warning-700" />,
  },
  "/profile": {
    label: "Cá nhân",
    icon: <Icon icon="zi-user-circle" />,
    activeIcon: <Icon icon="zi-user-circle" className="text-warning-700" />,
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = [
  "/search",
  "/product",
  "/result",
  "/service",
  "/promotion",
];

export const Navigation: FC = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("/");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  useEffect(() => {
    if (Object.keys(tabs).includes(location.pathname)) {
      setActiveTab(location.pathname);
    }
  }, [location.pathname]);

  if (noBottomNav || keyboardVisible) {
    return <></>;
  }

  return (
    <Box>
      <BottomNavigation
        id="footer"
        activeKey={activeTab}
        onChange={(key: TabKeys) => setActiveTab(key)}
        className="z-50 bg-white h-16"
      >
        {Object.keys(tabs).map((path: TabKeys) => (
          <BottomNavigation.Item
            key={path}
            label={
              activeTab === path ? (
                <span className="text-warning-700">{tabs[path].label}</span>
              ) : (
                tabs[path].label
              )
            }
            icon={tabs[path].icon}
            activeIcon={tabs[path].activeIcon}
            onClick={() => navigate(path)}
            className="mt-4"
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};
