import { get } from "@/utils/request";

export const getTypes = async () => {
    const result = await get("types");
    return result;
}

export const getType = async (id: string) => {
    const result = await get(`types/${id}`);
    return result;
}