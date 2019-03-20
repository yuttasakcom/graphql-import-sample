export default {
  Query: {
    users: async (parent, args, { prisma }, info) =>
      await prisma.query.users(null, info),
  },
  User: {
    posts: {
      resolve: async (parent, args, { prisma }, info) =>
        await prisma.query.posts({
          where: {
            author: {
              id: parent.id,
            },
          },
          first: 2,
        }),
    },
  },
};
