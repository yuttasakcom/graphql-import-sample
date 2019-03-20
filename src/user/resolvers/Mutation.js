export default {
  Mutation: {
    createUser: async (parent, { data }, { prisma }, info) =>
      await prisma.mutation.createUser({ data }, info),
  },
};
