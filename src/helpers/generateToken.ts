export const generateToken = (length: number) => {
  const str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += str[Math.floor(Math.random() * 62)];
  }

  return result;
}