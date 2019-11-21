import api from "./api";

const ENDPOINT = "tweets";

export const findAll = async () => {
  try {
    const { data } = await api.get(ENDPOINT);

    return data;
  } catch (error) {
    throw error;
  }
};
