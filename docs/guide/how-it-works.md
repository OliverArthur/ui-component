---
title: How It Works
---

::: danger
Note: This page is currently under development.
:::

# How It Works

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur. Proin vestibulum quam ut felis maximus lacinia. Vestibulum non cursus massa. Pellentesque quis leo at tellus aliquet porta. Quisque volutpat sollicitudin tincidunt. In gravida ante nisl, at pretium nibh scelerisque eget. Phasellus eleifend pretium imperdiet.

::: warning
For any installation and usage method, you need Vue.js version 2.5+.
:::


### Installing Locally

Ui Components can be installed locally using npm. It is available as a single all-in-one package:

```bash
$ npm install ui-component --save
```

### Full bundle (recommended)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

```javascript
import Vue from 'vue'
import UiComponent from 'ui-component'

Vue.use(UiComponent)
```

::: danger
Note: If you only need a couple of ui-component components, might be a good idea to include individuals.

Bear in mind that every individual component has everything they need to work by themselves — including too many components individually will INCREASE your project's build size, adding the full bundle is recomended in that case.

In general, don't go over 3 components here. If you want more than that, add the full bundle.
:::

### Individual components as Vue plugins

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

```javascript
import Vue from 'vue'
import UiButton from 'ui-component/dist/components/button'

Vue.use(UiButton)
```

### As individual component

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

```html
<template>
    <ui-button @click="handleClick">Click Me!</ui-button>
</template>

<script>
import { UiButton } from 'ui-component/dist/components/button'

export default {
    components: {
        UiButton
    },
    methods: {
        handleClick() {
            alert('You just clicked me!')
        }
    }
}
</script>
```