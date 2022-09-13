<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Lorem</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minima.</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Lorem 2</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </Modal>
  </teleport>
  <button @click="toggleModal" class="modal-button">Open modal</button>
  <button @click="toggleModalTwo" class="modal-button">Open another modal</button>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      second: 'Lorem ipsum',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
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
