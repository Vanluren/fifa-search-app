import { AxiosError } from "axios";
import { Error as CustomError } from "types";

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined;
};

const normalizer = (error: AxiosError | CustomError | null): CustomError => {
  console.log({ ...error });
  if (!error) {
    return { message: "Unknown error" };
  }
  if (isAxiosError(error)) {
    return {
      message: error.response?.data.message,
      status: error.response?.status,
      meta: error.response?.data?.data,
    };
  }
  return { message: error.message };
};

export default normalizer;
