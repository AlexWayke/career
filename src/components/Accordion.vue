<template>
    <div class="accordeon">
        <div class="accordion-section">
            <div class="accordion-section--title">Информационные технологии (3)</div>
            <div class="accordion-section--container">
                <div class="accordeon-item" v-for="vacancy in job" :key="vacancy.id">
                    <div class="accordion-item--content">
                        <div class="accordion-item--title">{{ vacancy.title }}</div>
                        <div class="accordion-item--salary">{{ vacancy.salary }}</div>
                        <div class="accordion-item--location">{{ vacancy.location }}</div>
                    </div>
                    <div class="accordeon-item--date">{{ vacancy.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            job: []
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