<template>
  <div class="vacancy">
            <div class="vacancy-wrapper container">
                <div class="vacancy-column">
                    <h1 class="vacancy-title">Вакансии Яндекс</h1>
                    <div class="vacancy-count">
                        17 вакансий
                    </div>
                </div>
                <div class="vacancy-column">
                    <div class="vacancy-search">
                        <div class="vacancy-search--input">
                            <input id="vacancySearch" type="text">
                            <label for="vacancySearch">Поиск</label>
                        </div>
                        <div class="vacancy-search--select">
                            <Select/>
                        </div>
                    </div>
                    <div class="vacancy-accordion">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Select from '@/components/Select.vue';
import Accordion from '@/components/Accordion.vue';
export default {
    components: { Select, Accordion },
    data(){
        return{
        }
    }
}
</script>

<style>

</style>