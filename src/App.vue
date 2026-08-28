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
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">What happened to the old Krypt Pad?</a></li>
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

const menuVisible = ref(false);
const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
};
</script>

<style scoped></style>
