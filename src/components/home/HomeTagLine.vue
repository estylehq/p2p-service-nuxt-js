<template>
  <div class="bg">
    <div class="container">
      <p>Tag line is <span>HERE.</span></p>
    </div>
  </div>
</template>

<style scoped>
div.bg {
  z-index: -1;
  background-image: linear-gradient(#89ccff, #1f93ff);
  height: 786px;
  width: 100%;
  top: 0;
  position: fixed;
}

div.container {
  position: relative;
  height: 100%;
  color: #ffffff;
  font-size: 2rem;
}

p {
  margin: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}

span {
  padding: 8px 16px;
  border-radius: 8px;
  margin-left: 8px;
  border: 2px solid #ffffff;
}

@media (min-width: 1201px) {
  div.bg {
    height: 768px;
  }
}

@media (max-width: 991px) {
  div.bg {
    height: 512px;
  }
}

@media (max-width: 768px) {
  div.bg {
    height: 384px;
  }

  div.container {
    font-size: 1.4rem;
  }

  p {
    top: 50%;
    width: 94%;
  }

  span {
    border: unset;
    border-radius: 0;
    padding: 4px;
    border-bottom: 2px solid #ffffff;
  }
}

@media (max-width: 509px) {
  div.container {
    font-size: 1.2rem;
  }

  div.bg {
    height: 480px;
  }
}
</style>
