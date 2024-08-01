<script setup>
import SearchInputVue from './SearchInput.vue';
import logo from '~/assets/logo-square-red.png';
const subMenuItems = [
    {
        title: "Пресс-релизы",
        link: "/press-release",
    },


    {
        title: "Новости Киева",
        link: "/novosti-kieva",
    },
    {
        title: "ЕВРО 2012",
        link: "/euro2012",
    },
    {
        title: "Культура",
        link: "/kultura",
    }, {
        link: "/turizm-i-puteshestvie",
        title: "Туризм"
    },

    {
        link: "/moda",
        title: "Мода"
    },

    {
        link: "/nedvijimost",
        title: "Недвижимость"
    },

    {
        link: "/poleznie-sovety",
        title: "Полезные советы"
    },

    {
        link: "//muzhchina-i-zhenshina",
        title: "Мужчина и женщина"
    },

    {
        link: "/trudoustroistvo",
        title: "Трудоустройство"
    },

    {
        link: "/produkty-i-pitanie",
        title: "Продукты"
    },

    {
        link: "/auto",
        title: "Авто"
    },

    {
        link: "/ekologiya",
        title: "Экология"
    },

    {
        link: "/kulinariya",
        title: "Кулинария"
    },

    {
        link: "/obrazovanie",
        title: "Образование"
    },

    {
        link: "/prestupnost",
        title: "Происшествия и криминал"
    },

    {
        link: "/internet",
        title: "Интернет"
    },

    {
        title: "Дети",
        link: "/deti",
    },

    {
        title: "Новый 2024 год",
        link: "/new-2015-year",
    },

    {
        title: "Гороскоп",
        link: "/goroskop",
    },

    {
        title: "Шоубиз",
        link: "/shoybiz",
    },

    {
        title: "Здоровье",
        link: "/zdravochranenie",
    },

    
    {
        title: "Прикол дня",
        link: "/prikol-dnya",
    },
];



const menuItems = [ {
    title: "Мировые новости",
    link: "/mirovie-novoti",
}, {
    title: "Антикризис",
    link: "/antikrizis",
},
{
    title: "Экономика",
    link: "/buznes-ekonomuka"
},
{
    title: "Новости Украины",
    link: "/ukraine",
},
{
    title: "Спорт",
    link: "/sport",
},



{
    title: "Наука",
    link: "/science",
},
];

const showDropDown = ref(false);
const emit = defineEmits(['onOpen', 'onClose', 'closeMobile', 'onModal']);
defineProps({
    bg: {
        type: Boolean,
        default: false,
    },
    isMobile: {
        type: Boolean,
        default: false,
    }
})

const modalOpen = () => {
    emit('onModal')
}
const dropDownRef = ref(null);
const showSearch = ref(false);
const modalOpened = ref(false);

const onDropDown = () => {
    showDropDown.value = !showDropDown.value;
}

const subMenuColumn = computed(() => (
    {
        left: subMenuItems.slice(0, Math.floor(subMenuItems.length / 2)) || [],
        right: subMenuItems.slice(Math.round(subMenuItems.length / 2)) || [],
    }
));

const onShowSearch = () => {
    showSearch.value = false;
}

const onModalShow = () => {
    modalOpened.value = true;
    emit('onOpen');
}
const iconRef = ref(null)
const onSearchOpen = () => {

    modalOpened.value = false;
    showSearch.value = true;
    emit('closeMobile');
    emit('onClose');
};

watch(iconRef, (prev, what) => {

})

onMounted(() => {
    document.addEventListener('click', (event) => {
        if (!showDropDown.value) return;
        if (!Array.from(event.target.classList).includes('navbar-link') && !Array.from(event.target.classList).includes('drop-down-half')) {

            showDropDown.value = false;
        }
    })
})


</script>

<template>

    <nav class="navbar navbar-relative is-flex is-justify-content-space-between" role="navigation" :class="[
        {
            'navbar-has-background-white': isMobile || bg,


        }
    ]" aria-label="main navigation">



        <div class="navbar-top-brand">

            <div class="navbar-top-left" ref="iconRef">


                <info-top></info-top>
                <div class="navbar-top-left-mobile">
                    <Icon name="ic:baseline-account-box" class="icon-profile" @click="modalOpen"></Icon>
                    <Icon style="color: white; transform: scale(1.2)" @click="onModalShow" name="ri:menu-search-line"
                        class="icon" />
                </div>
            </div>
        </div>


        <div id="" class="navbar-menu">

            <div class="navbar-start">
              <a href="/">
                <img class="logo logo-main" :src="logo"/>
              </a>
                <a v-for="item in menuItems" class="navbar-item has-text-white" :class="[{
                    'has-text-dark': bg
                }]" :key="item.link" :href="item.link">
                    {{ item.title }}
                </a>

                <div class="navbar-item has-dropdown" :class="[{
                    'is-active': showDropDown,
                }]">
                    <a class="navbar-link has-text-white" :class="[
                        {
                            'has-background-white': showDropDown,
                            'has-text-dark': showDropDown,
                        }
                    ]" @click="onDropDown">
                        Больше
                    </a>

                    <div class="navbar-dropdown is-right" :ref="dropDownRef">
                        <div class="columns px-2 py-2">
                            <div class="column is-half drop-down-half"><a v-for="item in subMenuColumn.left"
                                    class="navbar-item has-text-black " :key="item.link" :href="item.link">
                                    {{ item.title }}
                                </a></div>
                            <div class="column is-half drop-down-half"><a v-for="item in subMenuColumn.right"
                                    class="navbar-item has-text-black px1" :key="item.link" :href="item.link">
                                    {{ item.title }}
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="icon">
                    <Icon name="ic:baseline-account-box" class="icon-profile" @click="modalOpen"></Icon>
                </div>
                <div class="navbar-item last-item">

                   

                    <div class="icon" @click="onSearchOpen">
                        <Icon class="icon-search" name="mdi:magnify"></Icon>
                    </div>
                </div>
            </div>
        </div>

        <SearchInputVue @closeSearch="onShowSearch" v-if="!isMobile && showSearch"></SearchInputVue>
    </nav>
</template>

<style>
.logo-main {

    object-fit: cover;
    width: 64px;
    height: 100%;

    opacity: 0.3;
    border: 4px solid rgba(164, 2, 2, 0.126);
    align-self: flex-start;
    cursor: pointer;
    transition: all 0.3s ease;
}

.logo:hover {
    opacity: 1;
}
.last-item {
    display: flex;
    align-items: center;
    justify-content: flex-end
}

.navbar-end {
    display: flex;
    align-items: center;
}
.navbar-top-left-mobile {
    display: flex;
    gap: 12px;
}
.navbar-top-left {
    display: none;
}

.icon {
    cursor: pointer;
}

.navbar-top-left>.icon.icon-close {
    color: red;
    font-weight: 700;
    cursor: pointer;
}

.navbar {
    position: relative;
    border-bottom: 1px solid rgba(245, 245, 245, 0.175);
    z-index: 6000;
    padding: 0 4px;
}




.navbar.navbar-relative {
    position: relative;
    backdrop-filter: blur(8px);
}

.navbar-dropdown {
    border: none;
    border-radius: 0 0 0 0;
    box-shadow: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.navbar-item .has-text-white:hover,
.has-text-white {
    border: 2px solid transparent;
    margin-bottom: -1px;
}

.has-text-white:hover,
.navbar-item .has-text-white:not(.navbar-item .has-text-white:hover,
    .has-text-white:last-child):hover {
    background-color: rgba(255, 255, 255, 0);
    border-bottom: 2px solid red;
}


.has-text-white.navbar-link:hover:not(.is-arrowless)::after {

    border-color: red;
}

.navbar-link::after {
    border: none;
}

.navbar-link:not(.is-arrowless)::after,
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: lightgrey;
}


div.icon {
    box-sizing: content-box;
    border-radius: 50%;
    padding: 8px;
    transition: all 0.3s ease;
    border: 1px solid rgba(177, 177, 177, 0);
}

div.icon:hover {
    backdrop-filter: blur(4);
    cursor: pointer;
    background-color: rgba(188, 188, 188, 0.3);
    padding: 8px;
}

div.icon:hover>.icon-search {}

.navbar-button>.icon {
    display: none;
    color: #eee;
}

.icon-profile {
    font-size: 22px;
    color: #eeeeee86;
    padding: 12px 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
}

.icon-profile:hover {
    color: rgb(255, 255, 255);
    background-color: #eee;
}


@media screen and (max-width: 700px) {
    .navbar {
        padding: 0 8px;
        box-shadow: none;
        background-color: black;
    }

    .navbar-top-brand,
    .navbar-top-left {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .navbar-top-left>.icon:hover {
        color: #363636;
    }

    .navbar-button>.icon {
        display: flex;
        color: #eee;
    }

    .desktop-search {
        display: none;
        background-color: red;
    }

    .navbar-has-background-white {
        background-color: rgba(135, 135, 135, 0.074);
        backdrop-filter: blur(8px);
        box-shadow: 0px 4px 4px rgba(65, 65, 65, 0.2);
    }


    .icon.icon-close {
        color: red;
    }


}
</style>