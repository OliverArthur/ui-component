<template>
  <component
    :is="tag"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
    :type="type"
    :href="href"
    :class="[skingTheme, btnSize]"
    :disabled="variant === 'disabled'"
    class="Button">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value) => {
        return ['button', 'submit', 'reset'].indexOf(value) !== -1
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'disabled',
          'plain',
          'icon'
        ].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => {
        return [
          'normal',
          'medium',
          'large'
        ]
      }

    },
    tag: {
      type: String,
      default: 'button',
      validator: (value) => {
        return ['button', 'a']
      }
    },
    href: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    skingTheme () {
      if (this.variant && this.variant !== '') {
        return `Button--${this.variant}`
      }
    },

    btnSize () {
      if (this.size && this.size !== '') {
        return `Button--${this.size}`
      }
    }
  },
  methods: {
    /**
     * Triggered when the button is clicked.
     *
     * @event click
     */
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
