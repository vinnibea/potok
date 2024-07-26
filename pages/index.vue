<script setup>
import backgroundUrl from '~/assets/fly.jpeg';
import backgroundUrl2 from '~/assets/s2.jpg';
import backgroundUrl3 from '~/assets/s3.jpg';
import HeaderTopVue from '~/components/HeaderTop.vue';
import NavVue from '~/components/Nav.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import { useIntersectionObserver } from '@vueuse/core'
import { useResizeObserver } from '@vueuse/core'
import { useElementVisibility } from '@vueuse/core'
import { useElementSize } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'



const mainData = [{
    title: 'ЕС ужесточил въезд для туристов из-за штаммов COVID-19',
    link: '/es-uzhestochil-vezd-dlya-turistov-iz-za-shtammov-covid-19.html',
    img: backgroundUrl,
    content: 'Еврокомиссия внесла изменения в требования для въезда туристов из стран, не входящих в ЕС, и обновила критерии для стран содружества, которые стремятся снять карантинные ограничения. Об этом информирует ответственная пресс-служба учреждения…',
}, {
    title: 'В Крым едет миссия Совета Европы по правам человека﻿',
    link: '/href="/ukraine/115450-v-krym-edet-missiya-soveta-evropy-po-pravam-cheloveka.html',
    img: backgroundUrl2,
    content: 'В понедельник, 25 января 2024 года, Генеральный секретарь Совета Европы Турбьерн Ягланд объявил о начале работы делегации в аннексированном Россией Крыму, которая оценит ситуацию с правами человека на полуострове. Об этом говорится…',
},
{
    title: 'Лондонский суд: возможна причастность Путина к убийству Литвиненко',
    link: '/mirovie-novoti/115412-londonskij-sud-vozmozhna-prichastnost-putina-k-ubijstvu-litvinenko.html',
    img: backgroundUrl3,
    content: 'Королевский суд Лондона заявил, что убийство экс-офицера ФСБ Александра Литвиненко возможно было одобрено президентом России Владимиром Путиным. Об этом говорится в докладе, с которым выступил на заседании Палаты общин судья сэр Роберт Оуэн, передает…',
}]

const el = ref(null)
const carouselRef = ref(null);
const swipeMainRef = ref(null);
// const { isSwiping, direction } = useSwipe(carouselRef);
// const { isSwiping: mainSwipe, direction: mainDirection } = useSwipe(swipeMainRef);

// watch(isSwiping, (answer) => {
//     if (answer) {
//         counter(direction.value === 'left' ? -1 : 1);
//     }
// })




useResizeObserver(el, (entries) => {
    const entry = entries[0];
    const { width } = entry.contentRect;
    if (width > 460) {
        showMobile.value = false;
        document.body.style = 'position: relative; overflow: hidden'
    }
})


const heroRef = ref(null)
const headerRef = ref(null);
const isVisible = useElementVisibility(heroRef);
const { width, height } = useElementSize(headerRef)

const hideHeader = ref(false);
const headRef = ref(null);
const { stop } = useIntersectionObserver(
    headRef,
    ([{ isIntersecting }], observerElement) => {
      
            hideHeader.value = isIntersecting
    },
)

const showMobile = ref(false);
// menu items < a href = "/prikol-dnya" > Прикол дня</a >
const transition = ref(0);
const transitionE = 1 * 216;



const transitionFn = computed(() => transition.value * transitionE);
const counter = (i) => {
    if (i === -1 && transitionFn.value === -2592) return
    if (i === 1 && transitionFn.value === 0) return
    transition.value += i;
}


const onShowMobileMenu = () => {
    showMobile.value = true;
    document.body.style = "overflowY: hidden; max-height: auto; scroll: hidden; position: fixed; left: 0; right: 0; "
}

const onHideMobileMenu = (status) => {
    document.body.style = "overflowY: hidden; min-height: 100vh; position: static;"
    showMobile.value = false;
}

const activeArticle = ref(0);

const { width: windowWidth } = useWindowSize()
let timer;
onMounted(() => {
    timer = setInterval(() => {
        if (activeArticle.value >= 2) {
            activeArticle.value = 0;
            return;
        }
        activeArticle.value++;

    }, 10000)
});

watch(windowWidth, (v) => {
    if (v < 1200) {
        clearTimeout(timer);
    }
})
const setActiveArticle = (i) => {
    clearTimeout(timer)
    activeArticle.value = i;
}

// watch(mainSwipe, (answer) => {
//     if (answer) {
//         if(activeArticle.value === 2 && mainDirection.value === 'right' ) {
//          activeArticle.value = 0
//          return;
//         };
//         if(activeArticle.value === 0 && mainDirection.value === 'left') {
//             activeArticle.value = 2
//             return 
//         };
//         setActiveArticle(mainDirection.value === 'left' ? activeArticle.value += -1 :  activeArticle.value +=1);
//     }
// })

</script>

<template>

    <div class="container hero is-fullheight-with-navbar"  ref="el">
        <div class="container main-container hero"
            :style="{ backgroundImage: `url(${mainData[activeArticle].img})`}">

            <div class="mobile-menu-wrapper">

                <MobileMenu :showModal="showMobile" @onClose="onHideMobileMenu"></MobileMenu>
            </div>
           
           
            <header  class="header" ref="headerRef" :class="[
                {
                    'header-collapsed': hideHeader,
                    'header-isVisible': !isVisible,
                } 
 
            ]">
                <NavVue @onOpen="onShowMobileMenu" @onClose="onHideMobileMenu" />
                <HeaderTopVue />
                <div class="carusel carusel-mobile" ref="carouselRef">

                    <ul class="navbar-additional">
                        <li class="navbar-item" :style="{
                transform: `translate(${transitionFn}px)`
            }"> <a href="/srochno">Калейдоскоп новостей</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/novost-dnya">Новость дня</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/istoriya-dnya">История дня</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/analitika">Аналитика</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/dosie-politiki">Досье: Политики</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sportsmeny">Спортсмены</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/tvorcheskaya-lichnost">Творческая личность</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/istoricheskaya-lichnost">Историческая личность</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-psihologa">Советы: психолога</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-dietologa">Советы: диетолога</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-terapevta">Советы: терапевта</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-okulista">Советы: окулиста</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/interesnie-fakty">Интересные факты</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/aforizmy">Афоризмы</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/anekdoty">Анекдоты</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sonnik">Сонник</a>
                        </li>

                    </ul>

                    <span class="trigger-left" v-if="transition">
                        <Icon class="icon" name="ri:arrow-left-wide-fill" @click="counter(1)"></Icon>
                    </span>

                    <span class="trigger-right" v-if="transitionFn !== -2592">
                        <Icon class="icon" name="ri:arrow-right-wide-fill" @click="counter(-1)"></Icon>
                    </span>

                </div>
                <div class="desktop-sub">
                    <ul class="navbar navbar-additional">
                        <li class="navbar-item"> <a href="/srochno">Калейдоскоп новостей</a>
                        </li>
                        <li class="navbar-item"> <a href="/novost-dnya">Новость дня</a>
                        </li>
                        <li class="navbar-item"> <a href="/istoriya-dnya">История дня</a>
                        </li>
                        <li class="navbar-item"> <a href="/analitika">Аналитика</a>
                        </li>
                        <li class="navbar-item"> <a href="/dosie-politiki">Досье: Политики</a>
                        </li>
                        <li class="navbar-item"> <a href="/sportsmeny">Спортсмены</a>
                        </li>
                        <li class="navbar-item"> <a href="/tvorcheskaya-lichnost">Творческая личность</a>
                        </li>
                        <li class="navbar-item"> <a href="/istoricheskaya-lichnost">Историческая личность</a>
                        </li>
                        <li class="navbar-item"> <a href="/sovety-psihologa">Советы: психолога</a>
                        </li>
                        <li class="navbar-item"> <a href="/sovety-dietologa">Советы: диетолога</a>
                        </li>
                        <li class="navbar-item"> <a href="/sovety-terapevta">Советы: терапевта</a>
                        </li>
                        <li class="navbar-item"> <a href="/sovety-okulista">Советы: окулиста</a>
                        </li>
                        <li class="navbar-item"> <a href="/interesnie-fakty">Интересные факты</a>
                        </li>
                        <li class="navbar-item"> <a href="/aforizmy">Афоризмы</a>
                        </li>
                        <li class="navbar-item"> <a href="/anekdoty">Анекдоты</a>
                        </li>
                        <li class="navbar-item"> <a href="/sonnik">Сонник</a>
                        </li>
                    </ul>

                    <span class="trigger-left" v-if="transition">
                        <Icon class="icon" name="ri:arrow-left-wide-fill" @click="counter(1)"></Icon>
                    </span>

                    <span class="trigger-right" v-if="transitionFn !== -2376">
                        <Icon class="icon" name="ri:arrow-right-wide-fill" @click="counter(-1)"></Icon>
                    </span>

                </div>
            </header>

            <section class="hero-top"  ref="swipeMainRef">
                <h1 class="title px-4 py-6" style="color: white">
                    {{ mainData[activeArticle].title }}
                </h1>
                <div class="hero-row">
                    
                    <section class="hero hero-fresh">
                        <div class="content-fresh-wrapper" v-for="(data, i) in mainData" :key="data.img" @click="setActiveArticle(i)" :class="[{
                            'is-active': i === activeArticle,
                        }]"
              >
                            <article class="hero-fresh-content">
                                <h1 class="title">
                                    {{ data.title }}
                                </h1>


                                <p class="subtitle">

                                    {{ data.content }}

                                </p>
                            </article>
                        </div>
                    </section>
                </div>



            </section>


            <div class="selector selector-right">
                <span class="selector-item" :class="[
                { 'selector-item-active': i - 1 === activeArticle }
            ]" v-for="i in 3" :key="i" @click="setActiveArticle(i - 1)">
                </span>

            </div>
        </div>
        <div ref="heroRef" ></div>
        <!--  -->


        <div class="container content-container columns"  ref="headRef" :style="`padding-top: ${150}px`">
            <header ref="headerRef" class="header header-hidden" :class="[
               
        {
            'header-isVisible': !isVisible && hideHeader,
        }
            ]">
                <HeaderTopVue />
                <NavVue @onOpen="onShowMobileMenu" @onClose="onHideMobileMenu" />

                <div class="carusel carusel-mobile">
                    <ul class="navbar-additional">
                        <li class="navbar-item" :style="{
                transform: `translate(${transitionFn}px)`
            }"> <a href="/srochno">Калейдоскоп новостей</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/novost-dnya">Новость дня</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/istoriya-dnya">История дня</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/analitika">Аналитика</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/dosie-politiki">Досье: Политики</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sportsmeny">Спортсмены</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/tvorcheskaya-lichnost">Творческая личность</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/istoricheskaya-lichnost">Историческая личность</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-psihologa">Советы: психолога</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-dietologa">Советы: диетолога</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-terapevta">Советы: терапевта</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sovety-okulista">Советы: окулиста</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/interesnie-fakty">Интересные факты</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/aforizmy">Афоризмы</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/anekdoty">Анекдоты</a>
                        </li>
                        <li class="navbar-item" :style="{
                transform: `translateX(${transitionFn}px)`
            }"> <a href="/sonnik">Сонник</a>
                        </li>

                    </ul>

                    <span class="trigger-left" v-if="transition">
                        <Icon class="icon" name="ri:arrow-left-wide-fill" @click="counter(1)"></Icon>
                    </span>

                    <span class="trigger-right" v-if="transitionFn !== -2592">
                        <Icon class="icon" name="ri:arrow-right-wide-fill" @click="counter(-1)"></Icon>
                    </span>

                </div>

            </header>
            <stream></stream>
            <div class="is-flex is-flex-direction-column">
                <show-biz></show-biz>
            </div>

        </div>

    </div>
</template>

<style>

.hero-row {
    padding: 8px 12px 48px;
}

.content-fresh-wrapper {
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;
    border-left: 4px solid red;
}

.content-fresh-wrapper.is-active {
    
    box-shadow: 2px 2px 22px rgba(157, 157, 157, 0.3);
}

.header-hidden {
    opacity: 0;
    max-height: 0;
    transition: all 0.5s;
}

.header.header-isVisible {
    width: inherit;
    max-width: inherit;
    min-width: inherit;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    margin: 0 auto;
    max-height: 100%;
    z-index: 10;
    background-color: rgba(39, 39, 39, 0.202);
}

img.img-top {
    border: none;
    border-radius: 8px;
    padding: 2px;
}

.article-control {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 20px;
    padding: 12px 8px;
    gap: 8px;

}


.hero-fresh-content {
    align-content: baseline;
    justify-content: space-around;
   

}

.hero-fresh-content .title {
    margin: 0 auto;
    font-size: 1rem;
    text-align: center;
    flex: 1;
    color: white;
    background-color: rgba(0, 0, 0, 0.35);
}

.hero-fresh-content .subtitle {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 120px;
    text-align: justify;
    color: white;
    padding: 4px 12px;
}


.carusel-mobile {
    display: none;
}

.trigger-left,
.trigger-right {
    display: none;
}

.navbar-additional.ul > li.navbar-item {
    padding: 0;
    transition: all 0.3s ease;
}

p.subtitle {
    color: #333;
    font-size: 16px;
    padding-left: 8px;
   border-top: 4px solid;
}

.container.content-container {
    padding: 24px;
    border-top: 2px solid rgba(193, 8, 8, 0.65);
}

.container.main-container {

 min-height: 100svh;
}

.navbar-additional {
    backdrop-filter: none;
    box-shadow: none;
    gap: 2px;
    display: flex;
    flex-wrap: wrap;
    z-index: 0;
}

.navbar-additional .navbar-item {
    background-color: rgba(255, 255, 255, 0);
    text-transform: uppercase;

}

.navbar-additional .navbar-item a {
    color: white;
    font-size: 12px;
}

.navbar-additional .navbar-item a:hover {
    opacity: 0.7;
}


.selector {
    display: none;
}

.mobile-menu-wrapper {
    display: none;
}


.navbar-burger {
    color: white;
}

.img-top {
    padding: 0 8px;
    border-left: 2px solid red;
    min-height: 80px;
    max-height: 80px;
    min-width: 120px;
    max-height: 120px;
}

section.hero.hero-fresh {
    flex: 1;
    flex-direction: row;
    gap: 4px;
    backdrop-filter: blur(8px);
    
}

article.box {
    display: flex;
    flex: 1;
    flex-direction: row;
    background: none;
    text-align: center;
    font-weight: 600;
    box-shadow: none;
    font-size: 2rem;
    align-items: baseline;
    padding: 0;
}

.columns-top {
    justify-content: flex-end;
}

.article-main h2 {
    font-size: 1.2rem;
    color: #eee;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgb(174, 172, 172);
}

.article-main .title {
    margin: 0 auto;
    text-align: center;
    padding: 2px 4px;
    font-size: 1rem;
}

.article-main p.subtitle {
    font-size: 14px;
    flex: 1;
    padding: 4px 8px;
    font-weight: 200;
}


.hero-fresh>h1.title {
    color: #eee;
    font-size: 1rem;
    max-width: 90%;
}

.hero-top {}

.hero-top .hero-body {
    display: flex;
    flex-direction: row;
    pointer-events: none;
}

.header {
    transition: all 0.3s ease;
}

.header-collapsed {
    transform: translateY(-100%)
}

.container.main-container {
    justify-content: flex-end;
    filter: grayscale(0.6);
    
    background-size: cover;
    background-position: 50% 50%;
}

.icon-social {
    display: block;
    font-size: 20px;
    color: rgba(220, 220, 220, 0.5);
    padding: 4px;
}

.icon-search {
    display: block;
    font-size: 36px;
    color: #eee;
    transition: all 0.3s ease;
}

header.header {
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
    backdrop-filter: blur(8px);
}

.header-end {
    padding: 4px 8px;
    gap: 18px;
}

.navbar-link::after {
    display: none;
}


.hero.is-fullheight-with-navbar {

    box-shadow: 0px 2px 22px rgba(175, 70, 70, 0.2);
}

@media screen and (max-width: 700px) {


    main.is-flex.is-justify-content-space-between.container.content-container {
        flex-direction: column !important;
    }

    section.hero-fresh {
        display: none;
    }

    .selector {
        display: flex;
        gap: 20px;
        padding: 24px;
        justify-content: center;
    }

    .selector-item {
        display: block;
        width: 24px;
        height: 10px;
        border-radius: 20px;
        border: 1px solid rgb(255, 255, 255);
        position: relative;
        z-index: 10;
        cursor: pointer;
    }

    .selector-item-active {
        background-color: rgb(19, 12, 12);
    }
}

.hero-body h1 {
    color: #eee;
    font-size: 3rem;
    min-width: 90%;
    max-width: max-content;
    padding-right: 0;
}
.hero-top > h1.title {
    display: none;
}
@media screen and (max-width: 1224px) {
     .hero-top {
        padding: 42px 12px 42px;
     }
    .hero-top > h1.title {
        display: inline;
        min-width: 85%;
        max-width: 85%;
        

    }


    .hero-fresh {
        display: none;
    }

    .selector {
        display: flex;
        gap: 20px;
        padding: 24px;
        justify-content: center;
    }

    .selector-item {
        display: block;
        width: 24px;
        height: 10px;
        border-radius: 20px;
        border: 1px solid rgb(255, 255, 255);
        position: relative;
        z-index: 10;
        cursor: pointer;
    }

    .selector-item-active {
        background-color: rgb(111, 111, 111);
    }

}

@media screen and (max-width: 700px) {
    .header {
        max-width: 100%;
        z-index: 20;
    }

    body {

        position: static
    }

    .desktop-sub {
        display: none;
    }

    .trigger-left,
    .trigger-right {
        display: inline-block;
    }

    .navbar-additional .navbar-item a {
        color: white;
        font-size: 10px;
        line-height: 1;
    }

    .hero-body h1 {
        color: #eee;
        font-size: 2rem;
        min-width: 90%;
        max-width: max-content;
        padding-bottom: 0px;
        padding-right: 0;
    }

    .hero-top .hero-body {
        pointer-events: none;
        max-width: 100%;
    }

    .mobile-menu-wrapper {
        display: flex;
        position: absolute;
        overflow: hidden;
        background-color: white;
        top: 0;
        bottom: 0;
        
    }


    .navbar-additional .navbar-item a {
        color: white;
        font-size: 10px;
    }

    .navbar-additional .navbar-item {
       
    }

    .navbar-additional .navbar-item {
        max-width: 180px;
        min-width: 150px;
        text-align: center;

    }

    .carusel ul {
        position: relative;
        color: rgb(247, 247, 247);
        background-color: rgba(255, 255, 255, 0);
    }

    .carusel {
        display: flex;
        align-items: flex-start;
        position: relative;
        background-color: rgba(82, 82, 82, 0.104);
        max-width: 100vw;
        border-top: 1px solid rgba(255, 255, 255, 0.216);
    }

    .carusel .trigger-right {
        position: absolute;
        color: white;
        top: 50%;
        font-size: 16px;
        transform: translateY(-35%);

        right: 0px;


        padding: 2px 12px;
        border-radius: 8px;
        z-index: 2;

    }

    .trigger-left {

        position: absolute;
        color: white;
        top: 50%;
        transform: translateY(-35%);
        font-size: 16px;


        left: 0px;


        padding: 2px 12px;
        border-radius: 8px;
        z-index: 2;

        background: transparent;
        transition: all 0.3s ease;
    }


    .carusel .trigger-right {
        filter: none;
        box-shadow: none;
        z-index: 4;

        background: transparent;
        transition: all 0.3s ease;
    }

    .carusel .trigger-right:hover,
    .trigger-right:hover {
        opacity: 0.9;
    }

    .navbar-additional {
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
        align-items: center;
        position: relative;
    }

    .container.content-container {
        padding: 12px 4px;
        border-top: 1px solid rgba(193, 8, 8, 0.65);
    }
}

@media screen and (max-width: 460px) {
    body {
        max-width: 100%;
        margin: 0 auto;
        position: static
    }
}
</style>