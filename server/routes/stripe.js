import express from "express";
import Stripe from "stripe";

const router = express.Router();

const DOMAIN = "http://localhost:3000/"

const stripe = new Stripe(
  "sk_test_51MREjiCY1OKDSXJZYZBbLgFfoFbUZXjico1OuRD5g24Oi1CT7N9bF10mueGUZUedwAKhaYQwjrALyr65DYMvymT800Ih4c7XLu"
);

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card'
      ],
      line_items: [
        {
          // TODO: replace this with the `price` of the product you want to sell
          // price: '{{PRICE_ID}}',
          price: "price_1MREsWCY1OKDSXJZhx71d9O0",
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${DOMAIN}?success=true`,
      cancel_url: `${DOMAIN}?canceled=true`,
    });
    
    res.send(session.url)
   });

   export default router;