import { get } from "@/utils/request"

export const getOrders = async () => {
  const orders = await get("orders");
  return orders;
}

export const getOrder = async (id: string) => {
  const order = await get(`orders/${id}`);
  return order;
}