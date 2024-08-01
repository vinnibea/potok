<script setup>
import backgroundUrl from '~/assets/f.webp';
import backgroundUrl2 from '~/assets/s2.jpg';
import backgroundUrl3 from '~/assets/s3.jpg';
import HeaderTopVue from '~/components/HeaderTop.vue';
import NavVue from '~/components/Nav.vue';
import MobileMenu from '~/components/MobileMenu.vue';
import ModalVue from '~/components/Modal.vue';
import { useIntersectionObserver } from '@vueuse/core'
import { useResizeObserver } from '@vueuse/core'
import { useElementVisibility } from '@vueuse/core'
import { useElementSize } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'

const mainData = [{
    tag: 'Новость дня',
    tagLink: "/novost-dnya/",
    title: 'ЕС ужесточил въезд для туристов из-за штаммов COVID-19',
    link: '/es-uzhestochil-vezd-dlya-turistov-iz-za-shtammov-covid-19.html',
    img: backgroundUrl,
    content: 'Еврокомиссия внесла изменения в требования для въезда туристов из стран, не входящих в ЕС, и обновила критерии для стран содружества, которые стремятся снять карантинные ограничения. Об этом информирует ответственная пресс-служба учреждения…',
}, {
    tag: 'Новость часа',
    tagLink: "/hour/",
    title: 'В Крым едет миссия Совета Европы по правам человека﻿',
    link: '/href="/ukraine/115450-v-krym-edet-missiya-soveta-evropy-po-pravam-cheloveka.html',
    img: backgroundUrl2,
    content: 'В понедельник, 25 января 2024 года, Генеральный секретарь Совета Европы Турбьерн Ягланд объявил о начале работы делегации в аннексированном Россией Крыму, которая оценит ситуацию с правами человека на полуострове. Об этом говорится…',
},
{
    tag: 'Новость часа',
    tagLink: "/hour/",
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

const firstLoad = ref(true);
const heroRef = ref(null)
const headerRef = ref(null);
const isVisible = useElementVisibility(heroRef);
const { width, height } = useElementSize(headerRef)
const hideHeader = ref(null);
const headRef = ref(null);
const { stop } = useIntersectionObserver(
    headRef,
    ([{ isIntersecting }], observerElement) => {
       console.log(isIntersecting)
        hideHeader.value = isIntersecting
    },
)

const showMobile = ref(false);
// menu items < a href = "/prikol-dnya" > Прикол дня</a >
const transition = ref(0);
const transitionE = 1 * 216;



const transitionFn = computed(() => transition.value * transitionE);
const counter = (i) => {
    if (i === -1 && transitionFn.value === -1944) return transition.value = 0;
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
    firstLoad.value = false;
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

const modal = ref(false);
const onOpenModal = () => {
    console.log('modal')
    modal.value = true;
      document.body.style = "overflowY: hidden; max-height: auto; scroll: hidden; position: fixed; left: 0; right: 0; "
}

const closeModal = () => {
    modal.value = false;
      document.body.style = "overflowY: hidden; min-height: 100vh; position: relative;"
}
</script>

<template>

    <div class="container hero is-fullheight-with-navbar" ref="el">
        <div class="container main-container hero" :style="{ backgroundImage: `url(${mainData[activeArticle].img})` }">

            <div class="mobile-menu-wrapper">
                <MobileMenu :showModal="showMobile" @onClose="onHideMobileMenu"></MobileMenu>
            </div>


            <header class="header" :class="[
                {
                    'header-hidden': !isVisible,
                    'header-isVisible': isVisible || firstLoad
                }

            ]">
                <NavVue @onOpen="onShowMobileMenu" @onClose="onHideMobileMenu" @onModal="onOpenModal"/>
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
                        <li class="navbar-item"> <a href="/tvorcheskaya-lichnost">Творческая
                                личность</a>
                        </li>
                        <li class="navbar-item"> <a href="/istoricheskaya-lichnost">Историческая
                                личность</a>
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

                </div>
            </header>

            <section class="hero-top" ref="swipeMainRef">


                <div class="hero-columns">

                    <div class="content-fresh-wrapper">

                    

                        <article class="hero" ref="heroRef">
                            <div class="hero-center">
                                <div class="hero-for-desktop">
                                   <a :href="mainData[activeArticle].link">
                                    <h1 class="title">


                                        {{ mainData[activeArticle].title }}
                                    </h1>
                                   </a>

                                    <div class="hero-bottom">
                                        <article class="bottom-article" v-for="item in mainData" :key="item.title">
                                            <a class="bottom-article-link" :href="item.link">
                                                <img width="180px" height="120px" :src="item.img" />
                                                <p>
                                                    <span class="hero-subtitle"> 
                                                        <a :href="item.tagLink">
                                                            {{ item.tag }}
                                                        </a>
                                                    </span>
                                                    <h2>{{ item.title }}</h2>
                                                </p>
                                            </a>
                                        </article>
                                    </div>
                                </div>
                            

                            </div>




                        </article>


                    </div>


                </div>




            </section>


            <div class="selector selector-right">
                <span class="selector-item" :class="[
                    { 'selector-item-active': i - 1 === activeArticle }
                ]" v-for="i in 3" :key="i" @click="setActiveArticle(i - 1)">
                </span>

            </div>
        </div>

        <div class="container content-container columns" ref="headRef" style="padding-top: 40px;" >
            
            <header class="header-hidden" :class="[

                {
                    'header-isVisible': !isVisible && !firstLoad,
                    'header-hidden': isVisible,
                }
            ]">
                <HeaderTopVue />
                <NavVue @onOpen="onShowMobileMenu" @onClose="onHideMobileMenu" @onModal="onOpenModal"/>

                <div class="carusel carusel-mobile">
                    <ul class="navbar-additional navbar-additional-mobile">
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

                    <div>
                        <span class="trigger-left" v-if="transition">
                            <Icon class="icon" name="ri:arrow-left-wide-fill" @click="counter(1)"></Icon>
                        </span>

                        <span class="trigger-right" v-if="transitionFn !== -1944">
                            <Icon class="icon" name="ri:arrow-right-wide-fill" @click="counter(-1)"></Icon>
                        </span>

                    </div>
                </div>

            </header>
         
            <stream></stream>

            <div class="is-flex is-flex-direction-column" >
                <show-biz></show-biz>
            </div>

        </div>
 
      <potok-footer></potok-footer>
     
      <ModalVue @onModal="closeModal" :open="modal"></ModalVue>
    </div>
</template>

<style>
.div {
    background-color: red;
    height: 220px;
}
.hero-center {
    display: flex;
    padding-top: 80px;
}

.hero-center .hero-for-desktop {
    display: flex;
    flex-direction: column;
    gap: 48px;
    justify-content: space-between;
}

.hero-center>div>.title {
    margin: 0;
}

.hero-bottom {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 0px;
    justify-content: center;
}

.hero-bottom img {
    min-height: 60px;
    max-height: 60px;
    min-width: 80px;
    max-width: 80px;
    object-fit: cover;
}

.bottom-article-link {
    display: flex;
    align-items: flex-start;
    text-align: left;
    gap: 12px;
    font-size: 12px;
}

.bottom-article {
    padding: 4px;
    flex-basis: 32%;
    flex-shrink: 0;
}

.bottom-article:not(.bottom-article:last-child) {
    border-right: 1px solid rgba(62, 62, 62, 0.275);
}

.desktop-sub {
    order: -1;
}
.bottom-article-link * {
    transition: all 0.3s ease;
} 
.bottom-article-link h2 {
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding-top: 8px;
}

.bottom-article-link p a {
    color: white;
    font-size: 12px;
    font-weight: 500;
}

.bottom-article-link h2:hover, .bottom-article-link p a:hover {
    opacity: 0.8;
}

.hero-columns {
    display: flex;
    justify-content: space-between;
    padding: 0;
}

.container.hero.is-fullheight-with-navbar,
.container.main-container.hero,
.container.container.content-container,
.container.is-widescreen.themes {
    min-width: 100%;
}

.container.main-container.hero {
    justify-content: flex-end;
    background: no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    object-fit: cover;
    padding: 8px;
    z-index: 2;
    box-shadow: inset -2px 0px 240px black;
}

.content-fresh-wrapper {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
}


.header-hidden {
    position: fixed;
    max-height: 0px;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(-100%);
}

.header-isVisible {
    max-height: 100%;
    width: inherit;
    max-width: inherit;
    min-width: inherit;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    margin: 0 auto;
    z-index: 3;
    background-color: rgba(138, 20, 20, 0.581);
    transform: translateY(0%);
    backdrop-filter: blur(8px);
}

.header-content {
    background-color: rgba(62, 62, 62, 0.476);
}

.header.header-isVisible {
    transition: all 1s ease;
    backdrop-filter: blur(0px)
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

ul.navbar-additional>li.navbar-item {
    padding: 0;
    transition: all 0.5s ease-in-out;
}

p.subtitle {
    color: #333;
    font-size: 16px;
    padding-left: 8px;
    border-top: 4px solid;
}

.container.content-container {
    gap: 24px;
}

.container.main-container {
    min-height: 100svh;
}


.navbar-additional {
    backdrop-filter: none;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 2;
}

.navbar-additional .navbar-item {
    background-color: rgba(255, 255, 255, 0);
    text-transform: uppercase;
    line-height: 1rem;

}



.navbar-additional .navbar-item a {
    padding: 12px;
    color: white;
    font-size: 12px;
}

.desktop-sub .navbar-additional .navbar-item a {
    padding: 8px 12px;
    font-weight: 400;
    background-color: rgba(185, 185, 185, 0.157);
    border-radius: 4px;

}

.desktop-sub .navbar-additional {
    flex-direction: row;
    gap: 12px;
    background-color: rgba(147, 144, 144, 0);
    padding: 8px 24px;
    border: none;
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
    font-size: 1.5rem;
    color: #eee;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgb(174, 172, 172);
}

.article-main .title {
    margin: 0 auto;
    text-align: center;
    padding: 8px 12px;
    font-size: 4rem;
}

.article-main p.subtitle {
    font-size: 14px;
    flex: 1;
    padding: 4px 8px;
    font-weight: 200;
}


.hero-fresh>h1.title {
    color: #eee;
}

.hero-top {}

.hero-top .hero-body {
    display: flex;
    flex-direction: row;
    pointer-events: none;
}

.header {
    z-index: 2;
    transition: all 0.3s ease;
}

.container.main-container {
    justify-content: center;
    filter: grayscale(0.6);
    background-position: 50% 50%;
}

.container.main-container .title {
    padding: 24px 24px 12px;
    max-width: 85%;
    color: white;
    font-size: 3rem;
    min-height: 4rem;
    border-left: 4px solid red;
    transition: all 0.3s ease;
}

.container.main-container .title:hover {
  opacity: 0.9;
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
    background-color: rgba(77, 77, 77, 0.086);
    z-index: 2;
}

.header-end {
    padding: 4px 8px;
    gap: 18px;
}

.navbar-link::after {
    display: none;
}

.content-fresh-wrapper article.hero {
    flex-direction: column;
}

.hero.is-fullheight-with-navbar {

    box-shadow: 0px 2px 22px rgba(175, 70, 70, 0.2);
}

@media screen and (max-width: 700px) {
    .desktop-sub {
        display: none;
    }

    .hero-bottom {
        display: none;

    }

    .content-fresh-wrapper {
        width: 100%;
    }

    main.is-flex.is-justify-content-space-between.container.content-container {
        flex-direction: column !important;
    }

    section.hero-fresh {
        display: none;
    }

    .selector {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
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
        background-color: rgb(255, 255, 255);
    }
}

.hero-body h1 {
    color: #eee;
    font-size: 3rem;

    max-width: max-content;
    padding-right: 0;
}

.hero-top>h1.title {
    display: none;
}

@media screen and (max-width: 1224px) {
    .hero-top {}

    .hero-top>h1.title {
        display: inline;
        min-width: 85%;
        max-width: 85%;


    }


    .hero-fresh {
        display: none;
    }

    .selector {
        gap: 20px;
        padding: 24px;
        justify-content: center;
    }

    .selector-item {
        display: block;
        width: 25%;
        height: 10px;
        border-radius: 4px;
        border: 1px solid rgb(255, 255, 255);
        position: relative;
        z-index: 10;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .selector-item-active {
        background-color: #eee;
    }

}

@media screen and (max-width: 700px) {
    .container.main-container .title {
        max-width: fit-content;
        font-size: 2rem;
    }




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

    .navbar-additional-mobile .navbar-item a {
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


    .navbar-additional .navbar-additional-mobile .navbar-item a {
        color: white;
        font-size: 10px;
    }


    .navbar-additional .navbar-additional-mobile .navbar-item {
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
        transform: translateY(-45%);

        right: 0px;

        padding: 2px 24px;
        z-index: 2;

    }

    .trigger-left {

        position: absolute;
        color: white;
        top: 50%;
        transform: translateY(-45%);
        font-size: 16px;
        left: 0px;

        padding: 2px 24px;
        z-index: 2;

        transition: all 0.3s ease;
    }


    .carusel .trigger-right {
        filter: none;

        z-index: 4;

        transition: all 0.3s ease;
    }


    .navbar-additional {
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
        align-items: center;
        position: relative;
    }

    .container.content-container {
        padding: 12px 0px;
    }

    .container.main-container.hero {
        justify-content: center;
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