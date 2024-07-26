<script setup>

const active = ref(0);

const setActive = (i) => {
    active.value = i;
}
</script>

<template>

    <div class="show-wrapper">
        <h2 class="title">ШОУБИЗ</h2>
        <div class="main_showbiz">

            <div>
                <a
                    href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html"></a><br>
                <a href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html">
                    <div class="img-wrapper">
                        <img src="../assets/s4.jpg">
                        <Icon name="ri:play-circle-line" class="icon-play">

                        </Icon>
                    </div>

                </a>
                <h3 class="title"><a
                        href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html">«София»
                        2024: смотреть сериал онлайн 3 и 4 серия в хорошем качестве</a></h3>
            </div>
            <div class="main_showbiz_block">
                <div class="navbar-content">
                    <span class="content-item subtitle" @click="setActive(0)" :class="[{
                        'is-active': active === 0,
                    }]">ПОСЛЕДНИЕ</span>
                    <span class="content-item subtitle" @click="setActive(1)" :class="[{
                        'is-active': active === 1,
                    }]">ПОПУЛЯРНОЕ</span>
                </div>
                <div class="show" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a
                        href="/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html"></a><br>
                    <a href="/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html">
                        <img class="image is-1by3" src=""> </a>
                    <h3 class="title is-6"><a
                            href="/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html">Новости
                            шоу-бизнеса знаменитостей: последние сплетни, слухи 2024</a></h3>
                </div>
                <div class="show" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a href="/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html">

                    </a>
                    <br>
                    <a href="/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html">
                        <img src="../assets/s2.jpg"></a><br>
                    <h3 class="title is-6"><a href="/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html">Потап развелся
                            с женой Ириной</a></h3>
                </div>
                <div class="show" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a
                        href="/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html"></a><br>
                    <a href="/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html">
                        <img src="../assets/s3.jpg"></a><br>
                    <h3 class="title is-6"><a
                            href="/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html">Хакеры
                            взломали телефон Ольги Бузовой: откровенные фото и переписка</a></h3>

                </div>
                <button class="button is-danger is-outlined">Показать больше</button>
            </div>
        </div>
    </div>
</template>

<style>
.show-translate {
    transform: translateX(-120%);

}

div.img-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-play {
    font-size: 196px;
    color: rgba(33, 33, 33, 0.589);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 300;
}

.icon-play:hover {
    color: rgba(109, 0, 0, 0.623);
}

.main_showbiz>div .img-wrapper img {
    border-radius: 8px;
    position: relative;
    filter: blur(1px);
    opacity: 0.8;
    border: 4px solid rgb(29, 29, 29);
}

.main_showbiz>div {
    position: relative;
}

.show img {
    border-radius: 8px;
    padding: 4px;
    max-width: 290px;
    min-width: 290px;
    height: 230px;
}

.main_showbiz .show {
    border-bottom: 1px solid rgba(98, 98, 98, 0.326);
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

}

.main_showbiz_block~div {
    display: flex;
    align-items: center;
}

.show-wrapper {
    padding: 8px;
}
.show-wrapper div .title {
    padding: 0px 12px;
    text-align: center;
}

.show-wrapper > .title {
    padding: 0px 12px;
    text-align: left;
}

.navbar-content {
    box-shadow: none;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid rgba(80, 80, 80, 0.256);
}

;

.content-item {
    color: #333 !important;
    cursor: pointer;
    opacity: 1;
    border-bottom: 1px solid white;

}

.content-item.subtitle {
    margin: 0;
    color: #333;
    padding: 0 4px;
    opacity: 0.77;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.content-item.subtitle.is-active {
    border-bottom: 2px solid red;
    color: #333;
    opacity: 1;
}

.title.is-6>a {
    color: #333;
}

.main_showbiz>.title {
    color: #333;
    transform: rotate(-45%);
    width: 100%;
    align-self: center;
}

.main_showbiz {
    display: flex;
    padding-right: 24px;
}

.main_showbiz_block {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 8px;
    overflow: hidden;
}

.show-wrapper,
.main_showbiz {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
}

@media screen and (max-width: 1024px) {
    .show-wrapper > div .title {
        padding: 0px 12px 24px;
        text-align: center;
    }
    .show-wrapper,
    .main_showbiz {
        margin: 0;
        display: flex;
        flex-direction: column;
        padding: 0 24px;
    }

    .show-wrapper .title {
        margin: auto;
        padding: 24px;
    }

    .main_showbiz_block {
        border: none;
    }

    .show img {
        max-width: 420px;
        min-width: 420px;
        height: 300px;
    }
}

@media screen and (max-width: 700px) {
    .show-wrapper > div .title {
        padding: 0px 12px 24px;
        text-align: center;
    }
    .show-wrapper,
    .main_showbiz {
        padding: 0;
    }

    .show-wrapper .title {
        margin: auto;
        padding: 24px;
    }

    .main_showbiz_block {
        border: none;
    }

    .show img {
        max-width: 420px;
        min-width: 420px;
        height: 300px;
    }
}
</style>
