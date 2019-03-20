export default {
  Query: {
    users: async (parent, args, { prisma }, info) =>
      await prisma.query.users(null, info),
  },
};
