<template>
  <div>
    <router-link to='/todo'>hoge</router-link>
    <router-link to='/todo/fuga'>fuga</router-link>
    <router-view />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    }
  }
}
</script>