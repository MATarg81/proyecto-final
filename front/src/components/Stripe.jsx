import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "bootswatch/dist/pulse/bootstrap.min.css";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51LyO9SF9HjesUNGysTwuzHhCtT83NFOsgj74sNqYv9B0na0Fq6Ig82AFPbcrATwBt7AjMg4tntTcoVvKm4FLUQDb000k9wwcYp"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;
      // console.log("paymentMethod: ", paymentMethod)

      try {
        const { data } = await axios.post("/stripe", {
          id,
          amount: 10000,
        });
        // console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log("Catch Stripe.jsx: ", error);
      }
      setLoading(false);
    }
  };

  // console.log(!stripe || loading);

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <img
        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/024062dc1faa4776ba67abac00f195cb_9366/Pelota_ARGENTUM_21_PRO_Blanco_FS0286_01_standard.jpg"
        alt="Pelota Adidas"
        className="img-fluid"
      />
      <h3 className="text-center my-2">Precio: $ 1000</h3>
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <button disabled={!stripe} className="btn btn-success">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
        ) : (
          "Pagar"
        )}
      </button>
    </form>
  );
};

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Stripe;
