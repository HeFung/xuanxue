
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { h } from 'vue'
import './all.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import ShareButton from './ShareButton.vue'
import notice from './notice.vue'
import googleAnalytics from './googleAnalytics'
import confetti from './confetti.vue' //五彩纸屑
import {  Aside,  Links, Notice, Underline, umamiAnalytics } from '@theojs/lumen'
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
}
