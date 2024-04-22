import axios, { type AxiosResponse, type AxiosError } from "axios";
import { ORIGIN } from "~/constants/config";
import { type UnsplashResult } from "~/types";

export const getPhotos = async (
  page: number,
  query: string,
): Promise<UnsplashResult> => {
  if (!Number.isInteger(page) || page <= 0) {
    throw new Error("Page must be a positive integer.");
  }

  try {
    const res: AxiosResponse<UnsplashResult> = await axios.get(
      `${ORIGIN}/api/search`,
      {
        params: { page, query },
      },
    );

    return res.data;
  } catch (error) {
    throw axios.isAxiosError(error)
      ? new Error(`API request failed: ${(error as AxiosError).message}`)
      : error;
  }
};
