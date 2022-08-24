<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

img {
  display: block;
}
ul{
  margin: 0 !important;
  padding: 0 !important;
}
ul li {
  list-style: none;
}

a,
button {
  cursor: pointer;
}

a {
  text-decoration: none;
  background: transparent;
}

a:active,
a:hover {
  outline: 0;
}

#app {
  min-width: 1200px;
  min-height: 100%;
  font-family: PingFang SC;
  background-color: #F8F8F8;
}

.containers {
  width: 1200px;
  padding-right: var(--bs-gutter-x, .75rem);
  padding-left: var(--bs-gutter-x, .75rem);
  margin-right: auto;
  margin-left: auto;
}

@keyframes bottomShow {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes leftShow {
  0% {
    transform: translateX(-400px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes rightShow {
  0% {
    transform: translateX(400px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.multi-ellipsis--l2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.multi-ellipsis--l3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
