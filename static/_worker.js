// Format: Module Worker
export default {
    async fetch(request, env, context) {
      // Proxy to origin on unhandled/uncaught exceptions
      context.passThroughOnException();
      throw new Error('Oops');
    },
  };