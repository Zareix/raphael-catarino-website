import axios from "./axiosInstance";

import pluginId from "../pluginId";

export const getRevalidatePaths = async () => {
  try {
    const response = await axios.get(`/${pluginId}/revalidate/paths`);
    return response.data;
  } catch (error) {
    console.error("[nextjs-revalidate] Error while fetching paths -", error);
    throw error;
  }
};

export const revalidatePath = async (path) => {
  try {
    const response = await axios.get(`/${pluginId}/revalidate?path=${path}`);
    return response.data;
  } catch (error) {
    console.error("[nextjs-revalidate] Error while revalidating -", error);
    throw error;
  }
};

export const revalidateAllPaths = async () => {
  try {
    const response = await axios.get(`/${pluginId}/revalidate/all`);
    return response.data;
  } catch (error) {
    console.error("[nextjs-revalidate] Error while revalidating -", error);
    throw error;
  }
};
