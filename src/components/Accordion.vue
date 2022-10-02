<template>
    <div class="accordion">
        <div class="accordion-section">
            <div class="accordion-section--title"  @click="toggleDropdown">Информационные технологии (3)</div>
            <transition name="accordion">
                <div class="accordion-section--container" v-show="showDropdown">
                    <div class="accordion-item" v-for="vacancy in job" :key="vacancy.id">
                        <div class="accordion-item--content">
                            <div class="accordion-item--title">{{ vacancy.title }}</div>
                            <div class="accordion-item--info">
                                <p>{{ vacancy.salary }}</p>
                                <p>{{ vacancy.location }}</p>
                            </div>
                        </div>
                        <div class="accordion-item--date">{{ vacancy.date }}</div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            job: [],
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
        this.showDropdown = !this.showDropdown;
        }
    },
    mounted(){
        fetch('http://localhost:3000/job')
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.massage))
    }
}
</script>

<style>

</style>