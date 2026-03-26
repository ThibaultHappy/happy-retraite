import posthog from "posthog-js";

export const initPosthog = () => {
  if (typeof window !== "undefined") {
    posthog.init("phc_s2YxMldbKVvcR4g2ER3rnTNJQsUkXhreDXV0YZ5vzwk", {
      api_host: "https://app.posthog.com",
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
          password: true,
        },
      },
      capture_pageview: true,
      capture_pageleave: true,
    });
  }
};

export { posthog };
