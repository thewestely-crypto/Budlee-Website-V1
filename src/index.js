// Track initial page view
mixpanel.track('Page Viewed', {
  page: window.location.pathname
});
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import mixpanel from 'mixpanel-browser';

// Initialize MixPanel (replace 'YOUR_PROJECT_TOKEN' with your actual token)
mixpanel.init('0f5cade3a076f642604937266b00fc27');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
