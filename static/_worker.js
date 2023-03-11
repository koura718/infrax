// export default {
//   fetch(request, env, context) {
//     return new Response('Hello');
//   },
// };

addEventListener('fetch', event => {
    let { pathname } = new URL(event.request.url);
  
    // Allow "/ignore/*" URLs to hit origin
    if (pathname.startsWith('/ignore/')) return;
  
    // Otherwise, respond with something
    event.respondWith(handler(event));
  });
