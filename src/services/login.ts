import { post } from "@/utils/request"

export const login = async (email: string, password: string) => {
  const result = await post(`login`, {
    email: email,
    password: password
  });
  return result;
}