function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handld[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }
}

exports.route = route;