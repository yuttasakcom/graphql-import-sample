export default {
  Query: {
    posts: async (parent, args, { prisma }, info) =>
      await prisma.query.posts(null, info),
  },
};
