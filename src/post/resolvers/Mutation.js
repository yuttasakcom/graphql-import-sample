export default {
  Mutation: {
    createPost: async (parent, { data }, { prisma, pubsub }, info) => {
      data.author = {
        connect: {
          id: data.author,
        },
      };
      const post = await prisma.mutation.createPost({ data }, info);
      pubsub.publish("postCreated", post);
      return post;
    },
  },
};
