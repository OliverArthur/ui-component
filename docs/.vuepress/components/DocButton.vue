<template>
  <div class="doc-example">
    <div v-if="isTheme">
      <ui-button variant="primary">Primary</ui-button>
      <ui-button variant="secondary">Secondary</ui-button>
      <ui-button variant="disabled">Disabled</ui-button>
      <ui-button variant="plain">Plain</ui-button>
      <ui-button variant="icon">Icon</ui-button>
    </div>
    <div v-if="isSize">
      <ui-button size="large">Large</ui-button>
      <ui-button size="normal">Normal</ui-button>
      <ui-button size="small">Small</ui-button>
    </div>
    <div v-if="isLink">
      <ui-button tag="a" variant="primary">Primary Link</ui-button>
      <ui-button tag="a" variant="secondary">Secondary Link</ui-button>
      <ui-button tag="a" variant="icon">Icon Link</ui-button>
    </div>
    <div v-if="hasEvent">
      <ui-button @click="notify" variant="primary">Open modal</ui-button>
      <ui-button variant="secondary">Danger zone</ui-button>
      <ui-button variant="icon">Follow Link</ui-button>
    </div>
  </div>
</template>

<script>
import props from "../mixins/props";
import UiButton from "../../../src/components/button/Button";

export default {
  name: "DocButton",
  mixins: [props],
  components: {
    UiButton
  },
  methods: {
    notify() {
      alert("Hello Wolrd!!!!!!!");
    }
  }
};
</script>

<style lang="scss">
// @import "~zava-ui-toolkit/assets/stylesheets/zava-ui.scss";

.doc-example {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}
</style>

