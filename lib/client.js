import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "5jkxl6n1",
  dataset: "production",
  apiVersion: "2022-08-05",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});
const bulider = imageUrlBuilder(client);
export const urlFor = (source) => bulider.image(source);
