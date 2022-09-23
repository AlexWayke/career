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
        </div>
        <div class="conditions">
            <div class="conditions-wrapper container">
                <h2 class="conditions-title">
                    Выбирай комфортные условия
                </h2>
                <ul class="conditions-list">
                    <li class="conditions-li">
                        <h3 class="conditions-li--title">
                            Доход без ограничений
                        </h3>
                        <p class="conditions-li--text">
                            Финансовая стабильность и возможность получать повышенное вознаграждение за дополнительные часы работы или активную продажу продуктов
                        </p>
                    </li>
                    <li class="conditions-li">
                        <h3 class="conditions-li--title">
                            Удобный график
                        </h3>
                        <p class="conditions-li--text">
                            Работайте 5/2, 2/2 или по гибкому графику с почасовой оплатой — удаленно или в офисе. Если совмещаешь с учебой, то подберем подходящую вакансию
                        </p>
                    </li>
                    <li class="conditions-li">
                        <h3 class="conditions-li--title">
                            Можно без опыта
                        </h3>
                        <p class="conditions-li--text">
                            Главное — коммуникабель­ность, активность и желание работать, остальному научим. Начни свою карьеру в крупной и современной компании
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="blog container">
            <h2 class="blog-title">
                Заходи в наш Блог
            </h2>
            <button class="blog-button">
                Читать блог
            </button>
            <div class="blog-template--side">
                <div class="blog-item">
                    <div class="blog-item--img">
                        <img src="../assets/img/blog/1.png" alt="Blog">
                    </div>
                    <div class="blog-item--title">
                        «В сбер я пришел уже пилотом».  Продакт — о том, как прыжки с парашютом и пилотирование самолетов помогают ему в работе
                    </div>
                </div>
                <div class="blog-item">
                    <div class="blog-item--img">
                        <img src="../assets/img/blog/2.png" alt="Blog">
                    </div>
                    <div class="blog-item--title">
                        «В сбер я пришел уже пилотом».  Продакт — о том, как прыжки с парашютом и пилотирование самолетов помогают ему в работе
                    </div>
                </div>
            </div>
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