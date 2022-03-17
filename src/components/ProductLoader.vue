<template>
  <div class="loader">
    <div class="lds-ripple"><div></div><div></div></div>
  </div>
</template>

<script>
export default {
  name: 'ProductLoader'
}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      position: absolute;
      border: 4px solid #3F3F3F;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
}
</style>
