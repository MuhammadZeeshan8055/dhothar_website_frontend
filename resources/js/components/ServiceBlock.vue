<template>
  <div class="service-block-four col-lg-6 col-md-6 col-sm-12">
    <div class="inner-box">
      <div class="content-box">
        <h5 class="title">
          <router-link :to="link">{{ title }}</router-link>
        </h5>
        <div class="text">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "link"],
};
</script>
