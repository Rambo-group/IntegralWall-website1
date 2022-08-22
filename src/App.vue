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
  background-color: #F8F8F8;
}

.containers {
  width: 1200px;
  padding-right: var(--bs-gutter-x, .75rem);
  padding-left: var(--bs-gutter-x, .75rem);
  margin-right: auto;
  margin-left: auto;
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
