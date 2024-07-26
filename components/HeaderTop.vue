<script setup>
const socialButtons = [{
    alt: 'facebook',
    icon: 'mdi:facebook',
},
{
    alt: 'youtube',
    icon: 'mdi:youtube',
},
{
    alt: 'telegram',
    icon: 'mdi:telegram',
},
]


</script>

<template>
    <div class="header-top is-flex is-justify-content-space-between is-align-items-center">
        <info-top></info-top>
        <div class="header-end is-flex is-justify-content-space-between is-align-items-center">
            <Icon class="icon-social" v-for="icon in socialButtons" :name="icon.icon" :key="icon.alt"
                :alt="icon.alt" />

               
        </div>
    </div>
</template>

<style>
.icon-social {
    cursor: pointer;
    transition: all 0.3s ease;
}
.icon-social:hover {
    color: white;
}
.header-top {
    backdrop-filter: blur(8px);
    background-color: rgba(18, 18, 18, 0.257);
    padding: 0px 8px;
}
@media screen and (max-width: 700px){
    div.header-top.is-flex {
        display: none !important;
    }
}
</style>