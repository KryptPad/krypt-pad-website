<template>
    <div id="main">
        <header>
            <button @click="toggleMenu">
                <span class="material-symbols-outlined">menu</span>
            </button>
            <img src="@/assets/safe.svg" alt="Krypt Pad Logo" class="mr-3" style="height: 4rem;">
            <h1>Krypt Pad</h1>
        </header>
        <div id="main-wrapper">
            <div id="menu" :class="{ visible: menuVisible }">
                <ul>
                    <li><a role="button" @click="goHome()">Home</a></li>
                    <li><a role="button" @click="goDownload()">Download</a></li>
                    <li><a role="button" @click="goPrivacy()">Privacy</a></li>
                    <li><a role="button" @click="goOldKryptPad()">What happened to the old Krypt Pad?</a></li>
                </ul>
            </div>
            <div id="content">
                <router-view></router-view>
                Copyright © {{ new Date().getFullYear() }} Krypt Pad
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const menuVisible = ref(false);
const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
};

const goHome = () => {
    menuVisible.value = false;
    // Use router to navigate to home page
    router.push({ name: 'home' });
};

const goDownload = () => {
    menuVisible.value = false;
    // Use router to navigate to download page
    router.push({ name: 'download' });
};

const goPrivacy = () => {
    menuVisible.value = false;
    // Use router to navigate to privacy page
    router.push({ name: 'privacy' });
};

const goOldKryptPad = () => {
    menuVisible.value = false;
    // Use router to navigate to old Krypt Pad page
    router.push({ name: 'old-krypt-pad' });
};
</script>

<style scoped></style>
