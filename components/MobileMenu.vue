<script setup>


const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['onClose'])

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
];

const menuItems = [{
    title: "Главная",
    link: "/",
}, {
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

const mobileItems = menuItems.concat(subMenuItems);


const onCloseModal = () => {
    emit('onClose');
}

</script>

<template>
    <div class="modal" :class="{
        'is-active': showModal,
    }">
        <div class="modal-card">
            <info-top @closeModal="onCloseModal" :mobile="true"></info-top>
            <search-input :isMobile="true"></search-input>
            <section class="modal-card-body hero is-fullheight">
                <div class="columns px-2 py-2">
                    <div class="column column-mobile">
                        <a v-for="item in mobileItems" class="navbar-item has-text-black nav-item-mobile"
                            :key="item.link" :href="item.link">
                            {{ item.title }}
                        </a>
                    </div>

                </div>

            </section>

            <footer class="modal-card-foot">
                <span class="modal-footer-lang" >
                    <Icon name="ri:earth-fill" class="icon icon-footer"></Icon>
                    In English
                </span>
                <span class="modal-footer-lang">
                    <Icon name="ri:earth-fill" class="icon icon-footer"></Icon>
                    Українська
                </span>
            </footer>
        </div>
    </div>
</template>

<style>
.modal-footer-lang {
    font-weight: 500;
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 4px;
}
.icon.icon-footer {
    color: rgba(255, 0, 0, 0.502);
    transition: all 0.3s ease;
}

.modal-footer-lang:hover > .icon.icon-footer {
    color: red;
}

.modal-footer-lang:hover {
    color: #333;
}

a.nav-item-mobile:hover {
    text-decoration: underline;
}

.modal-card-head {
    border-radius: 0;
    box-shadow: none;
}

.column-mobile>a {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    padding: 8px 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
}

.modal-card {
    overflow: hidden;
    min-height: 100vh;
    padding-top: 0px;

}

@media screen and(max-width: 700px) {

    .modal,
    .modal-card,
    .modal.is-active {
        display: flex !important;
        border-radius: 0;
        width: 100%;
    }

    .is-active {
        display: flex !important;
    }

    .hero.is-fullheight {
        min-height: 100vh;
    }

    .modal-card-foot {
        border-top: 3px solid grey;
        gap: 8px;
    }
}
</style>