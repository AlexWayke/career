<template>
    <div class="slider-wrapper">
        <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev"/>
            <button class="splide__arrow splide__arrow--next"/>
        </div>
        <Splide :options="options" aria-label="Slider">
            <SplideSlide>
                <img src="../assets/img/slider/exempleSlide.png" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img src="../assets/img/slider/exempleSlide.png" alt="Sample 2">
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import '@splidejs/vue-splide/css/core';
import { defineComponent } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
        options: {
            rewind : false,
            width : '905px',
            gap : '1rem',
            arrowPath : 'null',
            autoWidth : true
        }
    }
  }
} );
</script>

<style>
.splide__arrow {
    display: block;
    background: #fff;
    border-radius: 50%;
    background-image: url(../assets/img/icons/arrow.svg);
}
.splide__arrow--prev {
    transform: rotate(180deg);
}
.slider-wrapper {
    position: relative;
}
.splide__arrows {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>