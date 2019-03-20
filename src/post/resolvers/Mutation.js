export default {
  Mutation: {
    createPost: async (parent, { data }, { prisma, pubsub }, info) => {
      const dateTime = new Date().toISOString();
      data.createdAt = dateTime;
      data.updatedAt = dateTime;
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
