<script setup>
const dataAll = [{
    href: '/buznes-ekonomuka', theme: 'Бизнес и экономика', content: [
        {
            link: "/buznes-ekonomuka/115472-otkrytie-torgov-na-mezhbanke-27-yanvarya-2022.html",
            title: "Открытие торгов на межбанке",
        },
        {
            link: "/buznes-ekonomuka/115470-27-yanvarya-2022-ceny-na-neft-padayut-posle-vesomogo-rosta-nakanune.html",
            title: "27 января 2022: цены на нефть падают после весомого роста накануне",
        },
        {
            link: "/buznes-ekonomuka/115468-kursy-valyut-nbu-27-yanvarya-2022.html",
            title: "Курсы валют НБУ",
        },
        {
            link: "/buznes-ekonomuka/115460-26-yanvarya-2022-neft-vnov-opustilas-nizhe-30-doll.html",
            title: "Нефть вновь опустилась ниже 30 долл",
        },
        {
            link: "/buznes-ekonomuka/115466-stavki-bankovskix-metallov-nbu-27-yanvarya-2022.html",
            title: "Ставки банковских металлов НБУ"
        }
    ]
}, {
    href: "/index.php", theme: 'Главные новости', content: [

        {
            link: "/main/115488-goroskop-na-segodnya-3-marta-2023.html",
            title: 'Гороскоп на сегодня'
        },
        {
            link: "/main/115486-kakoj-segodnya-prazdnik-3-marta-2023-vsemirnyj-den-pisatelya.html",
            title: 'Какой сегодня праздник: Всемирный день писателя'
        },
        {
            link: "/main/115484-verbnoe-voskresene-v-2023-godu-kakogo-chisla-tradicii-i-primety.html",
            title: 'Вербное воскресенье в 2024 году: какого числа, традиции и приметы'
        },
        {
            link: "/main/114998-god-ognennoj-obezyany-kak-vstrechat.html",
            title: 'Год Огненной Обезьяны: как встречать'
        },
        {
            link: "/main/114928-viktor-yanukovich-nameren-vernutsya-v-politiku.html",
            title: 'Виктор Янукович намерен вернуться в политику'
        }]
},
{
    href: "/mirovie-novoti", theme: 'Мировые новости', content: [
        {
            link: "/mirovie-novoti/115390-cherez-dva-mesyaca-vozmozhen-krax-shengenskoj-zony-tusk.html",
            title: 'Через два месяца возможен крах Шенгенской зоны, - Туск'
        },
        {
            link: "/mirovie-novoti/115370-vzryv-vozle-shkoly-v-turcii-odin-chelovek-pogib-troe-raneny.html",
            title: 'Взрыв возле школы в Турции: один человек погиб, трое ранены'
        },
        {
            link: "/mirovie-novoti/115331-v-moskve-najden-mertvym-avtor-knigi-o-kgb-i-prezidentstve-vladimira-putina.html",
            title: 'В Москве найден мертвым автор книги о КГБ и президентстве Владимира Путин'
        },
        {
            link: "/mirovie-novoti/115322-vzryv-v-stambule-delo-ruk-boevika-igil.html",
            title: 'Взрыв в Стамбуле дело рук боевика ИГИЛ'
        },
        {
            link: "/mirovie-novoti/115320-v-stambelu-gorit-otel-s-lyudmi.html",
            title: 'В Стамбуле горит отель с людьми'
        }]
},

{
    href: "/ukraine", theme: 'Украина', content: [

        {
            link: "/ukraine/115450-v-krym-edet-missiya-soveta-evropy-po-pravam-cheloveka.html",
            title: 'ЧВ Крым едет миссия Совета Европы по правам человека'
        },
        {
            link: "/ukraine/115410-karantin-v-kievskix-shkolax-prodlili-do-27-yanvarya.html",
            title: 'Карантин в киевских школах продлили до 27 января'
        },
        {
            link: "/ukraine/115372-v-stolice-zhenshhina-pokusala-policejskix-i-naexala-na-odnogo-iz-nix.html",
            title: 'В столице женщина покусала полицейских и наехала на одного из них'
        },
        {
            link: "/ukraine/115323-sedmaya-volna-mobilizacii-mozhet-nachatsya-v-fevrale.html",
            title: 'Седьмая волна мобилизации может начаться в февраля'
        },
        {
            link: "/ukraine/115310-v-kiev-priletel-gryzlov.html",
            title: 'В Киев прилетел Грызлов'
        }
    ]
}, {
    href: "/sport", theme: 'Спорт', content: [
        {
            link: "/sport/115120-blatter-i-platini-diskvalificirovany-fifa-na-8-let.html",
            title: 'Блаттер и Платини дисквалифицированы ФИФА на 8 лет'
        },
        {
            link: "/sport/114952-fyuri-ostalsya-bez-chempionskogo-poyasa-iz-za-revansha-s-klichko.html",
            title: 'Фьюри остался без чемпионского пояса из-за реванша с Кличко'
        },
        {
            link: "/main/114626-ukraina-vpervye-v-istorii-vyxodit-na-evro-iz-stadii-plej-off.html",
            title: 'Украина впервые в истории выходит на Евро из стадии плей-офф'
        },
        {
            link: "/main/113896-vladimir-klichko-mozhet-prinyat-uchastie-v-olimpiade-2022.html",
            title: 'Владимир Кличко может принять участие в Олимпиаде-2026'
        },
        {
            link: "/main/113844-ukraina-proigrala-ispanii-01.html",
            title: 'Украина проиграла Испании 0:1'
        }]
},

{
    href: "/srochno", theme: 'Калейдоскоп новостей', content: [
        {
            link: "/main/115488-goroskop-na-segodnya-3-marta-2023.html",
            title: 'Гороскоп на сегодня'
        },
        {
            link: "/main/115486-kakoj-segodnya-prazdnik-3-marta-2023-vsemirnyj-den-pisatelya.html",
            title: 'Какой сегодня праздник: Всемирный день писателя'
        },
        {
            link: "/main/115484-verbnoe-voskresene-v-2023-godu-kakogo-chisla-tradicii-i-primety.html",
            title: 'Вербное воскресенье: какого числа, традиции и приметы'
        },
        {
            link: "/srochno/115282-top-10-luchshix-knig-2015-goda.html",
            title: 'Топ-10 лучших книг 2024 года'
        },
        {
            link: "/srochno/115276-otkryty-eshhe-4-yelementa-iz-tablicy-mendeleeva.html",
            title: 'Открыты еще 4 элемента из таблицы Менделеева'
        }
    ]
}];
</script>

<template>
    <div class="container is-widescreen themes">
        <div class="section is-wide content-middle" v-for="theme in dataAll" :key="theme.href">
            <h2 class="title">
                <a :href="theme.href">
                    {{ theme.theme }}
                </a>
            </h2>
            <section class="content-middle items">
                <article class="card article-card" v-for="article in theme.content" :key="article.link">
                    <div class="img-holder"></div>
                    <h2 class="subtitle is-5"><a :href="article.link">{{ article.title }}</a></h2>
                </article>
            </section>
        </div>
    </div>
</template>

<style> 

.themes {
    padding-top: 24px;
    background-color:white;
}
.img-holder {
    width: 100%;
    min-height: 150px;
    background-color: var(--my-red);
}
.content-middle.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 48px;
   
}
.content-middle {
    padding: 8px 12px;
    background-color: white;
}
.article-card {
    flex-basis: 30%;
    box-shadow: none;
    justify-content: stretch;
}

.article-card .subtitle {
    font-size: 16px;
    font-weight: bold;
    padding: 12px 8px;
}
</style>
