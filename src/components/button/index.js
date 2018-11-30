import UiButton from './Button'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, UiButton)
  }
}

use(Plugin)

export default Plugin

export {
  UiButton
}
