<template>
  <main class="app-container">
    <TheNavigation />
    <div class="content-container"><slot /></div>
    <footer>
      <p>Designed and brought to life by <em>Gabriel Pretel</em>.</p>
    </footer>
  </main>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Anderson Grotesk';
  }

  main {
    min-height: 100dvh;
  }

  h1 {
    font-family: 'Editors Note';
    font-size: 2rem;
    font-weight: 600;
  }

  li {
    list-style-type: none;
  }

  .app-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    width: 100%;
    height: 100%;
    justify-items: center;
    background: linear-gradient(0deg, #ffedde 0%, transparent 25%),
      linear-gradient(to bottom, #ffedde 0%, transparent 25%);
  }

  .content-container {
    padding: 20px;
    max-width: 600px;
    justify-self: center;
    width: 100%;
  }

  footer {
    display: flex;
    justify-content: center;
    background-color: #fcf6f1;
    box-shadow:
      rgba(12, 20, 66, 0.03) 0px 1px 3px,
      rgba(12, 20, 66, 0.04) 0px 8px 16px,
      rgba(12, 20, 66, 0.04) 0px 16px 40px;
    padding: 18px;
    border-radius: 40px;
    width: 600px;
    margin: 20px;
  }
</style>
