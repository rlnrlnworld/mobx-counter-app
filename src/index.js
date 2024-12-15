import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CounterStore from "./counterStore";

const container = document.getElementById("root");
const root = createRoot(container);
const store = new CounterStore();

root.render(
  <div>
    <App counter={store} />
  </div>
);