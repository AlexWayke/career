<template>
  <div class="postlist">
    <div class="postlist-content" v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    setup () {

    }
}
</script>

<style>

</style>