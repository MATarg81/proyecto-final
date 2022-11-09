import React from "react";
import { Waveform } from "@uiball/loaders";

function Loading() {
  return (
    <div>
      <hr />
      <h3>Cargando...</h3>
      <hr />
      <Waveform size={50} color="#231F20" />
      <hr />
    </div>
  );
}

export default Loading;
