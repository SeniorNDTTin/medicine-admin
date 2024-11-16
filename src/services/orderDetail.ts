import { get } from "@/utils/request"

export const getOrderDetails = async (orderId: string) => {
  const orderDetails = await get("orderdetails");

  const result = orderDetails.filter(item => item.order_id === orderId);
  return result;
}