<script>
export default {
  asyncData({ redirect, app }) {
    redirect(app.localePath('user-account-withdraw'));
  },
};
</script>
