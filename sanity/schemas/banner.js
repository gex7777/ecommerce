export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },

    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
  ],
};
