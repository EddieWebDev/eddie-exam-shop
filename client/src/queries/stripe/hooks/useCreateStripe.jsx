import { useMutation } from "@tanstack/react-query";
import { createStripe } from "../Stripe";

export const useCreateStripe = () => {

  return useMutation({
    mutationFn: () => createStripe(),
    onSuccess: (data) => {
        console.log(data)
      window.location.assign(data.data)
    },
  });
};
