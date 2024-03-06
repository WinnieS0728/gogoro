import banner1_img from '@img/banner/1.jpg'
import banner3_img from '@img/banner/3.jpeg'

const baseUrl = "https://www.gogoro.com"

export type homeBanner_content = {
  sectionId: number,
  title: string,
  desc: string,
  link: {
    label: string,
    href: string
  },
  bgImg: string
}

export const homepage_content: homeBanner_content[] = [
  {
    sectionId: 1,
    title: '全新 Gogoro JEGO',
    desc: '',
    link: {
      label: "了解更多",
      href: `${baseUrl}/tw/smartscooter/jego/`
    },
    bgImg: banner1_img
  }, {
    sectionId: 3,
    title: 'Apple 錢包機車鑰匙',
    desc: 'iPhone 和 Apple Watch 就是你的機車鑰匙',
    link: {
      label: "了解更多",
      href: `https://www.gogoro.com/tw/event/gogoro-apple-2023/?modal=dsk`
    },
    bgImg: banner3_img
  }, {
    sectionId: 4,
    title: 'Gogoro Rewards',
    desc: '這樣集，免費騎！最高享資費 15% 回饋',
    link: {
      label: "了解更多",
      href: `https://www.gogoro.com/tw/rewards/`
    },
    bgImg: banner3_img
  }, {
    sectionId: 5,
    title: '13,442+ GoStation® 持續增建中*',
    desc: '超過 2,575 個電池交換站點*，六都內騎車 3 分鐘一站*',
    link: {
      label: "查看 GoStation 地圖",
      href: `https://www.gogoro.com/tw/rewards/`
    },
    bgImg: banner3_img
  }, {
    sectionId: 6,
    title: '即刻刷題',
    desc: '免費筆試練習，再享購車多項優惠',
    link: {
      label: "查看 GoStation 地圖",
      href: `https://www.gogoro.com/tw/event/license-practice/`
    },
    bgImg: banner3_img
  },
]
