export default {
  Mutation: {
    createUser: async (parent, { data }, { prisma }, info) => {
      const dateTime = new Date().toISOString();
      data.createdAt = dateTime;
      data.updatedAt = dateTime;
      return await prisma.mutation.createUser({ data }, info);
    },
  },
};
