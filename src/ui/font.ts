import { Roboto ,Fredoka,Noto_Sans,Ma_Shan_Zheng,ZCOOL_KuaiLe,Long_Cang} from 'next/font/google'
const inter = Roboto({
  weight:'700',
  subsets: ['latin'],
  display: 'swap',
})
const fredoka = Fredoka({
  weight:'700',
  subsets:['latin'],
  display:"swap",
})
const noto = Noto_Sans({
  weight:'600',
  subsets:['greek-ext'],
  display:"swap",
})
const ma_shan_zheng = Ma_Shan_Zheng({
  weight:'400',
  subsets:['latin'],
  display:"swap",
})
const zcool = ZCOOL_KuaiLe({
  weight:'400',
  subsets:['latin'],
  display:"swap",
})
const cao = Long_Cang({
  weight:'400',
  subsets:['latin'],
  display:"swap",
})

export  {inter,fredoka,noto,ma_shan_zheng,zcool,cao}