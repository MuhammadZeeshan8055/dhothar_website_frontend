<template>
  <div class="feature-block-four col-xl-4 col-lg-4 col-md-6">
    <div class="inner-box">
      <div class="content-box">
        <div class="icon-box"><i class="icon" :class="icon"></i></div>
        <h5 class="title">{{ title }}</h5>
        <div class="text">
          {{ text }}
          <router-link :to="link" style="float: right; color: #3939ed">&gt; read_more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "text", "link"],
};
</script>
