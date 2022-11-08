const axios = require("axios");
require("dotenv").config()

class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_10178403@testuser.com",
      items: req.body,
      back_urls: {
        failure: "https://proyecto-final-git-develop-matarg81.vercel.app",
        pending: "https://proyecto-final-git-develop-matarg81.vercel.app",
        success: process.env.URL_MP_SUCCESS
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }

  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Cuota mensual",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 10,
        currency_id: "ARS",
      },
      back_url: "https://proyecto-final-git-develop-matarg81.vercel.app",
      payer_email: "test_user_10178403@testuser.com",
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }
}

module.exports = PaymentService;
