---
title: Button
---

::: danger
Note: This page is currently under development.
:::

# Button

The `ui-button` is a component for triggering various actions. In Shards, they're very flxible, support multiple sizes, states and many more.

### Button Themes

Using the `variant` prop you can easily change the appearance of your button using one the main theme colors: `primary (default)`, `secondary`, `disabled`, `plain`, `icon`.

<doc-button is-theme></doc-button>

```html
<ui-button variant="primary"></ui-button>
<ui-button variant="secondary"></ui-button>
<ui-button variant="disabled"></ui-button>
<ui-button variant="plain"></ui-button>
<ui-button variant="icon"></ui-button>
```

### Button Sizes

Buttons come in three size variations: `large`, `normal (default)` and `small`. You can control the size of your buttons using the size prop.

<doc-button is-size></doc-button>

```html
<ui-button size="large"></ui-button>
<ui-button size="normal"></ui-button>
<ui-button size="small"></ui-button>
```

### Button as link

With the `ui-button` adding the `tag="a"` you can have a hyperlink, which is used to link from one page to another. The most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination. By default, links will appear as follows in all browsers: An unvisited link is underlined and blue

<doc-button is-link></doc-button>

```html
<ui-button tag="a" variant="primary"></ui-button>
<ui-button tag="a" variant="secondary"></ui-button>
<ui-button tag="a" variant="plain"></ui-button>
<ui-button tag="a" variant="primary"></ui-button>
```

### Button handle events

With the `handleClick` lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

<doc-button has-event></doc-button>

```html
<ui-button @handleClick="notify" variant="primary">Open modal</ui-button>
<ui-button variant="secondary">Danger zone</ui-button>
<ui-button variant="icon">Follow Link</ui-button>
```

### Props

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

| Prop                  | Description                                         | Type       | Default      | Required   |
| --------------------- | ----------------------------------------------------| :--------: | :----------: | :--------: |
| `variant`             | The button skin                                     | `String`   | `primary`    | `false`    |
| `size`                | The button size eg: `large`, `normal` or `small`    |` String`   | `normal`     | `false`    |
| `type`                | The button type eg: `button`, `reset` or `submit`   | `String`   |  none        | `false`    |
| `tag`                 | specify if a `<a>` or `<button>` html tag           | `String`   | `button`     | `false`    |
| `href`                | specify the link for the `<a>` html tag             | `String`   |  none        | `false`    |

### Events

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur.

| Event                 | Description                           |
| --------------------- | ------------------------------------- |
| `@click`              | Triggered when the button is clicked. |