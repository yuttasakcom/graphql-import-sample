export default {
  Query: {
    users: async (parent, args, { prisma }, info) => {
      const opArgs = {
        first: args.first,
      };
      return await prisma.query.users(opArgs, info);
    },
  },
};
