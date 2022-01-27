import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
// This is basically what we will use to fetch information, make queries
// etc from Sanity
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image Urls with only the asset
 * reference data in your docs
 * Read more: https://www.sanity.io/docs/image-url
 */
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const userCurrentUser = createCurrentUserHook(config);
