import toast from "react-hot-toast";

export const responseTost = (response, navigate, url) => {
  if ("data" in response) {
    toast.success(response.data.message);
    if (navigate) navigate(url);
  } else {
    const error = response.error;
    const messageResponse = error.data;
    toast.error(messageResponse.message);
  }
};
