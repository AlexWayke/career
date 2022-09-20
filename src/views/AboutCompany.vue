<template>
    <div class="aboutcompany">
        <div class="header">
            <div class="header-logo">Яндекс</div>
            <div class="header-contacts">
                <div class="header-contacts--city">
                    Москва
                </div>
                <div class="header-contacts--link">
                    <a href="#">biggoodcompany.co.uk</a>
                </div>

            </div>
        </div>
        <div class="mainscreen">
            <div class="mainscreen-background">
                <img src="../assets/img/mainscreen/background.png" alt="#333">
            </div>
            <div class="mainscreen-content">
                <div class="mainscreen-title">
                    <h1>Построй карьеру в Яндекс</h1>
                </div>
                <div class="navigation">
                    <p class="navigation-link">О компании</p>
                    <p class="navigation-link">Вакансии (17)</p>
                    <p class="navigation-link">Блог</p>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="about-content container">
                <div class="about-image">
                    <img src="../assets/img/about/promoImg.png" alt="promoImage">
                </div>
                <div class="about-promo">
                    <h2 class="about-title">
                        Лучшие условия для твоей самореализации
                    </h2>
                    <p class="about-text">
                        Я́ндекс — российская транснациональная компания в отрасли информационных технологий, чьё головное юридическое лицо зарегистрировано в Нидерландах, владеющая одноимённой системой поиска в интернете, интернет-порталом и веб-службами в нескольких странах. Наиболее заметное положение занимает на рынках России, Белоруссии и Казахстана. Также Яндекс является одной из самых быстрорастущих корпораций в России.
                    </p>
                </div>
                <div class="about-slider">
                    <Slider/>
                </div>
                <div class="about-promo">
                    <h2 class="about-title">
                        Работай в просторном офисе
                    </h2>
                </div>
            </div>
            <div class="about-conditions container"></div>
        </div>
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
    name: "AboutCompany",
    components: { Slider },
    setup() {

        return {  }
    },
}
</script>

<style>

</style>