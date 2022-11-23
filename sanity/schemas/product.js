import client from "part:@sanity/base/client";
import { CAKES, SNACKS } from "../../constants";
import { ACHAARS } from "./../../constants";
export default {
  name: "product",
  title: "Product",
  type: "document",
  initialValue: async () => ({
    id:
      (await client.fetch(`//groq
  count(*[_type=="product"])`)) + 1,
  }),
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [{ type: "variant" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "cakes", value: CAKES },
          { title: "achaar", value: ACHAARS },
          { title: "snacks", value: SNACKS },
        ],
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxlength: 90,
      },
    },
    {
      name: "price",
      title: "Starting at Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
