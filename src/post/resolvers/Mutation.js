export default {
  Mutation: {
    createPost: async (parent, { data }, { db, pubsub }) => {
      const post = {
        title: data.title,
        body: data.body,
      };
      await db.posts.push(post);
      pubsub.publish("postCreated", post);
      return data;
    },
  },
};
