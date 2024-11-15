<template>
    <header>
        <TheNavigation />
    </header>
    <main class="app-container">
        <slot />
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');

html {
    font-family: "Geist Mono", monospace;
}

body {
    display: flex;
    flex: 1;
    justify-content: center;
}

h1 {
    text-align: center;
}

.app-container {
    width: 100%;
    border: 1px solid black;
}
</style>