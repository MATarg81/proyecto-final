const Stripe = require("stripe")
require("dotenv").config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripePay = async (req, res) => {
  console.log("body: ", req.body)
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "ARS",
      description: "Pelota Adidas",
      payment_method: id,
      confirm: true,
    });

    console.log("Payment: ", payment);

    return res.status(200).json({ message: "Pago exitoso" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
}

module.exports = { stripePay };
