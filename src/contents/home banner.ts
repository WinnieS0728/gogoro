import banner1_img from '@img/banner/1.jpg'
import banner3_img from '@img/banner/3.jpeg'
import banner4_img from '@img/banner/4.jpeg'
import banner5_img from '@img/banner/5.jpeg'
import banner6_img from '@img/banner/6.jpeg'

const baseUrl = "https://www.gogoro.com"

export type homeBanner_content = {
  sectionId: number,
  title: {
    label: string,
    color: 'white' | 'black'
  },
  desc: string,
  link: {
    label: string,
    href: string,
    color: "white" | "blue" | "black"
  },
  bgImg: string
}

export const homepage_content: homeBanner_content[] = [
  {
    sectionId: 1,
    title: {
      label: '全新 Gogoro JEGO',
      color: "white"
    },
    desc: '',
    link: {
      label: "了解更多",
      href: `${baseUrl}/tw/smartscooter/jego/`,
      color: "white"
    },
    bgImg: banner1_img
  }, {
    sectionId: 3,
    title: {
      label: 'Apple 錢包機車鑰匙',
      color: "white"
    },
    desc: 'iPhone 和 Apple Watch 就是你的機車鑰匙',
    link: {
      label: "了解更多",
      href: `https://www.gogoro.com/tw/event/gogoro-apple-2023/?modal=dsk`,
      color: 'white'
    },
    bgImg: banner3_img
  }, {
    sectionId: 4,
    title: {
      label: 'Gogoro Rewards',
      color: "white"
    },
    desc: '這樣集，免費騎！最高享資費 15% 回饋',
    link: {
      label: "了解更多",
      href: `https://www.gogoro.com/tw/rewards/`,
      color: "white"
    },
    bgImg: banner4_img
  }, {
    sectionId: 5,
    title: {
      label: '13,442+ GoStation® 持續增建中*',
      color: "black"
    },
    desc: '超過 2,575 個電池交換站點*，六都內騎車 3 分鐘一站*',
    link: {
      label: "查看 GoStation 地圖",
      href: `https://www.gogoro.com/tw/rewards/`,
      color: 'blue'
    },
    bgImg: banner5_img
  }, {
    sectionId: 6,
    title: {
      label: '即刻刷題',
      color: "black"
    },
    desc: '免費筆試練習，再享購車多項優惠',
    link: {
      label: "查看 GoStation 地圖",
      href: `https://www.gogoro.com/tw/event/license-practice/`,
      color: 'blue'
    },
    bgImg: banner6_img
  },
]
