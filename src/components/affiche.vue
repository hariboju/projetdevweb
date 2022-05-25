<template>
  <div class="affiche">
    <div class="image">
      <img :src="url"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'affiche',
  props: {
    key: String,
    url: String,
  },
}
</script>