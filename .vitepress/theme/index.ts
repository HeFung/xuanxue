import { h } from 'vue'
import type { EnhanceAppContext ,Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'

import './styles/all.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import ShareButton from './components/ShareButton.vue'
import notice from './components/notice.vue'
import googleAnalytics from './composables/googleAnalytics'
import confetti from './components/confetti.vue' //五彩纸屑
import {  Aside,  Links, Notice, Underline } from '@theojs/lumen'
import { Aside_Data } from '../data'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(Aside, { Aside_Data }),
      'aside-outline-before': () => h(ShareButton),
      'home-hero-info-before': () => h(Notice),
      'layout-top': () => h(notice),
    })
  },

  enhanceApp: ({ app }: EnhanceAppContext) => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    app.component('confetti' , confetti) // 五彩纸屑
    app.component('Home', Underline)
    app.component('Links', Links)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
} satisfies Theme
