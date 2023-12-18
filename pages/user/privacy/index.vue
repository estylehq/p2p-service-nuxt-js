<script>
export default {
  asyncData({ redirect, app }) {
    redirect(app.localePath('user-privacy-general'));
  },
};
</script>
