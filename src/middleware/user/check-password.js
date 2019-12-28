export default function({ store, redirect, app, route }) {
  const isLoggedIn = store.state['sign-in'].success;
  if (!isLoggedIn) {
    redirect(app.localePath({ name: 'sign-in', query: { path: route.name } }));
    return;
  }

  const checkPassword = store.state.user['check-password'].success;
  if (checkPassword) {
    return;
  }
  redirect(
    app.localePath({ name: 'user-check-password', query: { path: route.name } })
  );
}
