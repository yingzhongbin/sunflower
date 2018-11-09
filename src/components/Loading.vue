<template>
  <div id="base-container">
    <div class='base'>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
      <div class='cube'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  created () {
    console.log('loading is created')
  },
  mounted () {
    console.log('loading is mounted')
  }
}
</script>

<style scoped lang="scss">
  #base-container{
    width: 100vw;
    height:100vh;
    background-color: grey;
  }
  .base {
    height: 9em;
    left: 50%;
    margin: -7.5em;
    padding: 3em;
    position: absolute;
    top: 50%;
    width: 9em;
    transform: rotateX(45deg) rotateZ(45deg);
    transform-style: preserve-3d;
  }

  .cube,
  .cube:after,
  .cube:before {
    content: '';
    float: left;
    height: 3em;
    position: absolute;
    width: 3em;
  }

  .cube {
    background-color: #FE6B00;
    position: relative;
    transform: translateZ(3em);
    transform-style: preserve-3d;
    transition: .25s;
    box-shadow: 13em 13em 1.5em rgba(0, 0, 0, 0.1);
    animation: anim 1s infinite;
  }
  .cube:after {
    background-color: #FE8B17;
    transform: rotateX(-90deg) translateY(3em);
    transform-origin: 100% 100%;
  }
  .cube:before {
    background-color: #e16B00;;
    transform: rotateY(90deg) translateX(3em);
    transform-origin: 100% 0;
  }
  .cube:nth-child(1) {
    animation-delay: 0.05s;
  }
  .cube:nth-child(2) {
    animation-delay: 0.1s;
  }
  .cube:nth-child(3) {
    animation-delay: 0.15s;
  }
  .cube:nth-child(4) {
    animation-delay: 0.2s;
  }
  .cube:nth-child(5) {
    animation-delay: 0.25s;
  }
  .cube:nth-child(6) {
    animation-delay: 0.3s;
  }
  .cube:nth-child(7) {
    animation-delay: 0.35s;
  }
  .cube:nth-child(8) {
    animation-delay: 0.4s;
  }
  .cube:nth-child(9) {
    animation-delay: 0.45s;
  }

  @keyframes anim {
    50% {
      transform: translateZ(0.5em);
    }
  }
  /*div{*/
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*z-index: 9999;*/
    /*background-color: white;*/
    /*> img{*/
      /*position: absolute;*/
      /*top:calc(50% - 300px);*/
      /*left: calc(50% - 400px);*/
    /*}*/
  /*}*/
</style>
