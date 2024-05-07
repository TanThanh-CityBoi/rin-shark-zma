import axios from "axios";

export async function sendZaloNotification(
  recipientId: string,
  sub: { orderId; totalAmount; items }
) {
  try {
    const apiUrl = "https://openapi.zalo.me/v3.0/oa/message/transaction";
    const accessToken = import.meta.env.VITE_OA_ACCESS_TOKEN;
    const { orderId, totalAmount, items } = sub;

    const headers = {
      "Content-Type": "application/json",
      access_token: accessToken,
    };

    const listItems = items.map((itm, idx) => {
      return {
        value: itm.product.price + "x" + itm.quantity,
        key: itm.product.name,
      };
    });

    console.log("listItems", listItems);

    const data = {
      recipient: {
        user_id: recipientId,
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "transaction_order",
            language: "VI",
            elements: [
              {
                attachment_id:
                  "aERC3A0iYGgQxim8fYIK6fxzsXkaFfq7ZFRB3RCyZH6RyziRis3RNydebK3iSPCJX_cJ3k1nW1EQufjN_pUL1f6Ypq3rTef5nxp6H_HnXKFDiyD5y762HS-baqRpQe5FdA376lTfq1sRyPr8ypd74ecbaLyA-tGmuJ-97W",
                type: "banner",
              },
              {
                type: "header",
                content: "Thông tin đơn hàng",
                align: "left",
              },
              {
                type: "text",
                align: "left",
                content: "• Cảm ơn bạn đã mua hàng tại Core+ Mart",
              },
              {
                type: "table",
                content: [
                  {
                    value: orderId,
                    key: "Mã đơn hàng",
                  },
                  {
                    value: "F-01332973223",
                    key: "Mã khách hàng",
                  },
                  {
                    style: "yellow",
                    value: "Đang giao",
                    key: "Trạng thái",
                  },
                  {
                    value: totalAmount,
                    key: "Tổng cộng",
                  },
                  ...listItems,
                ],
              },
            ],
            buttons: [
              {
                title: "Kiểm tra lộ trình",
                type: "oa.open.url",
                payload: {
                  url: "https://oa.zalo.me/home",
                },
              },
              {
                title: "Xem lại giỏ hàng",
                type: "oa.query.show",
                payload: "kiểm tra giỏ hàng",
              },
              {
                title: "Liên hệ nhân viên tư vấn",
                type: "oa.open.phone",
                payload: {
                  phone_code: "0912511015",
                },
              },
            ],
          },
        },
      },
    };

    const response = await axios.post(apiUrl, data, { headers });
    //
    console.log("Notification sent: ", response);
    //
  } catch (error) {
    console.error("Error:", error);
  }
}
