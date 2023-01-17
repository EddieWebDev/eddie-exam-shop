import axios from "axios";

const stripeApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const createStripe = async () => {
  const result = await stripeApi.post(`/api/stripe/create-checkout-session`);
  console.log(result)
  return result
};
