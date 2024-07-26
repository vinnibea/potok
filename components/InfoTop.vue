<script setup>
const emit = defineEmits(['closeModal'])
defineProps({
    mobile: {
        type: Boolean,
        default: false,
    }
})
</script>
<template>
    <span class="modal-footer-lang info" :class="[{
        'mobile': mobile
    }]">
        <span class="info-group">
            <span class="info-dual">
                <span>
                    ВС
                </span>
                <span>
                    21.07
                </span>
            </span>
        </span>
        <span class="info-group">
            <span class="info-dual">
                <span>
                    <Icon name="ri:money-dollar-circle-fill" class="icon" />
                    <span>41.20</span>
                </span>
                <span>
                    <Icon name="ri:money-euro-circle-fill" class="icon" />
                    <span>44.81</span>
                </span>
            </span>
        </span>
        <span class="info-group weather">
            <Icon name="ri:sun-line" class="icon" />
            +25
            <Icon name="ri:celsius-line" class="icon" />
        </span>

        <span class="close" v-if="mobile" @click="emit('closeModal')">
            <Icon name="ri:close-large-line" class="icon icon-close" />
        </span>
    </span>
</template>


<style>
.close {
    float: right;
    display: none;
    padding: 20px;
}
.modal-footer-lang.info {
    gap: 12px;
    padding: 2px 4px;
}

.modal-footer-lang.info.mobile {
 background-color: white;
 color: black;
 justify-content: space-evenly;
 gap: 24px;
}

.info-dual {
    display: flex;
    flex-direction: row;
    align-items: center;
    pointer-events: none;
    gap: 12px;
}

.info-dual>span {
    display: flex;
    align-items: center;
    pointer-events: none;
    opacity: 1;
}

.info-group *,
.info-group~* {
    color: white;
}

.mobile .info-group *,
.mobile .info-group~* {
    color: rgb(29, 29, 29);
}

.info-group {
    gap: 8px;
    display: flex;
    align-items: center;
}

.info-group.weather {
    opacity: 0.6;
    transition: all 0.3s ease;
}

.info-group.weather:hover {
    opacity: 1;
}

@media screen and (max-width: 700px) {
    .close {
        float: right;
        display: block;
    }
    .info-dual {
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: none;
    }

    .info-dual>span {
        display: flex;
        align-items: center;
        pointer-events: none;
    }

    .info-dual * {
        font-weight: 600;
        font-size: 12px;
        display: flex;
        justify-content: center;
        pointer-events: none;
    }

    .info-dual .icon {
        transform: scale(0.8);
    }

    .info>span.icon {
        font-size: 12px;
    }

    .info-group {
        font-weight: 700;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
    }


    .info-group:hover {
        opacity: 0.8;
    }

    .info>* {
        color: white;
        cursor: pointer;
    }

    .modal-footer-lang.info {
        gap: 4px;
        padding: 4px 2px;
    }

    .info-dual {
        gap: 4px;
    }
}
</style>