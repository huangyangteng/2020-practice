<template>
  <section>
    <!--  -->
    <h2>动态路由传参，获取参数使用 this.$route.params</h2>
    TipicId:{{ topicId }}
  </section>
</template>

<script>
export default {
  name: "Topic",
  data() {
    return {};
  },
  computed: {
    topicId() {
      return this.$route.params.id;
    },
  },
  methods: {},
  created() {},
};
</script>

<style lang="less" scoped></style>
