import React, { useEffect } from "react";
import { FC } from "react";
import { useNavigate } from "react-router";
import { followOA, getUserInfo, openChat } from "zmp-sdk";
import { Page } from "zmp-ui";

const ContactPage: FC = () => {
  const OA_ID = import.meta.env.VITE_OA_ID;
  const navigate = useNavigate();

  const redirectOA = async () => {
    const { userInfo } = await getUserInfo({});
    try {
      if (!userInfo.followedOA) {
        await followOA({ id: OA_ID });
      }
      await openChat({
        type: "oa",
        id: OA_ID,
        message: "Xin Chào",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    redirectOA();
  }, []);

  return <Page></Page>;
};

export default ContactPage;
