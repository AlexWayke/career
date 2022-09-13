<template>
    <div @click.self="closeModal" class="modal-backdrop">
        <div class="modal-content" :class="{ sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['second', 'header', 'theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style>

</style>