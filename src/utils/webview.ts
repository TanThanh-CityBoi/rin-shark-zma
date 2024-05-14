import { openWebview } from "zmp-sdk";

export const openUrlInWebview = async (url: string) => {
  try {
    await openWebview({
      url: url,
      config: {
        style: "bottomSheet",
        leftButton: "back",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
