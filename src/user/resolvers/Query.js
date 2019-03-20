export default {
  Query: {
    users: async (parent, args, { prisma }, info) => {
      return await prisma.query.users(null, info);
    },
  },
};
