import vue from '@/assets/images/vuejs-logo.png'
import next from '@/assets/images/nextjs.png'
import nextWhite from '@/assets/images/nextjsWhite.webp'
import sql from '@/assets/images/sql.png'
import gitlub from '@/assets/images/gitlab.png'
import reactjs from '@/assets/images/reactjs.png'
import github from '@/assets/images/github.png'
import githubWhite from '@/assets/images/githubWhite.png'
import typescript from '@/assets/images/typescript.png'
import supabase from '@/assets/images/supabase.png'
import angular from '@/assets/images/angular.webp'
import console from '@/assets/images/console.png'
import gbusines from '@/assets/images/gbusiness.png'
import googleAds from '@/assets/images/googleAds.png'
import kwp from '@/assets/images/kwp.png'
import { BiCode, BiLogo500Px } from 'react-icons/bi'
import { MdDesignServices, MdPages } from 'react-icons/md'
import { CgController, CgWebsite } from 'react-icons/cg'
import { LuTrendingDown, LuTrendingUp } from 'react-icons/lu'
import { DiResponsive } from 'react-icons/di'
import { FaLanguage } from 'react-icons/fa'
import { CiShoppingTag } from 'react-icons/ci'
import { PiPaypalLogo } from 'react-icons/pi'
import { Box } from '@chakra-ui/react'
import { MdDoNotTouch } from "react-icons/md";
import { IoBanOutline } from "react-icons/io5";
import workersBenefit from '@/assets/icons/workers.png'
import qualityBenefit from '@/assets/icons/qualityandinteractive.png'
import cheapserviceBenefit from '@/assets/icons/cheapservice.png'
import deadlineattimeBenefit from '@/assets/icons/deadlineattime.png'
export const services = [
    {
      id: 'seo',
      name: 'SEO Xizmatlari',
      title: 'Saytingizni Google’da 1-o‘ringa olib chiqamiz',
      image: 'https://www.transparentpng.com/download/seo-png/seo-free-download-4.png',
      detailImage: 'https://d57439wlqx3vo.cloudfront.net/iblock/bc0/bc0f0fade6094e32d26afe9ee426bf47/a1d39b9944184055866844a5d88fdec3.png',
      description: 'SEO — bu qidiruv tizimlarida saytni yuqori o‘ringa chiqarish uchun amalga oshiriladigan ishlar majmuasidir.',
      benefits: [
        'Organik tashriflar ko‘payadi',
        'Brendingizni oshiradi',
        'Mijozlar soni ko‘payadi',
      ],
      tips: [
        'Doimiy optimizatsiya qilish',
        'Kontentni yangilab turish',
      ],
    },
    {
      id: 'smm',
      name: 'SMM Xizmatlari',
      title: 'Ijtimoiy tarmoqlarda reklama va boshqaruv',
      image: 'https://invedus.com/images/services/smm.png',
      detailImage: 'https://bilgi.uz/upload/resize_cache/iblock/bf6/6we6uqk5h9d9i8aq9addfdw24a7gfhqv/780_470_2/66b6836762c44106a4e28b43b79f564d.png',
      description: 'SMM — ijtimoiy tarmoqlarda brendingizni targ‘ib qilish, reklama kampaniyalari yuritish va auditoriya bilan ishlashdir.',
      benefits: [
        'Brend obro‘sini oshiradi',
        'Maqsadli auditoriyani jalb qiladi',
        'Sotuvlarni oshiradi',
      ],
      tips: [
        'Doimiy ravishda kontent tayyorlash',
        'Tahlil va statistika monitoringi',
      ],
    },
    {
      id: 'website',
      name: 'Sayt yaratish',
      title: 'Biznesingiz uchun zamonaviy va samarali veb-saytlar yaratamiz',
      image: 'https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-web-developers-and-designers-team-build-website-png-image_6045432.png',
      detailImage: 'https://digitalsynopsis.com/wp-content/uploads/2014/03/how-to-create-a-website-feature-image.jpg',
      description: 'WebCraft internet marketing agentligi sizning biznesingiz uchun zamonaviy veb-saytlarni, internet-do‘konlarni yaratadi.',
      benefits: [
        'Professional dizayn',
        'Mobil moslashuvchanlik',
        'Tez yuklanish va xavfsizlik',
      ],
      tips: [
        'Maqsadli dizayn tanlash',
        'SEO ga moslashtirish',
      ],
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      title: 'Google-da hamyonbob narxlarda professional reklama',
      image: 'https://trafficwise.com.au/wp-content/uploads/2021/05/google-ads.png',
      detailImage: 'https://www.marketinginstitut.biz/blog/wp-content/uploads/2021/02/Google-Werbung-Vorteile-thegem-blog-default.jpg',
      description: 'Yangi mijozlar, savdo o‘sishi, ko‘proq foydalanuvchi trafigi uchun Google Ads xizmati.',
      benefits: [
        'Maqsadli reklama',
        'Tez natija',
        'Budjetni nazorat qilish',
      ],
      tips: [
        'Reklama matnini sinab ko‘rish',
        'Kalit so‘zlarni to‘g‘ri tanlash',
      ],
    },
    {
      id: 'branding',
      name: 'Brend yaratish',
      title: 'Mukammal va kreativ brend yaratamiz',
      image: 'https://cdni.iconscout.com/illustration/premium/thumb/brand-marketing-illustration-download-in-svg-png-gif-file-formats--strategy-plan-team-business-pack-illustrations-4618472.png?f=webp',
      detailImage: 'https://ewm.swiss/application/files/6716/5934/4217/Branding_EWM_SA_Digital_Agency_Geneva.jpg',
      description: 'WebCraft Internet marketing agentligi biznesingiz uchun mukammal va kreativ brendlarni taklif etadi.',
      benefits: [
        'Yuqori darajadagi tanib olish',
        'Ishonch hosil qilish',
        'Raqobatchilardan ajralib turish',
      ],
      tips: [
        'Logotip va identifikatsiyani yaratish',
        'Maqsadli auditoriyani aniqlash',
      ],
    },
    {
      id: 'logo',
      name: 'Logotip yasash',
      title: 'Brendingiz uchun professional logotip yaratamiz',
      image: 'https://cdn.logojoy.com/wp-content/uploads/20190423155455/51-600x313.png',
      detailImage: 'https://yesimadesigner.com/wp-content/uploads/2023/10/07-LOGO_DESIGN-1024x683-1.jpg',
      description: 'Logotip brendga kuchli poydevor beradigan qismdir. Biz sizga professional logotip yaratamiz.',
      benefits: [
        'Brendni tanitish',
        'Vizual identifikatsiya',
        'Professional ko‘rinish',
      ],
      tips: [
        'Minimalizmga e’tibor berish',
        'Brend qadriyatlarini aks ettirish',
      ],
    },
    {
      id: 'ecommerce',
      name: 'Online do\'kon yaratish',
      title: 'Muvaffaqiyatli onlayn-do‘kon yaratamiz',
      image: 'https://hostimul.com/uploads/catalog/e-commerce-img.png',
      detailImage: 'https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740',
      description: 'To‘lov tizimidan foydalanish qulayligidan boshlab, integratsiyaga qila oladigan muvaffaqiyatli onlayn-do‘kon yaratamiz.',
      benefits: [
        'Savdo hajmini oshirish',
        'Integratsiya imkoniyatlari',
        'Foydalanuvchi uchun qulay interfeys',
      ],
      tips: [
        'Mobil versiyani yaxshilash',
        'To‘lov tizimlarini osonlashtirish',
      ],
    },
    {
      id: 'crm',
      name: 'CRM tizimini yaratish',
      title: 'Biznes jarayonlaringizni optimallashtiramiz',
      image: 'https://png.pngtree.com/png-vector/20220811/ourmid/pngtree-crm-software-customer-relationship-system-png-image_5840465.png',
      detailImage: 'https://6066958.fs1.hubspotusercontent-na1.net/hubfs/6066958/Imported_Blog_Media/Do%20I%20need%20a%20CRM%20System-1.jpeg    ',
      description: 'Mijozlar bilan biznesni boshqarish va biznes jarayonlaringizni optimallashtirish uchun CRM tizimi yaratamiz.',
      benefits: [
        'Mijozlar bilan samarali aloqa',
        'Jarayonlarni avtomatlashtirish',
        'Hisobot va tahlil qilish',
      ],
      tips: [
        'Tizimni moslashtirish',
        'Ma’lumotlarni muntazam yangilash',
      ],
    },
  ];
  

export const technologys = [
    {
        "id": "1",
        "url": vue,
        "name": "Vue.js"
    },

    {
        "id": "2",
        "url": next,
        "url2": nextWhite,
        "name": "Next.js"
    },
    {
        "id": "3",
        "url": reactjs,
        "name": ''
    },
    {
        "id": "4",
        "url": sql,
        "name": ''
    },
    {
        "id": "5",
        "url": gitlub,
        "name": ''
    },
    {
        "id": "6",
        "url": github,
        "url2": githubWhite,
        "name": 'GitHub'
    },
    {
        "id": "7",
        "url": typescript,
        "name": ''
    },
    {
        "id": "8",
        "url": supabase,
        "name": 'Supabase'
    },
    {
        "id": "9",
        "url": angular,
        "name": 'Angular'
    },
    {
        "id": "10",
        "url": console,
        "name": ''
    },
    {
        "id": "11",
        "url": googleAds,
        "name": ''
    },
    {
        "id": "12",
        "url": kwp,
        "name": ''
    },
    {
        "id": "13",
        "url": gbusines,
        "name": ''
    },
]

export const teamCard = [
    {
        "id": '1',
        "url": 'https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png',
        "nums": '15%',
        "title": 'Mijozimiz biz bilan hamkorlik qilishadi.'
    },
    {
        "id": '2',
        "url": 'https://icon-library.com/images/service-icon-png/service-icon-png-18.jpg',
        "nums": '+188',
        "title": 'Mijozga xizmat ko\'rsatdik.'
    },
    {
        "id": '3',
        "url": 'https://cdn-icons-png.flaticon.com/256/13266/13266779.png',
        "nums": '2025',
        "title": 'Yildan Buyon Barqaror Xizmat Ko\'rsatamiz.'
    },
    {
        "id": '4',
        "url": 'https://static.vecteezy.com/system/resources/previews/024/033/455/non_2x/business-icon-office-suitcase-with-transparent-background-free-png.png',
        "nums": '+20',
        "title": 'dan ortiq internet marketing xizmat turlarini taqdim etamiz.'
    },
]

export const questions = [
    {
        "id": "1",
        "question": "Internet marketing nima uchun kerak ?",
        "answer": "Internet marketing mijozlarga tez va samarali yetib borish, brendni targ'ib qilish va sotuvlarni oshirish uchun kerak. U an'anaviy marketingga qaraganda arzonroq va natijalari oson tahlil qilinadi. Bundan tashqari, maqsadli auditoriyaga yo‘naltirish imkonini beradi.",
        "more": `/savollar-va-javoblar/`
    },
    {
        "id": "2",
        "question": "Biznes saytimizni ommaga qanday targ'ib qilamiz, qanday tanitamiz ?",
        "answer": "Biznes saytingizni ommaga targ‘ib qilish uchun SEO, ijtimoiy tarmoqlar, Google Ads, kontent marketing va influencer reklamalardan foydalaning. Shuningdek, email marketing, aksiyalar va chegirmalar bilan mijozlarni jalb qilishingiz kerak.",
        "more": `/savollar-va-javoblar/`
    },
    {
        "id": "3",
        "question": "SEO optimizatsiya nima va nima uchun kerak ? ",
        "answer": "SEO optimizatsiya – bu veb-saytni qidiruv tizimlarida (Google, Yandex) yuqori o‘ringa chiqish uchun moslashtirish jarayoni. U ko‘proq organik trafik jalb qilish, mijozlarni jalb etish va biznesni rivojlantirish uchun kerak.",
        "more": `/savollar-va-javoblar/`
    },
    {
        "id": "4",
        "question": "Internet reklamaning boshqa reklama turlaridan muhim afzalliklari nimada ? ",
        "answer": "Internet reklamaning asosiy afzalliklari – aniq auditoriyani tanlash, arzonroq narx, natijalarni real vaqtda tahlil qilish va tezkor natija olish imkoniyati. Shuningdek, global va 24/7 ishlash imkoniyati mavjud.",
        "more": `/savollar-va-javoblar/`
    },
    {
        "id": "5",
        "question": "Internet reklama muvaffaqiyatsizlikka uchrashi ham mumkinmi ?",
        "answer": "Ha, internet reklama noto‘g‘ri auditoriya tanlansa, past sifatli kontent ishlatilsa yoki tahlil va optimizatsiya qilinmasa, muvaffaqiyatsizlikka uchrashi mumkin. Ammo WebCraft kompaniyasi tomonidan ishlab chiqilgan internet marketing xizmatlari muvaffaqiyatsizlikka uchramasligiga kafolat beramiz.",
        "more": `/savollar-va-javoblar/`
    },
    {
        "id": "6",
        "question": "Qaysi turdagi bizneslar uchun internet marketing muhimroq ?",
        "answer": "Internet marketing onlayn do‘konlar, xizmat ko‘rsatish sohasi (masalan, kurslar, konsalting), restoranlar, mehmonxonalar, IT-kompaniyalar va startaplar uchun ayniqsa muhim. Umuman olganda, mijozlarini internet orqali topadigan har qanday biznes uchun zarur.",
        "more": `/savollar-va-javoblar/`
    },
]

export const moreInformation = [
    {
        id: "1",
        quizId: "1",
        name: "Internet marketing nima ?",
        information: `
        <p class='text-1'><i>Internet marketing</i> – bu raqamli kanallar orqali mahsulot yoki xizmatlarni targ‘ib qilish va mijozlarni jalb qilish jarayoni.</p>
        
        <h2 class='heading-2'>1. Keng auditoriyaga yetib borish</h2>
        <p>An’anaviy marketing bilan cheklangan auditoriyaga yetib borish mumkin bo‘lsa, internet marketing orqali butun dunyo bo‘ylab mijozlarga xizmat ko‘rsatish mumkin.</p>
        <br/>
        <h2>2. Maqsadli auditoriyaga yo‘naltirish</h2>
        <p>Internet marketing orqali reklamalarni faqat sizning mahsulotingiz yoki xizmatingizga qiziqqan mijozlarga ko‘rsatish mumkin.</p>
        <br/>
        <h2>3. Tejamkorlik va samaradorlik</h2>
        <p>An’anaviy reklama (TV, radio, bannerlar) qimmat bo‘lib, natijalarini o‘lchash qiyin. Internet marketing esa arzonroq.</p>
        <br/>
        <h2>4. Brend imidjini oshirish</h2>
        <p>Internet marketing brendingizni mashhur qilish va mijozlar orasida ishonch hosil qilishga yordam beradi.</p>
        <br/>
        <h2>5. Natijalarni aniq tahlil qilish imkoniyati</h2>
        <p>Google Analytics, Facebook Insights kabi vositalar yordamida reklama natijalarini real vaqtda kuzatishingiz mumkin.</p>
        <br/>
        <h2>6. 24/7 faoliyat yuritish</h2>
        <p>Internet marketing doimiy ishlaydi, ya’ni mijozlar istalgan vaqt sizning mahsulot yoki xizmatlaringiz haqida ma’lumot olishlari mumkin.</p>
        <br/>
        <h2>7. Sotuvlarni oshirish va biznesni rivojlantirish</h2>
        <p>Internet marketingning asosiy maqsadi – mijozlarni jalb qilish va sotuvlarni oshirish.</p>
        <br/>
        <h2>Xulosa</h2>
        <p>Internet marketing har qanday biznes uchun muhim va zamonaviy marketing strategiyalaridan biri hisoblanadi.</p>
        `
    },
    {
        id: "2",
        quizId: "2",
        name: "Internet marketing nima uchun kerak?",
        information: `
        <p class='text-1'><i>Internet marketing</i> mijozlarga tez va samarali yetib borish, brendni targ‘ib qilish va sotuvlarni oshirish uchun kerak.</p>
        
        <h2 class='heading-2 !mb-3'>Afzalliklari</h2>
        <ul class='!list-disc !pl-6 !mb-5'>
            <li>Arzon va natijalarini osongina kuzatish mumkin</li>
            <li>Maqsadli auditoriyaga yo‘naltirish</li>
            <li>Brendni ommalashtirish</li>
        </ul>
        
        <p>Internet marketing har qanday biznes uchun muhim strategiyalardan biridir.</p>
        `
    },
    {
        id: "3",
        quizId: "3",
        name: "Biznes saytimizni ommaga qanday targ'ib qilamiz, qanday tanitamiz?",
        information: `
        <p class='text-1'>Biznes saytingizni ommaga targ‘ib qilish uchun quyidagi usullardan foydalanish mumkin:</p>
        
        <h2 class='heading-2'>Asosiy usullar</h2>
        <br>
        <ul class='!list-disc !pl-6 !mb-5'>
            <li>SEO optimizatsiya</li>
            <li>Ijtimoiy tarmoqlar (Facebook, Instagram, TikTok)</li>
            <li>Google Ads va boshqa pullik reklama</li>
            <li>Kontent marketing (bloglar, maqolalar)</li>
        </ul>
        
        <p>Ushbu usullar orqali biznesingizni tezroq ommalashtirishingiz mumkin.</p>
        `
    },
    {
        id: "4",
        quizId: "4",
        name: "SEO optimizatsiya nima va nima uchun kerak?",
        information: `
        <p class='text-1'><i>SEO optimizatsiya </i>– bu veb-saytni qidiruv tizimlarida yuqori o‘ringa chiqish uchun moslashtirish jarayoni.</p>
        
        <h2 class='heading-2'>SEO ning foydasi</h2>
        <br>
        <ul class='!list-disc !pl-6 !mb-5'>
            <li>Saytni qidiruv tizimlarida yuqori o‘ringa olib chiqadi</li>
            <li>Ko‘proq organik trafik jalb qiladi</li>
            <li>Brend ishonchliligini oshiradi</li>
        </ul>
        
        <p class='text-2'><i>SEO</i> har qanday onlayn biznes uchun zarur strategiyalardan biridir.</p>
        `
    },
    {
        id: "5",
        quizId: "5",
        name: "Internet reklamaning boshqa reklama turlaridan muhim afzalliklari nimada?",
        information: `
        <p class='text-1'><i>Internet reklama</i>ning asosiy afzalliklari quyidagilardan iborat:</p>
        
        <h2 class='heading-2'>Afzalliklar</h2>
        <br>
        <ul class='!list-disc !pl-6 !mb-5'>
            <li>Aniq auditoriyani tanlash</li>
            <li>Reklama natijalarini real vaqtda kuzatish</li>
            <li>Arzonroq va samaraliroq marketing imkoniyati</li>
        </ul>
        
        <p class='text-2'><i>Internet reklama</i> boshqa reklama turlariga nisbatan ancha samarali va zamonaviydir.</p>
        `
    },
    {
        id: "6",
        quizId: "6",
        name: "Qaysi turdagi bizneslar uchun internet marketing muhimroq?",
        information: `
        <p class='text-1'>Internet marketing quyidagi biznes turlari uchun ayniqsa muhim:</p>
        
        <h2 class='heading-2'>Muhim bo‘lgan sohalar</h2>
        <br>
        <ul class='!list-disc !pl-6 !mb-5'>
            <li>Onlayn do‘konlar</li>
            <li>IT-kompaniyalar va startaplar</li>
            <li>Xizmat ko‘rsatish sohasi (konsalting, kurslar)</li>
            <li>Restoranlar va mehmonxonalar</li>
        </ul>
        
        <p>Internet orqali mijoz izlayotgan har qanday biznes uchun internet marketing zarurdir.</p>
        `
    }
]

export const projectsData = [
    {
        "id": "1",
        "title": "Online Kitob Do'koni",
        "name": "Kitoblar.uz",
        "type": "website",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://kitoblar.uz'
    },
    {
        "id": "2",
        "title": "Portfolio Websayti",
        "name": "Ulugbek Dev",
        "type": "webapp",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://ulugbekdev.uz'
    },
    {
        "id": "3",
        "title": "Chat Ilovasi",
        "name": "Suhbat",
        "type": "website",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://gochat.uz'
    },
    {
        "id": "4",
        "title": "Task Manager",
        "name": "Vazifalar",
        "type": "website",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://taskmanager.uz'
    },
    {
        "id": "5",
        "title": "Blog Platformasi",
        "name": "BlogZone",
        "type": "webapp",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://zoneblog.uz'
    },
    {
        "id": "6",
        "title": "Ovqat Yetkazib Berish",
        "name": "Oshxonam",
        "type": "website",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://kitchenway.uz'
    },
    {
        "id": "7",
        "title": "Ob-havo Ilovasi",
        "name": "ObHavo.uz",
        "type": "website",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://obhavo.uz'
    },
    {
        "id": "8",
        "title": "Kripto Narx Kuzatuvchi",
        "name": "CryptoView",
        "type": "webapp",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://cryptowallet.uz'
    },
    {
        "id": "9",
        "title": "AI Chatbot",
        "name": "SmartBot",
        "type": "webapp",
        "image": "https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg",
        "link": 'https://smartbot.uz'
    }
]


export const workOrderData = [
    {
        "id": "1",
        "value": "logo",
        "icon": <BiLogo500Px />,
        "title": "Logotip yaratish",
        "content": `
          <h1 class='!mb-5 !text-[17px] !leading-[40px]'>
            Dastlab kompaniyamizning<strong class='!text-[#2F80ED]'> Logo Maker</strong> xodimlari tomonidan web sayt uchun 
            <i>yagona va interraktiv</i> brend logotipi yaratiladi.
            Logotiplar bilan birga sayt uchun rasmlar ham yaratiladi.
          </h1>
            <ul class='!text-[17px] !leading-[50px] !pl-10  !italic !list-decimal' >
                <li>
                    <p>1-navbatda Logo Maker lar logotip uchun uyg'unlashuvchi ranglarni tanlashadi. Bu juda muhim xisoblanadi. Chunki ushbu ranglarni butun saytda foydalaniladi.</p>
                </li>
                <li>
                    <p>Keyin esa ushbu ranglardan foydalanib brendga moslab logo shakllantiriladi.</p>
                </li>
                <li>
                    <p>Undan so'ng tayyor logo mijozga ko'rsatiladi yoqsa shu logoni saytda qo'llaymiz, aks holda mijoz talabiga binoan o'zgartiriladi.</p>
                </li>
            </ul>          
        `,
    },
    {
        "id": "2",
        "value": "webDesign",
        "icon": <MdDesignServices />,
        "title": "Web sayt uchun dizayn",
        "content": `
          <h1 class='!mb-5 !text-[17px] !leading-[40px]'>
            Loyiha uchun dizayn g'oyasi kerak bo'ladi. Bu ish bilan esa <strong class='!text-[#2F80ED]'>Figma Designer</strong> xodimlarimiz shug'ullanadi. Figma dizaynlarini yaratish uchun yaratuvchan mukammal dizayn yaratuvchi jonkuyar xodimlarimiz ish olib borishadi.
          </h1>
            <ul class='!text-[17px] !leading-[50px] !pl-10  !italic !list-decimal' >
                <li>
                    <p>Logo Maker lar tanlab bergan ranglar uyg'unligiga tayanib va dizaynerlar o'z g'oyasidan kelib chiqib qo'shimcha rang qo'shib dizayn g'oyasini tuziladi.</p>
                </li>
                <li>
                    <p>G'oya tuzilgandan so'ng ishni boshlashadi va <strong>Design Deadline</strong> vaqtigacha tayyorlashadi.</p>
                </li>
                <li>
                    <p>Tayyor bo'lgan dizaynni mijozga ko'rsatiladi. Agar mijozga dizayn yoqsa shu dizayn asosida sayt qurishni boshlanadi, aks holda mijoz talabiga binoan o'zgartiriladi.</p>
                </li>
            </ul>          
        `,
    },
    {
        "id": "3",
        "value": "gettingStart",
        "icon": <CgWebsite />,
        "title": "Saytni yaratishni boshlash.",
        "content": `
          <h1 class='!mb-5 !text-[17px] !leading-[40px]'>
            Figma Design dan keyingi bosqich, <i class="!italic">Create Web Site</i> qismi boshlanadi. Ushbu bo'limda kompaniyamizning <strong class="!text-[#2F80ED]">Front End</strong> hamda <strong class="!text-[#2F80ED]">Back End</strong> developer xodimlari ish olib boradi.
          </h1>
            <ul class='!text-[17px] !leading-[50px] !pl-10  !italic !list-decimal' >
                <li>
                    <p>Birinchi navbatda Back End chilar web sayt uchun API tuzib berishadi.</p>
                </li>
                <li>
                    <p>Back End chilar tomonidan berilgan API dan foydalanib Front End qismini yozishni boshlanadi.</p>
                </li>
                <li>
                    <p>Loyiha <strong>Deadline</strong>gacha tayyor qilinadi va test rejimida Web inspection staff xodimlar saytni tekshirishadi. Tekshiruvdan keyin ba'zi muammolar chiqsa to'g'irlanadi va so'ngida mijozga taqdim etiladi.Sayt mukammal va sifatli darajaga kelganda mijoz qo'liga yetib boradi.</p>
                </li>
            </ul>          
        `,
    },
]

export const projectCount = [
    {
        id: '1',
        label: "Saytingizni sahifalari:",
        options: [
            {
                radioId: "1",
                icon: <MdPages />,
                value: "1-5",
                title: "1-5",
            },
            {
                radioId: "2",
                icon: <MdPages />,
                value: "5-15",
                title: "5-15",
            },
            {
                radioId: "3",
                icon: <MdPages />,
                value: "15-35",
                title: "15-35",
            },
            {
                radioId: "4",
                icon: <MdPages />,
                value: "max",
                title: "Maximum",
            },
        ],
    },

    {
        id: '2',
        label: "Dizayn:",
        options: [
            {
                radioId: "1",
                icon: <MdDesignServices />,
                value: "easy",
                title: "Oddiy",
            },
            {
                radioId: "2",
                icon: <MdDesignServices />,
                value: "hard",
                title: "Yuqori",
            },
            {
                radioId: "3",
                icon: <MdDesignServices />,
                value: "custom",
                title: "Maxsus",
            }
        ],
    },

    {
        id: '3',
        label: "Saytning moslashuvchanligi (responsive web design):",
        options: [
            {
                radioId: "1",
                icon: <IoBanOutline />,
                value: "only_laptop",
                title: "Yo'q",
            },
            {
                radioId: "2",
                icon: <DiResponsive />,
                value: "laptop_tablet",
                title: "Kompyuter va planshet",
            },
            {
                radioId: "3",
                icon: <DiResponsive />,
                value: "laptop_tablet_phone",
                title: "Kompyuter,planshet va telefon",
            }
        ],
    },

    {
        id: '4',
        label: "Sayt boshqaruv tizimi (CMS):",
        options: [
            {
                radioId: "1",
                icon: <MdDoNotTouch />,
                value: "not_must",
                title: "Shart emas",
            },
            {
                radioId: "2",
                icon: <CgController />,
                value: "standart",
                title: "Standart",
            },
            {
                radioId: "3",
                icon: <CgController />,
                value: "max",
                title: "Murakkab imkoniyatlar",
            }
        ],
    },

    {
        id: '5',
        label: "Sayt tillari:",
        options: [
            {
                radioId: "1",
                icon: <FaLanguage />,
                value: "uz",
                title: "O'zbek",
            },
            {
                radioId: "2",
                icon: <Box display={'flex'} alignItems={'center'} gap={'10px'}><FaLanguage /><FaLanguage /></Box>,
                value: "uz_eng",
                title: "O'zbek / Ingliz",
            },
            {
                radioId: "3",
                icon: <Box display={'flex'} alignItems={'center'} gap={'10px'}><FaLanguage /><FaLanguage /></Box>,
                value: "uz_ru",
                title: "O'zbek / Rus",
            },
            {
                radioId: "4",
                icon: <Box display={'flex'} alignItems={'center'} gap={'10px'}><FaLanguage /><FaLanguage /><FaLanguage /></Box>,
                value: "uz_eng_ru",
                title: "O'zbek / Ingliz / Rus",
            }
        ],
    },

    {
        id: '5',
        label: "Internet do'kon imkoniyatlari:",
        options: [
            {
                radioId: "1",
                icon: <MdDoNotTouch />,
                value: "not_must",
                title: "Shart emas",
            },
            {
                radioId: "2",
                icon: <CiShoppingTag />,
                value: "cart",
                title: "Xarid savati",
            },
            {
                radioId: "3",
                icon: <Box display={'flex'} alignItems={'center'}><CiShoppingTag /> <PiPaypalLogo /></Box>,
                value: "cart_pay",
                title: "Xarid savati + Payme / Click",
            }
        ],
    },

    {
        id: '5',
        label: "Matn yozish (Copywriting narxi sahifa uchun belgilanadi):",
        options: [
            {
                radioId: "1",
                icon: <MdDoNotTouch />,
                value: "not_must",
                title: "Shart emas",
            },
            {
                radioId: "2",
                icon: <MdPages />,
                value: "2-5",
                title: "2-5",
            },
            {
                radioId: "3",
                icon: <MdPages />,
                value: "5-10",
                title: "5-10",
            }
        ],
    },

    {
        id: '5',
        label: "SEO xizmati (Search Engine optimization,  Googleda saytni yuqoriga olib chiqish va uni daromad olib keladigan qilish) :",
        options: [
            {
                radioId: "1",
                icon: <MdDoNotTouch />,
                value: "not_must",
                title: "Shart emas",
            },
            {
                radioId: "2",
                icon: <BiCode />,
                value: "key_40",
                title: "40 kalit",
            },
            {
                radioId: "3",
                icon: <BiCode />,
                value: "key_90",
                title: "90 kalit",
            }
        ],
    },
];


export const benefitData = [
    {
        'id': '1',
        'name':'Tajribali xodimlar.',
        'title':"Bizning kompaniyamiz xodimlari o'z ishlari bo'yicha professional xisoblanadi. Har bir xodimning o'ziga yarasha tajribasi bor",
        'icon': workersBenefit
    },
    {
        'id': '2',
        'name':'Sifatli va mukammal ish.',
        'title':"Bizning kompaniyamiz xodimlari o'z ishlari bo'yicha professional xisoblanadi. Har bir xodimning o'ziga yarasha tajribasi bor",
        'icon': qualityBenefit
    },
    {
        'id': '3',
        'name':'Arzon narxdagi xizmatlar.',
        'title':"Bizning kompaniyamiz xodimlari o'z ishlari bo'yicha professional xisoblanadi. Har bir xodimning o'ziga yarasha tajribasi bor",
        'icon': cheapserviceBenefit
    },
    {
        'id': '4',
        'name':'Loyihani O\'z vaqtida topshirish.',
        'title':"Bizning kompaniyamiz xodimlari o'z ishlari bo'yicha professional xisoblanadi. Har bir xodimning o'ziga yarasha tajribasi bor",
        'icon': deadlineattimeBenefit
    },
]
