export default {
  Query: {
    posts: async (parent, args, { db }) => await db.posts,
  },
};
