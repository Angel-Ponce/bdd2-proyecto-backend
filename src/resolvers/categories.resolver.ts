const categoryResolver = {
  Query: {
    categories: () => {
      return [
        {
          id: 1,
          name: "Category",
        },
      ];
    },
  },
};

export { categoryResolver };
