<template>
    <div class="select" @click="toggleDropdown">
        <span class="select-option">{{ placeholder }}</span>
    </div>
    <transition name="slide">
        <div class="select-options--container" v-show="showDropdown">
            <div class="select-options--item" v-for="option in options" :key="option.id" v-bind:class="{'selected': option === selected}">
                <div class="select-options--content" @click="selectOption(option)">
                    {{ option.title }}
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        data(){
            return{
                selected: "select an option",
                showDropdown: false,
                placeholder: 'Выберите регион',
                options: [
                    {title: 'Москва', id: 1},
                    {title: 'Сити 17', id: 2},
                    {title: 'Средиземье', id: 3},
                    {title: 'Рохан', id: 4},
                    {title: 'Гондор', id: 5},
                    {title: 'Мордор', id: 6},
                    {title: 'Изенгард', id: 7},
                    {title: 'Место с очень длинным названием, не требующим упоминания', id: 8},
                ]
            }
        },
        methods: {
            toggleDropdown() {
            this.showDropdown = !this.showDropdown;
            },
            selectOption(option) {
                this.selected = option;
                this.placeholder = option.title;
                this.toggleDropdown()
            }
        }
    }
    </script>

<style>

</style>