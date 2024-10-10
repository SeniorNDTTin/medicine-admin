import { get } from "@/utils/request"

export const login = async (email: string, password: string) => {
  const result = await get(`accounts?email=${email}&password=${password}`);

  return result;
}