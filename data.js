// Her ülke/şehire ait isim, tanıtım videosu, radyo/geleneksel müzik, bayrak ve harita verilerinin alındığı kısım
var models = [
    {
        name: "Istanbul / Turkey", // İstanbul/Türkiye
        url: `https://www.youtube.com/embed/hljZphKH7e0?start=` + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/QjjxeaQBtRo`,
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5897809314!2d28.731994487814784!3d41.00498228699284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1617285522199!5m2!1str!2str"
    },
    {
        name: "New York / America", // New York/Amerika
        url: "https://www.youtube.com/embed/tGx-EMuruq8?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/qq2oWbldWbA`,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1617285571137!5m2!1str!2str"
    },
    {
        name: "Tokyo / Japan", // Tokyo/Japonya
        url: "https://www.youtube.com/embed/0nTO4zSEpOs?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/lHLChGEwdwQ`,
        flag: "http://www.onlinetercumanlik.com/bayrak/japonya_bayragi/japonya_buyuk.gif",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662980.6524248242!2d138.64862155777902!3d35.50405354021067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japonya!5e0!3m2!1str!2str!4v1617285605610!5m2!1str!2str"
    },
    {
        name: "Berlin / German", // Berlin/Almanya
        url: "https://www.youtube.com/embed/CTxS_DNSyqg?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/gzWKPP3ftF0`,
        flag: "https://ulkelerbayraklar.com/wp-content/uploads/2017/12/almanya_bayrag%CC%86%C4%B1-800x445.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42014112294!2d13.144554017505376!3d52.50651327145429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Almanya!5e0!3m2!1str!2str!4v1617285659884!5m2!1str!2str"
    },
    {
        name: "Los Angeles / USA", //Los Angeles/Kaliforniya/Amerika
        url: "https://www.youtube.com/embed/YZuqKkAS4b8?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/gnyW6uaUgk4`,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740658098!2d-118.69192119136834!3d34.020161304907774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1617285107322!5m2!1str!2str"
    },
    {
        name: "Antarctica", //Antartika
        url: "https://www.youtube.com/embed/F8rzb4nQs5I?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/tb0B3auGbtA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/True_South_Antarctic_Flag.svg/1200px-True_South_Antarctic_Flag.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17804202.617377397!2d0!3d-74.19502160516944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntarktika!5e0!3m2!1str!2str!4v1617285700001!5m2!1str!2str"
    },
    {
        name: "Paris / French", //Paris/Fransa
        url: "https://www.youtube.com/embed/Y5TNhAMEm5g?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/nFK0pxzADP8",
        flag: "https://www.dhresource.com/0x0s/f2-albu-g4-M00-7B-63-rBVaEVnLHO2Ad4RBAAD9MQ7eKrY805.jpg/90x150cm-fransa-bayra-canl-renk-ve-uv-solmaya.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9472264891!2d2.2770202225119434!3d48.85883773935407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fransa!5e0!3m2!1str!2str!4v1617285744298!5m2!1str!2str"
    },
    {
        name: "Vienna / Austria", //Viyana/Avusturya
        url: "https://www.youtube.com/embed/rJ2IY6rp-G8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/WEsJ0un-AME",
        flag: "https://ulkelerbayraklar.com/wp-content/uploads/2017/12/avusturya-bayrag%CC%86%C4%B1.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170129.53089218406!2d16.23997687377501!3d48.2205998177616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sViyana%2C%20Avusturya!5e0!3m2!1str!2str!4v1617285781207!5m2!1str!2str"
    },
    {
        name: "Baku / Azerbaijan", //Bakü/Azerbaycan
        url: "https://www.youtube.com/embed/Qdq__PK5B0w?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/eOAhq8pddEs",
        flag: "https://aztc.gov.az/uploads/flag.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42999466046!2d49.71487539548641!3d40.39450797992698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBak%C3%BC%2C%20Azerbaycan!5e0!3m2!1str!2str!4v1617285840188!5m2!1str!2str"
    },
    {
        name: "Switzerland", // İsviçre
        url: "https://www.youtube.com/embed/kVxTrhojpFI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/IvuwTft-0cM",
        flag:"https://aktiva.swiss/wp-content/uploads/2016/09/flagge-schweiz014_1920x1080.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398183.4084449343!2d7.103154603217783!3d46.807714224365775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2zxLBzdmnDp3Jl!5e0!3m2!1str!2str!4v1617285884523!5m2!1str!2str"
    },

    {
        name: "Nassau / Bahamas", //Nassau/Bahamalar
        url: "https://www.youtube.com/embed/_0kW5FJaOkw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/HsHetqB6f14",
        flag: "http://www.onlinetercumanlik.com/bayrak/bahamalar_bayragi/bahamalar_buyuk.gif",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.442584522!2d-77.4771334448459!3d25.03254413721698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamalar!5e0!3m2!1str!2str!4v1617285915928!5m2!1str!2str"

    },

    {
        name: "Sarajevo / Bosnia and Herzegovina", //Saraybosna/Bosna Hersek
        url: "https://www.youtube.com/embed/ZjSecFsLUaM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/GQK1pi9GOsU",
        flag: "https://www.bayraklar.info/data/flags/ultra/ba.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92005.5076554819!2d18.312951641838083!3d43.8937019113143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cbb1ed719bd1%3A0x562ecda6de87b33e!2sSaraybosna%2C%20Bosna%20Hersek!5e0!3m2!1str!2str!4v1617286002516!5m2!1str!2str"
    },
    {
        name: "Vatican",//Vatikan
        url: "https://www.youtube.com/embed/ihBQqXzfc4s?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/Za4aVQ5HDek?start=9",
        flag: "https://i.pinimg.com/originals/12/3b/db/123bdb3f660c9d836ba20dfcb14f548c.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.980723522062!2d12.447683826723594!3d41.903816266880426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325890a57d42d3d%3A0x94f9ab23a7eb0!2s00120%20Vatikan!5e0!3m2!1str!2str!4v1617286023535!5m2!1str!2str"
    },

    {
        name: "Brazil",//Brezilya
        url: "https://www.youtube.com/embed/uhcocK-td5E?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ful0qGqtSgQ",
        flag: "https://w3t8w3k2.stackpathcdn.com/wp-content/uploads/2018/06/brezilya-bayragi.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31754347.84251272!2d-69.69033405940056!3d-13.702504800393095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrezilya!5e0!3m2!1str!2str!4v1617286049866!5m2!1str!2str"
    },
    {
        name: "Cape Verde",//Kabo verde
        url: "https://www.youtube.com/embed/DWsX7Wjd_es?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/wXV39pybgJU",
        flag: "https://www.bayraklar.info/data/flags/big/cv.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963454.106583035!2d-25.11000012973367!3d16.02021370036511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9358f2159115131%3A0x6b1af236f918ea1f!2sCape%20Verde!5e0!3m2!1str!2str!4v1617286084265!5m2!1str!2str"
    },
    {
        name: "Delhi / India ",//Delhi/Hindistan
        url: "https://www.youtube.com/embed/J9mpXixJptg?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ajR6OSLMq6U",
        flag: "https://www.bayraklar.info/data/flags/ultra/in.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223994.25250202004!2d76.95126436699663!3d28.692332876622267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi%2C%20Hindistan!5e0!3m2!1str!2str!4v1617286110933!5m2!1str!2str"
    },
    {
        name: "Dubai / United Arab Emirates", //Dubai/Birleşik arap emirlikleri
        url: "https://www.youtube.com/embed/JXe-1dIlCw4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/J8z-lelMDjc",
        flag: "https://www.bayraklar.info/data/flags/ultra/ae.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.1975869988!2d54.94755420335059!3d25.075085309151454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20Dubai%20Emirli%C4%9Fi%20-%20Birle%C5%9Fik%20Arap%20Emirlikleri!5e0!3m2!1str!2str!4v1617286144614!5m2!1str!2str"
    },

    {
        name: "Sofia / Bulgaria",//Sofya/Bulgaristan
        url: "https://www.youtube.com/embed/ez1KCblQ6iM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/qq2oWbldWbA",
        flag: "https://www.bayraklar.info/data/flags/ultra/bg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187673.3086944028!2d23.183862811427588!3d42.69534680317215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofya%2C%20Bulgaristan!5e0!3m2!1str!2str!4v1617286172811!5m2!1str!2str"
    },

    {
        name: "Ottawa / Canada",//Ottava/Kanada
        url: "https://www.youtube.com/embed/DOxooCnQ7P0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/azl07uA79pA",
        flag: "https://www.turkrehber.ca/assets/images/blogs/covers/kanada-bayragi.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359539.2054179669!2d-76.08043933821044!3d45.249814031216594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttava%2C%20Ontario%2C%20Kanada!5e0!3m2!1str!2str!4v1617286207822!5m2!1str!2str"
    },
    {
        name: "Ankara / Turkey", //Ankara/Türkiye
        url: "https://www.youtube.com/embed/DulbJU8jEII?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/Ra8dgbsSbVc",
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.96090361063!2d32.6226804798303!3d39.90329227726917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1617286232705!5m2!1str!2str"

    },

    {
        name: "Shanghai / Chine",//Şangay/Çin
        url: "https://www.youtube.com/embed/Ff29nDLBzaA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/rGPXugD0ekU",
        flag: "https://images.freeimages.com/images/large-previews/200/china-flag-1444024.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873449.7820334237!2d120.91629453314131!3d31.22313379317916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2zxZ5hbmdoYXksIMOHaW4!5e0!3m2!1str!2str!4v1617286257346!5m2!1str!2str"
    },
    {
        name: "San Francisco / USA",//San Fransisko/Amerika
        url: "https://www.youtube.com/embed/pQP8lmjGnp4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/YSBO7Zl8mU4",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17073734755!2d-122.50764006026725!3d37.75767927558743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1617286289781!5m2!1str!2str"
    },
    {
        name: "London / England", //Londra/İngiltere
        url: "https://www.youtube.com/embed/bsmVP0kcKnI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/3ZswT0i7KsI",
        flag: "https://3.bp.blogspot.com/-Db_y67QpHwM/V4QapAPWtJI/AAAAAAAAAOM/an_uhqWk1sYiAkgo4Bze4sdNo0lO3NWFgCLcB/s1600/Union_flag_1606_%2528Kings_Colors%2529.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZHJhLCBCaXJsZcWfaWsgS3JhbGzEsWs!5e0!3m2!1str!2str!4v1617286316528!5m2!1str!2str"
    },
    {
        name: "Norway",//Norveç
        url: "https://www.youtube.com/embed/SMKPKGW083c?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/DH3vi7Av5Vs",
        flag: "https://www.bayraklar.info/data/flags/w580/no.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595502.94462157!2d0.10902761883654306!3d63.47706100735687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2zTm9ydmXDpw!5e0!3m2!1str!2str!4v1617286345884!5m2!1str!2str"
    },
    {
        name: "Izmir / Turkey", //İzmir/Türkiye
        url: "https://www.youtube.com/embed/dqwNC1DQIq8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/FxIYcHf3Jmo",
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200066.14127024243!2d26.939632585195547!3d38.4175916758296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1617286375785!5m2!1str!2str"
    },
    {
        name: "Tehran / Iran",//Tehran/iran
        url: "https://www.youtube.com/embed/VhB925QAlJk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/IXrK-zGBsRg",
        flag: "https://www.bayraklar.info/data/flags/ultra/ir.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207372.70304423055!2d51.209733794532!3d35.696732950539506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2zVGFocmFuLCDEsHJhbg!5e0!3m2!1str!2str!4v1617286398496!5m2!1str!2str"
    },
    {
        name: "Lyon / French", //Liyon/Fransa
        url: "https://www.youtube.com/embed/5oDtbniATlc?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/nFK0pxzADP8",
        flag: "https://www.dhresource.com/0x0s/f2-albu-g4-M00-7B-63-rBVaEVnLHO2Ad4RBAAD9MQ7eKrY805.jpg/90x150cm-fransa-bayra-canl-renk-ve-uv-solmaya.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89077.16417715291!2d4.765081157966247!3d45.75793410288789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20Fransa!5e0!3m2!1str!2str!4v1617286428440!5m2!1str!2str"
    },
    {
        name: "Venedic / Italia",//Venedik/İtalya
        url: "https://www.youtube.com/embed/Y5jLAnZte2o?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/TqQaLuW2wjg",
        flag: "https://www.bayraklar.info/data/flags/w580/it.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358560.61749345454!2d12.107150506964253!3d45.404200752530734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenedik%2C%20%C4%B0talya!5e0!3m2!1str!2str!4v1617286449562!5m2!1str!2str"
    },
    {
        name: "Manchester / England",//Mençıstır/İngiltere
        url: "https://www.youtube.com/embed/-1mgjHDYhGY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/Mq1y-lu_-Zc",
        flag: "https://3.bp.blogspot.com/-Db_y67QpHwM/V4QapAPWtJI/AAAAAAAAAOM/an_uhqWk1sYiAkgo4Bze4sdNo0lO3NWFgCLcB/s1600/Union_flag_1606_%2528Kings_Colors%2529.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.25869269183!2d-2.2935023472472884!3d53.47222497479299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20Birle%C5%9Fik%20Krall%C4%B1k!5e0!3m2!1str!2str!4v1617286485631!5m2!1str!2str"
    },
    {
        name: "World Live",//Dünya Canlı Yayın
        url: "https://www.youtube.com/embed/8KGXSjtS5pk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/2gO1v2GPMFk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Flag-map_of_the_world_%281900%29.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9435910.20005871!2d-16.74945547433575!3d-42.829472761176135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlas%20Okyanusu!5e0!3m2!1str!2str!4v1617286638490!5m2!1str!2str"
    },
    {
        name: "Hong Kong",//Hong Kong Özel
        url: "https://www.youtube.com/embed/Sl3KJnVRFtA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/rGPXugD0ekU",
        flag: "https://images.freeimages.com/images/large-previews/200/china-flag-1444024.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236161.63669657268!2d113.98761384556074!3d22.35266321504567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1str!2str!4v1617286665208!5m2!1str!2str"

    },
    // 
    {
        name: "Budapest/Hungary", // Budaştepe/Macaristan
        url: "https://www.youtube.com/embed/B_Hfmp-z7AE?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/D0-IAD9kNKk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169908.41636303!2d18.169692006656312!3d47.07335764104836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudape%C5%9Fte%2C%20Macaristan!5e0!3m2!1str!2str!4v1617618691355!5m2!1str!2str"
    },
    {
        name: "Mexico City/Mexico", // Meksika/Meksika
        url: "https://www.youtube.com/embed/W-zf6fgo4A8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/8nuw287xTcY",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007902.862829406!2d-111.63906434829171!3d23.31435153858137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMeksika!5e0!3m2!1str!2str!4v1617620317857!5m2!1str!2str" 
    },
    {
        name: "Skopje/Macedonia", // Üsküp/Makedonya
        url: "https://www.youtube.com/embed/5Z9tHSyqVW4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/9vShtp1KadQ",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/125px-Flag_of_North_Macedonia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007902.862829406!2d-111.63906434829171!3d23.31435153858137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMeksika!5e0!3m2!1str!2str!4v1617620317857!5m2!1str!2str"
    },
    {
        name: "Cairo/Egypt", // Kahire/Mısır
        url: "https://www.youtube.com/embed/Sr1Yb0xiRbA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/GI6dOS5ncFc",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564057917!2d31.223444935197637!3d30.059558098303366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2zS2FoaXJlLCBNxLFzxLFy!5e0!3m2!1str!2str!4v1617622996434!5m2!1str!2str" 
    },
    {
        name: "Kathmandu/Nepali", // Katmandu/Nepal
        url: "https://www.youtube.com/embed/EgeqKqwebZI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/JCdhsttnvcA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/60px-Flag_of_Nepal.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689225424!2d85.29111337616108!3d27.709031933186687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKatmandu%2044600%2C%20Nepal!5e0!3m2!1str!2str!4v1617623933475!5m2!1str!2str" 
    },
    {
        name: "Abuja/Nigeria", // Abuja/Nijerya
        url: "https://www.youtube.com/embed/D_gKkrS42lU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/0O7_-_iA1cc",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/125px-Flag_of_Nigeria.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.25122683121!2d7.324316727176904!3d9.054496624537117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Nijerya!5e0!3m2!1str!2str!4v1617624167127!5m2!1str!2str"
    },
    {
        name: "Oslo/Norway", // Oslo/Norveç
        url: "https://www.youtube.com/embed/CxwJrzEdw1U?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/DH3vi7Av5Vs",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/125px-Flag_of_Norway.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128083.26573308172!2d10.64503593265034!3d59.89395286063323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2zT3NsbywgTm9ydmXDpw!5e0!3m2!1str!2str!4v1617624664897!5m2!1str!2str"
    },
    {
        name: "Tashkent/Uzbekistan", // Taşkent/Özbekistan
        url: "https://www.youtube.com/embed/vxjOsSoERfo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/NMp1Uxu6QQM",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/125px-Flag_of_Uzbekistan.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.46804113487!2d69.20932710288486!3d41.28270522594135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2zVGHFn2tlbnQsIMOWemJla2lzdGFu!5e0!3m2!1str!2str!4v1617625553698!5m2!1str!2str"
    },
    {
        name: "Islamabad/Pakistan", // İslamabad/Pakistan
        url: "https://www.youtube.com/embed/7_WuTK9fH9Y?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ZR0NVT5YL0g?start=12",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/125px-Flag_of_Pakistan.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.8169176803!2d72.94602464919134!3d33.61632322093019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2zxLBzbGFtYWJhdCwgSXNsYW1hYmFkLCDEsHNsYW1hYmFkIEJhxZ9rZW50IELDtmxnZXNpLCBQYWtpc3Rhbg!5e0!3m2!1str!2str!4v1617625995551!5m2!1str!2str" 
    },
    {
        name: "Warsaw/Poland", // Varşova/Polonya
        url: "https://www.youtube.com/embed/B0natYYDaso?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/X2ufwj4FhrU?start=8",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850038!2d20.92111258629628!3d52.233065320889196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sVar%C5%9Fova%2C%20Polonya!5e0!3m2!1str!2str!4v1617626601187!5m2!1str!2str" 
    },
    {
        name: "Warsaw/Portuguese", // Lisbon/Portekiz
        url: "https://www.youtube.com/embed/O1dgtYkfQZU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/qs75nhUmkPA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.84795959883!2d-9.230243763494911!3d38.743739596270565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLizbon%2C%20Portekiz!5e0!3m2!1str!2str!4v1617633062184!5m2!1str!2str"
    },
    {
        name: "Bucharest/Romania", // Bükreş/Romanya
        url: "https://www.youtube.com/embed/KVOpXFFsfKw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/uiy4CdxqAb0",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/125px-Flag_of_Romania.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.56672528596!2d26.02459802814397!3d44.43792692047133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2zQsO8a3JlxZ8sIFJvbWFueWE!5e0!3m2!1str!2str!4v1617634100329!5m2!1str!2str"
    },
    {
        name: "Moscow/Russia", // Moskova/Rusya
        url: "https://www.youtube.com/embed/lyh2kAjcmSY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ILxuNIx8w14",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/125px-Flag_of_Russia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3463670198!2d36.82514088019102!3d55.5815244828845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskova%2C%20Rusya!5e0!3m2!1str!2str!4v1617639548862!5m2!1str!2str"
    },
    {
        name: "Singapore/Singapore", // Signapur/Signapur
        url: "https://www.youtube.com/embed/Psr4HZmWHnQ?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/y62cznynwDI",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/125px-Flag_of_Singapore.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d103.70416557452107!3d1.3143393776514143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapur!5e0!3m2!1str!2str!4v1617639934914!5m2!1str!2str"
    },
    {
        name: "Riyadh/Saudi Arabia", // Riyad/Suudi Arabistan
        url: "https://www.youtube.com/embed/G5KCKKia61o?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/kpJIt4_DW6U",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.93971471715!2d46.542344118761015!3d24.725555344345064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyad%2011564%2C%20Suudi%20Arabistan!5e0!3m2!1str!2str!4v1617640212181!5m2!1str!2str"
    },
    {
        name: "Santiago/Chile", // Santiago/Şili
        url: "https://www.youtube.com/embed/yZc9vCXLPAo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/3g22qRZpNt0",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/125px-Flag_of_Chile.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212999.1973474117!2d-70.76991373599695!3d-33.47242276949835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Santiago%20Metropolitan%20b%C3%B6lgesi%2C%20%C5%9Eili!5e0!3m2!1str!2str!4v1617640695003!5m2!1str!2str"
    },
    {
        name: "Bangkok/Thailand", // Bangkok/Tayland
        url: "https://www.youtube.com/embed/KpYbH8NSXYY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/QtnHheKchbQ",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/125px-Flag_of_Thailand.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248057.18773170395!2d100.49302641228302!3d13.72489362049206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Tayland!5e0!3m2!1str!2str!4v1617641184998!5m2!1str!2str" 
    },
    {
        name: "Kiev/Ukraine", // Kiev/Ukrayna
        url: "https://www.youtube.com/embed/G8-oblRKVFk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/sd6IlinYcEk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/125px-Flag_of_Ukraine.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72582758652!2d30.39260882459542!3d50.40217023835587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKiev%2C%20Ukrayna%2C%2002000!5e0!3m2!1str!2str!4v1617641422157!5m2!1str!2str" 
    },
    {
        name: "Hanoi/Vietnam", // Hanoi/Vietnam
        url: "https://www.youtube.com/embed/wKyI2Mxna6w?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/lhS0B-8j02g",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864040.491066362!2d101.4154119805539!3d15.758357529189878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1str!2str!4v1617641807704!5m2!1str!2str" 
    },
    {
        name: "Athens/Greece", // Atina/Yunanistan
        url: "https://www.youtube.com/embed/KNQq21nrOQE?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/befZad39grg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/125px-Flag_of_Greece.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.55761009113!2d23.703319971790553!3d37.99089965315185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAtina%2C%20Yunanistan!5e0!3m2!1str!2str!4v1617643056489!5m2!1str!2str" 
    },
    //
    {
        name: "Morocco",//Morokko
        url: "https://www.youtube.com/embed/vp8s914UOH8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/2andxQSxOfw",
        flag: "https://www.countryflags.com/wp-content/uploads/morocco-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6950462.132997159!2d-11.644118265667846!3d31.72189486958806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sFas!5e0!3m2!1str!2str!4v1617545534562!5m2!1str!2str"
    },
    {
        name: "Philippines",//Filipinler
        url: "https://www.youtube.com/embed/rjzVcG-XwXU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/tWG4YUx_Mk8",
        flag: "https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050984.8164515854!2d-7.792278055943052!3d7.460842530320027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sFilipinler!5e0!3m2!1str!2str!4v1617546752040!5m2!1str!2str" 
    },
    {
        name: "Buenos Aires / Argentine",//Buenos Aires/Arjantin
        url: "https://www.youtube.com/embed/0lrcjmhcYRw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/36YnV9STBqc",
        flag: "https://www.bayraklar.info/data/flags/ultra/ar.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483379626!2d-58.503338603933564!3d-34.61580373602787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Arjantin!5e0!3m2!1str!2str!4v1617285815548!5m2!1str!2str"
    },
    {
        name: "Finland",//Finlandiya
        url: "https://www.youtube.com/embed/xv06DuU-5qk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/cGDHvhs6-Dc",
        flag: "https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003778.551776272!2d17.089631406853986!3d64.62330908778006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sFinlandiya!5e0!3m2!1str!2str!4v1617547306628!5m2!1str!2str" 
    },
    {
        name: "Guinea",//Gine
        url: "https://www.youtube.com/embed/M32QriMVpms?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/CgWqmwcfT30",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/260px-Flag_of_Guinea.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024425.0324173262!2d-13.704617809902475!3d9.92541517030899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf01b321bcce953f%3A0xe8737bcbd75a2df6!2sGine!5e0!3m2!1str!2str!4v1617549084133!5m2!1str!2str" 
    },
    {
        name: "South Korea",//Güney Kore    
        url: "https://www.youtube.com/embed/TGsbzSxpiLo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/P1fX2GGdVS0",
        flag: "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313736.2519784546!2d125.62967149419974!3d35.79820109599876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356455ebcb11ba9b%3A0x91249b00ba88db4b!2sG%C3%BCney%20Kore!5e0!3m2!1str!2str!4v1617551065524!5m2!1str!2str" 
    },
    {
        name: "Georgia",//Gürcistan
        url: "https://www.youtube.com/embed/vnDoPmYVRro?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ui8ejlowGIg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021869.4118883424!2d41.11443654993409!3d42.298919141207016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sG%C3%BCrcistan!5e0!3m2!1str!2str!4v1617552413873!5m2!1str!2str" 
    },
    {
        name: "India",//Hindistan
        url: "https://www.youtube.com/embed/rpeOOYpvEuo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/1We5a3uUwRw",
        flag: "https://i.pinimg.com/originals/a0/46/8d/a0468dcca109b1140a4951e3a4614bb4.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711219.15049817!2d64.44099882140567!3d20.011531347539172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sHindistan!5e0!3m2!1str!2str!4v1617555324356!5m2!1str!2str" 
    },
    {
        name: "Netherlands",//Hollanda
        url: "https://www.youtube.com/embed/kVf3o24SkeQ?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/AKLrKMz-avE",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504542.8621762805!2d3.0368221406596163!3d52.19173301134933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sHollanda!5e0!3m2!1str!2str!4v1617555834416!5m2!1str!2str" 
    },
    {
        name: "Madrid / Spain",//Madrid/İspanya
        url: "https://www.youtube.com/embed/2RakvEQhTTA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/FD0RlazkhtU",
        flag: "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6248294.125075572!2d-8.203466546263893!3d40.1216778459112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2zxLBzcGFueWE!5e0!3m2!1str!2str!4v1617606308641!5m2!1str!2str" 
    },
    {
        name: "Sweden",//İsveç
        url: "https://www.youtube.com/embed/AmyIxu39JJE?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/1AQaVe9vnL0",
        flag: "http://upload.turkcewiki.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908306.717847338!2d-0.26227445737658056!3d60.87465135824224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb2396d35f0f1%3A0x22b8eba28dad6f62!2zxLBzdmXDpw!5e0!3m2!1str!2str!4v1617606673322!5m2!1str!2str" 
    },
    {
        name: "Roma",//Roma
        url: "https://www.youtube.com/embed/EsFheWkimsU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ph1vpnYIxJk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12344909.289790202!2d3.722048297420797!3d40.93999314407897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2zxLB0YWx5YQ!5e0!3m2!1str!2str!4v1617608581118!5m2!1str!2str" 
    },
    {
        name: "Costa Rica",//Kosta Rika
        url: "https://www.youtube.com/embed/LWrtCsXe8nA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/BdKiPR3kdjo",
        flag: "https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042248.3471296434!2d-87.05336939115601!3d8.351567367277067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sKosta%20Rika!5e0!3m2!1str!2str!4v1617618064234!5m2!1str!2str" 
    },
    {
        name: "Kiribati",//Kiribati
        url: "https://www.youtube.com/embed/T61I6KiHb8k?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/CusAyWlUsNI",
        flag: "https://www.countryflags.com/wp-content/uploads/kiribati-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32619186.991257716!2d173.4221430609491!3d-3.625291970125648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65647c91c2028703%3A0x84327d040152c307!2sKiribati!5e0!3m2!1str!2str!4v1617616101185!5m2!1str!2str"
    },
    {
        name: "Colombian",//Kolombiya
        url: "https://www.youtube.com/embed/V12xrLlUGjI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/3ACa4szyWNM",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32619186.991257716!2d173.4221430609491!3d-3.625291970125648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sKolombiya!5e0!3m2!1str!2str!4v1617616470685!5m2!1str!2str" 
    },
    {
        name: "Kuwait",//Kuveyt
        url: "https://www.youtube.com/embed/56YL34r0Ovo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/fhB4cZAToR0",
        flag: "https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890613.2924918421!2d46.975251475830866!3d29.312902544218428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuveyt!5e0!3m2!1str!2str!4v1617619581983!5m2!1str!2str" 
    },
    {
        name: "Cuba",//Küba
        url: "https://www.youtube.com/embed/63ARQhtaUPs?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/xPIOrYiCf6g",
        flag: "https://www.countryflags.com/wp-content/uploads/cuba-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801283.1849052175!2d-81.80734613225133!3d21.500252650228187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd49070f7a4cb5%3A0x798cf7529110a41a!2zS8O8YmE!5e0!3m2!1str!2str!4v1617620277213!5m2!1str!2str" 
    },  {
        name:"Belgium",//Belçika
        url:"https://www.youtube.com/embed/SxEadXFM62E?start=" + Math.floor(Math.random() * 100),
        radio:"https://www.youtube.com/embed/DY_rFed96mg",
        flag:"https://www.kanculturizm.com/uploads/bel.jpg",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299490.7078731877!2d3.345105040469219!3d50.495696090671295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2zQmVsw6dpa2E!5e0!3m2!1str!2str!4v1617613949277!5m2!1str!2str"
    },
    {
        name:"Dominician Republic",//Dominik Cumhuriyeti
        url:"https://www.youtube.com/embed/W-v7xh5vHOE?start=" + Math.floor(Math.random() * 100),
        radio:"https://www.youtube.com/embed/W8MXFaxIfQk",
        flag:"https://www.bayraklar.info/data/flags/ultra/do.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935330.6088110178!2d-71.25139210488993!3d18.666571797839616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sDominik%20Cumhuriyeti!5e0!3m2!1str!2str!4v1617616592336!5m2!1str!2str"

    },
    {
        name:"Copenhagen / Denmark",//Kopenak//Danimarka
        url:"https://www.youtube.com/embed/nTOssmG4UjA?start=" + Math.floor(Math.random() * 100),
        radio:"https://www.youtube.com/embed/cMFReEnAPDw",
        flag:"https://www.rotaradar.com/blog/wp-content/uploads/2020/02/danimarka-bayrak-.jpg",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000.6491097692!2d12.523784492488176!3d55.67124741351282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sKopenhag%2C%20Danimarka!5e0!3m2!1str!2str!4v1617617189857!5m2!1str!2str"
    },
    {
        name:"Armenia",//Ermenistan
        url:"https://www.youtube.com/embed/R_OYLxCF_Og?start=" + Math.floor(Math.random() * 100),
        radio:"https://www.youtube.com/embed/r-2S1ZZELQE",
        flag:"https://p4.wallpaperbetter.com/wallpaper/335/980/8/armenia-flag-republic-of-armenia-eurasia-armenian-flag-hd-wallpaper-preview.jpg",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563370.0398324223!2d43.919602133169576!3d40.06521474492859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2sErmenistan!5e0!3m2!1str!2str!4v1617617704079!5m2!1str!2str"
    },
    {
        name:"Bali / Indonesia",//Bali/Endonezya
        url:"https://www.youtube.com/embed/KxQIcxlMudw?start=" + Math.floor(Math.random() * 100),
        radio:"https://www.youtube.com/embed/_cL8qqjKQP0",
        flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Indonesia_%28bordered%29.svg/1280px-Flag_of_Indonesia_%28bordered%29.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505145.0067500859!2d114.7913468748377!3d-8.455996495809014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f7520fca7d3%3A0x2872b62cc456cd84!2sBali!5e0!3m2!1str!2str!4v1617619155140!5m2!1str!2str"
    },
    {
        name:"Jerusalem / Israel",//Kudüs/İsrail
        url:"https://www.youtube.com/embed/ufChItQpCLI?start=" + Math.floor(Math.random() * 100),
        radio:"https://www.youtube.com/embed/sZmtypVN0uc",
        flag:"https://www.asbayrakcilik.com/wp-content/uploads/filistin-bayragi.jpg",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867278.5749283818!2d34.33161919661629!3d31.884665984359284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sFilistin!5e0!3m2!1str!2str!4v1617620020437!5m2!1str!2str"
    },
    /*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/ 
    {
        name: "Fiji",
        url: "https://www.youtube.com/embed/TB6n7I52gzc?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/2andxQSxOfw",
        flag: "https://www.countryflags.com/wp-content/uploads/fiji-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834415.316848989!2d174.96419978955902!3d-16.505987562617303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e1990fd703cdc5d%3A0x9e9c319946ef5b93!2sFiji!5e0!3m2!1str!2str!4v1617546250573!5m2!1str!2str"
    },
    {
        name: "Ivory Coast",
        url: "https://www.youtube.com/embed/9hPbQKDNzhw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/9C9tmrMsIkg",
        flag: "https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050984.8164515854!2d-7.792278055943052!3d7.460842530320027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf961387b049a067%3A0x1f91e627cb9ee40!2sFildi%C5%9Fi%20Sahili!5e0!3m2!1str!2str!4v1617546578754!5m2!1str!2str" 
    },
    {
        name: "Libreville",
        url: "https://www.youtube.com/embed/abmLSVvsBr4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/fZ8LUQgbKz0",
        flag: "https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085043.8007083414!2d9.229174777167048!3d-0.9230367442506258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7b0cc30e36786b15!2sGabon!5e0!3m2!1str!2str!4v1617547482146!5m2!1str!2str" 
    },
    {
        name: "Gambia",
        url: "https://www.youtube.com/embed/UQbLlqhqe4c?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/PtmmlOQnTXM",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/260px-Flag_of_The_Gambia.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987049.8745142496!2d-16.490287586932098!3d13.415002055236995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29c2965af3807%3A0x9e4a4c406b139d2a!2sGambiya!5e0!3m2!1str!2str!4v1617548292034!5m2!1str!2str" 
    },
    {
        name: "Ghana",
        url: "https://www.youtube.com/embed/zog-9qCHHf0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/WeMXgZW6H7Q",
        flag: "https://www.countryflags.com/wp-content/uploads/ghana-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046814.6000842885!2d-3.275133483512392!3d7.898476505328713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGana!5e0!3m2!1str!2str!4v1617548742989!5m2!1str!2str" 
    },
    {
        name: "Grenada",
        url: "https://www.youtube.com/embed/67cvBK9haa8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/Q46r6cOzTsU",
        flag: "https://www.countryflags.com/wp-content/uploads/grenada-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499050.4682650919!2d-61.87049800343615!3d12.259660382650923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c381789f4877bd1%3A0x36d8c7015a1f4f8e!2sGrenada!5e0!3m2!1str!2str!4v1617549847046!5m2!1str!2str"
    },
    {
        name: "Guyana",
        url: "https://www.youtube.com/embed/fvdbOFQZQ7s?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ffT8OW_iFiY",
        flag: "https://www.countryflags.com/wp-content/uploads/guyana-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8140938.998769027!2d-63.45196488051194!3d4.928305181481968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dafefaf60d8c2b3%3A0x48e38867b6e54440!2sGuyana!5e0!3m2!1str!2str!4v1617550085807!5m2!1str!2str" 
    },
    {
        name: "Guatemala ",
        url: "https://www.youtube.com/embed/vkI_1-B7GZA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/8CKuWPRq2Ps",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932928.643582899!2d-92.47934852434658!3d15.711381310851543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8588135036e7506b%3A0x35982b375b84d5bb!2sGuatemala!5e0!3m2!1str!2str!4v1617550387153!5m2!1str!2str" 
    },
    {
        name: "South Africa Republic ",
        url: "https://www.youtube.com/embed/ZDTFtx3yFSk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/nbYfjstimOo",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_South_Africa_%281928–1994%29.svg/255px-Flag_of_South_Africa_%281928–1994%29.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27324253.31832747!2d9.143149421371207!3d-33.280099638016246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sG%C3%BCney%20Afrika!5e0!3m2!1str!2str!4v1617550795007!5m2!1str!2str" 
    },
    {
        name: "South Ossetia",
        url: "https://www.youtube.com/embed/ftBGVz3eOtM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/JEp8Uq-p4Hc",
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_South_Ossetia.svg",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754473.5811979685!2d43.540747097808996!3d42.38168621705213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044cc57b3915475%3A0x93fd01ed35d9f224!2sG%C3%BCney%20Osetya!5e0!3m2!1str!2str!4v1617551394876!5m2!1str!2str" 
    },
    {
        name: "South Sudan",
        url: "https://www.youtube.com/embed/IAH7UyI4mHM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/yLfAAqRaCqU",
        flag: "https://www.countryflags.com/wp-content/uploads/south-sudan-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8094795.074392335!2d25.196196549583185!3d7.838761783883111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171930b53d3e3119%3A0xdbf043637eb6bc97!2sG%C3%BCney%20Sudan!5e0!3m2!1str!2str!4v1617551958288!5m2!1str!2str" 
    },
    {
        name: "Gürcistan",
        url: "https://www.youtube.com/embed/vnDoPmYVRro?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ui8ejlowGIg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021869.4118883424!2d41.11443654993409!3d42.298919141207016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sG%C3%BCrcistan!5e0!3m2!1str!2str!4v1617552413873!5m2!1str!2str" 
    },
    {
        name: "Haiti",
        url: "https://www.youtube.com/embed/jRKjvZOtyaw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/5rdE7pHBu0A",
        flag: "https://www.countryflags.com/wp-content/uploads/haiti-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931123.4212670762!2d-74.23633959923902!3d19.031816792653554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb6c6f37fcbbb11%3A0xb51438b24c54f6d3!2sHaiti!5e0!3m2!1str!2str!4v1617554199498!5m2!1str!2str" 
    },
    {
        name: "Croatia",
        url: "https://www.youtube.com/embed/99re33iIt7s?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/j4ppyoZNt_Y",
        flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917793.804778912!2d14.163393478482469!3d44.42479213857059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133441080add95ed%3A0xa0f3c024e1661b7f!2sH%C4%B1rvatistan!5e0!3m2!1str!2str!4v1617554618479!5m2!1str!2str" 
    },
    {
        name: "Honduras",
        url: "https://www.youtube.com/embed/GDOrxIjjSLU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/S55fYc9kMd0",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Honduras_%282008_Olympics%29.svg/1280px-Flag_of_Honduras_%282008_Olympics%29.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942399.918076901!2d-88.45385432743915!3d15.21317076133911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6a751a73b731cf%3A0x7ed1de82b6fb8264!2sHonduras!5e0!3m2!1str!2str!4v1617556092224!5m2!1str!2str" 
    },
    {
        name: "Dublin",
        url: "https://www.youtube.com/embed/z1S3pHGjhpg?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/kJCxTgrbB6c",
        flag: "https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438073.7034782893!2d-10.460215568516855!3d53.36238349153771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4859bae45c4027fb%3A0xcf7c1234cedbf408!2zxLBybGFuZGE!5e0!3m2!1str!2str!4v1617605648423!5m2!1str!2str" 
    },
    {
        name: "Switzerland",
        url: "https://www.youtube.com/embed/kVxTrhojpFI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/PYMNVcqPU5E",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398183.4135516773!2d7.103134484002503!3d46.807714027903295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2zxLBzdmnDp3Jl!5e0!3m2!1str!2str!4v1617608338951!5m2!1str!2str" 
    },
    {
        name: "Iceland",
        url: "https://www.youtube.com/embed/Pbzn79TSRO0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/k-_lQ1UQoyU",
        flag: "https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479526.4406227227!2d-23.728898730114537!3d64.79673843791687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2zxLB6bGFuZGE!5e0!3m2!1str!2str!4v1617608920976!5m2!1str!2str"
    },
    {
        name: "Iceland",
        url: "https://www.youtube.com/embed/Pbzn79TSRO0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/k-_lQ1UQoyU",
        flag: "https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479526.4406227227!2d-23.728898730114537!3d64.79673843791687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2zxLB6bGFuZGE!5e0!3m2!1str!2str!4v1617608920976!5m2!1str!2str"
    },
    {
        name: "Jamaika",
        url: "https://www.youtube.com/embed/Wn9t3V88iQU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/VWTkPHNlsiU",
        flag: "https://www.flagsonline.it/uploads/2016-6-6/1200-0/jamaica.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970747.9407271924!2d-77.83660240687259!3d18.118523451917532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2a1bc6cf719d%3A0x59a0d1c0b5120efa!2sJamaika!5e0!3m2!1str!2str!4v1617609483935!5m2!1str!2str"
    },
    {
        name: "Shinjuku Kabukicho",
        url: "https://www.youtube.com/embed/n3Dru5y3ROc?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/QW28YKqdxe0",
        flag: "https://www.bayraklar.info/data/flags/ultra/jp.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814241.680253465!2d120.2935890923333!3d31.680552352408824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJaponya!5e0!3m2!1str!2str!4v1617609567391!5m2!1str!2str"
    },
    {
        name: "Cambodia",
        url: "https://www.youtube.com/embed/IemnHA6Kgls?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/zaAox5PZk2w",
        flag: "https://www.countryflags.com/wp-content/uploads/cambodia-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994260.894887751!2d102.73597047618193!3d12.136396740684871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2zS2FtYm_Dp3lh!5e0!3m2!1str!2str!4v1617610218588!5m2!1str!2str"
    },
    {
        name: "Cameroon",
        url: "https://www.youtube.com/embed/7DZraSeh9Ek?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/2FAaC7E4sJ4",
        flag: "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104058.868808793!2d7.795232289064456!3d7.347160287886298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sKamerun!5e0!3m2!1str!2str!4v1617610600578!5m2!1str!2str" 
    },
    {
        name: "Vancouver",
        url: "https://www.youtube.com/embed/lh8dNmneVyY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/bURUKTVYDwk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1200px-Flag_of_Canada.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41292795.32857591!2d-130.1288899472849!3d50.82538058975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sKanada!5e0!3m2!1str!2str!4v1617611367902!5m2!1str!2str" 
    },
    {
        name: "Montenegro",
        url: "https://www.youtube.com/embed/gZlSzpDiPlA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/oIm9AR0Sku4",
        flag: "https://www.countryflags.com/wp-content/uploads/montenegro-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501545.8373590496!2d18.272230126093874!3d42.68875455592974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3217242c1fcb%3A0x384c9d866effd346!2zS2FyYWRhxJ8!5e0!3m2!1str!2str!4v1617611624741!5m2!1str!2str" 
    },
    {
        name: "Doha",
        url: "https://www.youtube.com/embed/NPe3BUsq1K0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/hkKm3p_9AYk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1280px-Flag_of_Qatar_%283-2%29.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846240.212999666!2d50.09643519917393!3d25.339864249964986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sKatar!5e0!3m2!1str!2str!4v1617611930514!5m2!1str!2str" 
    },
    {
        name: "Nur-Sultan",
        url: "https://www.youtube.com/embed/-cxemP4oxIU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/YHzt3XQ-bgw",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11008221.138695274!2d57.931351551668214!3d47.65423337690068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91007ecfca947%3A0x5f7b842fe4b30e1b!2sKazakistan!5e0!3m2!1str!2str!4v1617613311666!5m2!1str!2str"
    },
    {
        name: "Mombasa",
        url: "https://www.youtube.com/embed/hz7vQImsnZM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/__yvrxmpDh4",
        flag: "https://www.countryflags.com/wp-content/uploads/kenya-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171118.372362984!2d33.409282402231824!3d0.15408418435428792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1str!2str!4v1617613420229!5m2!1str!2str" 
    },
    {
        name: "Biškek",
        url: "https://www.youtube.com/embed/u02PAgNwF7w?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/rqCYhkt2Ym8",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1000px-Flag_of_Kyrgyzstan.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073998.2056589206!2d72.49628063174272!3d41.201033719727555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2zS8SxcmfEsXppc3Rhbg!5e0!3m2!1str!2str!4v1617613881020!5m2!1str!2str"
    },
    {
        name: "Cyprus",
        url: "https://www.youtube.com/embed/o7by63N1KlU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/EG_8RerBOvA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1200px-Flag_of_Cyprus.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834960.2152823821!2d32.86474420083085!3d35.167509338907045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3c807fc4146e!2zS8SxYnLEsXM!5e0!3m2!1str!2str!4v1617614710220!5m2!1str!2str"
    },
    {
        name: "Comoros",
        url: "https://www.youtube.com/embed/EPFUTD2hJ5U?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/KDnc3dwKJCg",
        flag: "https://www.countryflags.com/wp-content/uploads/comoros-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999433.5427597543!2d43.320274028089266!3d-11.902492859418103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1898e3036408a48d%3A0xf70a7fbee4dfd4db!2sKomorlar!5e0!3m2!1str!2str!4v1617616819014!5m2!1str!2str" 
    },
    {
        name: "Congo",
        url: "https://www.youtube.com/embed/ANrg9XRy6q0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/uHfUKUEK66s",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302815.19766097!2d12.67952745091!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sDemokratik%20Kongo%20Cumhuriyeti!5e0!3m2!1str!2str!4v1617617287843!5m2!1str!2str" 
    },
    {
        name: "Kosovo",
        url: "https://www.youtube.com/embed/rbOuaT4BplY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/CCIJxmSEgV4",
        flag: "https://www.countryflags.com/wp-content/uploads/kosovo-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504722.0605791784!2d19.78094486886172!3d42.55719807485303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13537af354bf7df1%3A0xbfffeedfabc31791!2sKosova!5e0!3m2!1str!2str!4v1617617737520!5m2!1str!2str" 
    },
    {
        name: "Costa Rica",
        url: "https://www.youtube.com/embed/LWrtCsXe8nA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/BdKiPR3kdjo",
        flag: "https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042248.3471296434!2d-87.05336939115601!3d8.351567367277067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sKosta%20Rika!5e0!3m2!1str!2str!4v1617618064234!5m2!1str!2str" 
    },
    {
        name: "Pyongyang",
        url: "https://www.youtube.com/embed/QkgLUw7CvK8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/359OeGPFCZM",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1200px-Flag_of_North_Korea.svg.png",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116918.7883686037!2d125.18073554682458!3d40.27872667998004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357e02dae64f4337%3A0x3a0b871c3e1d861c!2sKuzey%20Kore!5e0!3m2!1str!2str!4v1617620108698!5m2!1str!2str" 
    },
    {
        name: "Istanbul / Turkey", // İstanbul/Türkiye
        url: `https://www.youtube.com/embed/hljZphKH7e0?start=` + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/QjjxeaQBtRo`,
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5897809314!2d28.731994487814784!3d41.00498228699284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1617285522199!5m2!1str!2str"
    }
];

