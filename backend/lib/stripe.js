import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

console.log("Stripe secret:", process.env.STRIPE_SECRET_KEY?.substring(0, 20));

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
