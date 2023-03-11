// Format: Module Worker
export default {
    async fetch(request, env, context) {
      // Forward / Proxy original request
      let res = await fetch(request);
  
      // Add custom header(s)
      // res = new Response(res.body, res);
      // res.headers.set('x-foo', 'bar');
  
      // Cache the response
      // NOTE: Does NOT block / wait
      // context.waitUntil(caches.default.put(request, res.clone()));
  
      // Done
      return res;
    },
  };