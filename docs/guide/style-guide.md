---
title: Style guide
---

::: danger
Note: This page is currently under development.
:::

# Style guide

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur. Proin vestibulum quam ut felis maximus lacinia. Vestibulum non cursus massa. Pellentesque quis leo at tellus aliquet porta. Quisque volutpat sollicitudin tincidunt. In gravida ante nisl, at pretium nibh scelerisque eget. Phasellus eleifend pretium imperdiet. [Visit the Vuejs Style Guide for information](https://vuejs.org/v2/style-guide/)

### Naming components
Component names should always be multi-word, except for root App components.
This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word.

::: danger BAD
```javascript
Vue.component('input', {
    //
})
```

```javascript
export default {
  name: 'Input',
  // ...
}
```
:::

::: tip GOOD
```javascript
Vue.component('AppInput', {
    //
})
```

```javascript
export default {
  name: 'AppInput',
  // ...
}
```
:::



### Structuring Vue app

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

```
.
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── babel.config.js
├── jest.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── vue.config.js
├── node_modules/
├── public/
│   ├─ favicon.ico
│   ├─ index.html
│   ├─ img/
│   ├─ ├─ background.png
│   ├─ └─ icons/
│   ├─ manifest.json
│   └─ robots.txt
├── src/
│   ├─ assets/
│   ├─ ├─ background.png
│   ├─ └─ logo.png
│   ├─ components/
│   ├─ ├─ UiButton.vue
│   ├─ ├─ UiList.vue
│   ├─ └─ UiCard.vue
│   ├─ services/
│   ├─ └─ services.js
│   ├─ views/
│   ├─ ├─ ViewHome.vue
│   ├─ ├─ ViewAbout.vue
│   ├─ └─ ViewContact.vue
│   ├─ App.vue
│   ├─ main.js
│   ├─ registerServiceWorker.js
│   ├─ router.js
│   └─ store.js
├── tests/
│   ├─ unit/
│   ├─ ├─ .eslintrc.js
│   ├─ └─ UiBottom.spec.js
│   ├─ e2e/
│   ├─ ├─ specs/
│   ├─ ├─ └─ test.js
└─  └─ custom-assertions/
       └─ UiBottom.js
```