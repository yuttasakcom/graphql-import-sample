export default {
  Mutation: {
    createUser: async (parent, { data }, { prisma }) =>
      await prisma.mutation.createUser({ data }),
  },
};
