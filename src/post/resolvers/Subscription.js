export default {
  Subscription: {
    postCreated: {
      subscribe(parent, args, { pubsub }) {
        return pubsub.asyncIterator("postCreated");
      },
      resolve: payload => payload,
    },
  },
};
