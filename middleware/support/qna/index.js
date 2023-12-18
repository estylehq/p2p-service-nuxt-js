export default function({ store, route, redirect, app }) {
  const isSignedIn = store.state['sign-in'].success;
  if (isSignedIn) {
    return;
  }
  redirect(
    app.localePath({
      name: 'sign-in',
      query: { path: route.name, page: route.page || 1 },
    })
  );
}
