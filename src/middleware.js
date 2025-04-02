export function onRequest(context, next) {
  // console.log("HELLO from middleware...")
  // console.log("context: ", context.url.pathname)
//   const pathname = context.url.pathname;

//   const isFrench = pathname.startsWith("/fr");

//   const getPathSlug = (url) => url.includes("-fr") ? url : url + "-fr";
//   // const newSlug = !pathname.startsWith("/fr") ? pathname.replace("-fr", "") : getPathSlug(pathname);
//   const newSlug = isFrench ? pathname.replace("-fr", "") : getPathSlug(pathname);

//   console.log({ newSlug });
//   // console.log("PATHNAME: ", pathname)
//   if (isFrench) {
//     console.log("falls here....")
//     // context.rewrite(newSlug);
//     return next(newSlug)
//   }

// //   if (isFrench) {
// //     return context.redirect(newSlug, 307); // Temporary redirect
// // }
//   console.log("context.url.pathname: ", context.url.pathname)
  return next()
}


// export const onRequest = (context) => {
//   // const url = new URL(request.url);
//   const pathname = context.url.pathname;

//   // Detect language based on URL
//   const isFrench = pathname.includes("-fr");

//   // Define the new slug
//   const getPathSlug = (url) => url.includes("-fr") ? url.replace("-fr", "") : url + "-fr";
//   const newSlug = isFrench ? pathname.replace("-fr", "") : getPathSlug(pathname);

//   // Store language in `locals` for later use
//   // locals.lang = isFrench ? "fr" : "en";

//   // Redirect if needed
//   if (isFrench) {
//       return context.redirect(newSlug, 307); // Temporary redirect
//   }
// };