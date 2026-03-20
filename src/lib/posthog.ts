import posthog from "posthog-js";

export const initPosthog = () => {
  if (typeof window !== "undefined") {
    posthog.init("phc_s2YxMldbKVvcR4g2ER3rnTNJQsUkXhreDXV0YZ5vzwk", {
      api_host: "https://eu.posthog.com",
      capture_pageview: true,
    });
  }
};

export { posthog };
