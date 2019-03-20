export default {
  User: {
    posts: {
      resolve: async (parent, args, { prisma }, info) => {
        const opAgrs = {
          where: {
            author: {
              id: parent.id,
            },
          },
          first: args.first,
        };

        return await prisma.query.posts(opAgrs, info);
      },
    },
  },
};
