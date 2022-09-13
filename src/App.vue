<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Lorem</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minima.</p>
    </Modal>
  </div>
  <button @click="toggleModal" class="modal-button">Open modal</button>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'FirstApp',
      header: 'Lorem',
      second: 'Lorem ipsum',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
