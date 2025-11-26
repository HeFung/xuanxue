import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: { icp: { number: '鄂ICP备2024060426号' }, police: { number: '粤公网安备44200102445449号' }, showIcon: true },
  author: { name: 'hefung', link: 'https://github.com/hefung' },
  group: [
    {
      icon: 'mdi:github',
      title: 'GitHub Source',
      links: [
        { name: 'hefung-bing', link: 'https://github.com/hefung/bing' },
        { name: '玄学宝典', link: 'https://github.com/hefung/xuanxue' },
        { name: 'nav', link: 'https://github.com/hefung/nav/' }
      ]
    },
    {
      icon: 'heroicons:globe-alt-solid',
      title: '优质线路',
      links: [
        { name: 'VIPTV影视', link: 'https://m.viptv.work', rel: 'sponsored noreferrer' },
      ]
    },
    {
      icon: 'heroicons:tv-solid',
      title: '流媒体',
      links: [
      { name: '镜像1', link: 'https://m1.vodtv.cn', rel: 'sponsored noreferrer' },
      { name: '镜像2', link: 'https://m2.vodtv.cn', rel: 'sponsored noreferrer' },
      { name: '镜像3', link: 'https://m3.vodtv.cn', rel: 'sponsored noreferrer' },
      { name: '镜像4', link: 'https://m4.vodtv.cn', rel: 'sponsored noreferrer' },
      { name: '镜像5', link: 'https://m5.vodtv.cn', rel: 'sponsored noreferrer' },
      { name: '镜像6', link: 'https://m6.vodtv.cn', rel: 'sponsored noreferrer' },
      ]
    },
    {
      icon: 'heroicons:link-16-solid',
      title: '相关链接',
      links: [
        { name: 'VODTV', link: 'https://vodtv.cn/' },
        { name: 'VIPTV', link: 'https://viptv.work/' }
      ]
    }
  ]
}
