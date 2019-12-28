export default function({ app, store, route, redirect }) {
  const isSignedIn = store.state['sign-in'].success;
  if (isSignedIn) {
    return;
  }
  redirect(app.localePath({ name: 'sign-in', query: { path: route.name } }));
}
