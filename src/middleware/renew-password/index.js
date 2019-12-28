export default function({ route, error, store, app, redirect }) {
  const isSignedIn = store.state['sign-in'].success;
  if (isSignedIn) {
    redirect(app.localePath('user-dashboard'));
    return;
  }
  const token = route.query.t;

  if (!token || token === null || token.length <= 0) {
    error({ message: 'Not allow access' });
  }
}
