import { Gundam } from "../interfaces/gundam-interface";
import { GundamPilot } from "../interfaces/gundam-interface";

export const gundamData: Gundam[] = [
    {
        id: 1,
        name: 'RX-78-2 Gundam',
        modelNumber: 'RX-78-2',
        series: 'Mobile Suit Gundam',
        description: 'The iconic Gundam piloted by Amuro Ray during the One Year War.',
        imageUrl: 'https://preview.redd.it/what-do-you-think-of-the-gundam-rx-78-2-v0-xusrwwdqqtka1.png?auto=webp&s=7ff710719f61b407030e1c1083eaf72964861c05',
        armaments: {
            fixed: ['Beam Saber', 'Beam Rifle', 'Shield'],
            handheld: ['Gundam Hammer', 'Hyper Bazooka']
        }
    },
    {
        id: 2,
        name: 'ZGMF-X20A Strike Freedom Gundam',
        modelNumber: 'ZGMF-X20A',
        series: 'Mobile Suit Gundam SEED Destiny',
        description: 'A powerful Gundam equipped with numerous beam weapons and Dragoon system.',
        imageUrl: 'assets/images/strike-freedom.png',
        armaments: {
            fixed: ['Lupus Beam Rifle', 'Super Lacerta Beam Saber', 'Railgun'],
            handheld: ['MA-M02G Super Lacerta Beam Rifle', 'Shield']
        }
    },
    {
        id: 3,
        name: 'GN-001 Gundam Exia',
        modelNumber: 'GN-001',
        series: 'Mobile Suit Gundam 00',
        description: 'The main Gundam of Celestial Being, specializing in close combat.',
        imageUrl: 'https://i.imgur.com/GnLxSa0.png',
        armaments: {
            fixed: ['GN Sword', 'GN Long Blade', 'GN Short Blade'],
            handheld: ['GN Beam Saber', 'GN Vulcan']
        }
    },
    {
        id: 4,
        name: 'RX-0 Unicorn Gundam',
        modelNumber: 'RX-0',
        series: 'Mobile Suit Gundam Unicorn',
        description: 'A transformable Gundam with the ability to enter a high-performance mode called "Unicorn".',
        imageUrl: 'https://example.com/gundam4.jpg',
        armaments: {
            fixed: ['Beam Magnum', 'Shield', 'Hyper Bazooka'],
            handheld: ['Beam Saber']
        }
    },
    {
        id: 5,
        name: 'MSZ-006 Zeta Gundam',
        modelNumber: 'MSZ-006',
        series: 'Mobile Suit Zeta Gundam',
        description: 'A transforming Gundam with the ability to change into a fighter jet mode.',
        imageUrl: 'https://example.com/gundam5.jpg',
        armaments: {
            fixed: ['Beam Rifle', 'Hyper Mega Launcher', 'Shield'],
            handheld: ['Beam Saber', 'Grenade Launcher']
        }
    },
    {
        id: 6,
        name: 'XXXG-01W Wing Gundam',
        modelNumber: 'XXXG-01W',
        series: 'Mobile Suit Gundam Wing',
        description: 'One of the five Gundams sent to Earth by the space colonies in Operation Meteor.',
        imageUrl: 'https://example.com/gundam6.jpg',
        armaments: {
            fixed: ['Buster Rifle', 'Shield'],
            handheld: ['Beam Saber', 'Machine Cannons']
        }
    },
    {
        id: 7,
        name: 'GN-0000 00 Gundam',
        modelNumber: 'GN-0000',
        series: 'Mobile Suit Gundam 00',
        description: 'The successor to the Gundam Exia, equipped with the Twin Drive System.',
        imageUrl: 'https://example.com/gundam7.jpg',
        armaments: {
            fixed: ['GN Sword II', 'GN Shield'],
            handheld: ['GN Sword III', 'GN Beam Saber']
        }
    },
    {
        id: 8,
        name: 'RX-93 V Gundam',
        modelNumber: 'RX-93',
        series: 'Mobile Suit Gundam: Char\'s Counterattack',
        description: 'A prototype mobile suit developed by Anaheim Electronics for Amuro Ray.',
        imageUrl: 'https://example.com/gundam8.jpg',
        armaments: {
            fixed: ['Beam Rifle', 'Shield', 'Fin Funnel'],
            handheld: ['Beam Saber']
        }
    },
    {
        id: 9,
        name: 'GAT-X105 Strike Gundam',
        modelNumber: 'GAT-X105',
        series: 'Mobile Suit Gundam SEED',
        description: 'An experimental mobile suit equipped with the Striker Packs for various combat roles.',
        imageUrl: 'https://example.com/gundam9.jpg',
        armaments: {
            fixed: ['Anti-Ship Sword', 'Aile Striker', 'Launcher Striker'],
            handheld: ['Beam Rifle', 'Shield']
        }
    },
    {
        id: 10,
        name: 'MSN-04 Sazabi',
        modelNumber: 'MSN-04',
        series: 'Mobile Suit Gundam: Char\'s Counterattack',
        description: 'A high-performance mobile suit used by Char Aznable as his personal unit.',
        imageUrl: 'https://example.com/gundam10.jpg',
        armaments: {
            fixed: ['Beam Shot Rifle', 'Shield', 'Funnel Container'],
            handheld: ['Beam Saber']
        }
    }
];

export const pilotData: GundamPilot[] = [
    {
        id: 1,
        name: 'Amuro Ray',
        nationality: 'Japanese',
        gundamName: 'RX-78-2 Gundam',
        imageUrl: 'https://www.gunpla.co.uk/wp-content/uploads/2021/11/Dwg2-amuro-ray.jpg',
        affiliations: {
            affiliation: ['Earth Federation']
        }
    },
    {
        id: 2,
        name: 'Kira Yamato',
        nationality: 'Coordinators',
        gundamName: 'ZGMF-X10A Freedom Gundam',
        imageUrl: 'https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/character/2023/11/chara1_pilot.png',
        affiliations: {
            affiliation: ['Three Ships Alliance']
        }
    },
    {
        id: 3,
        name: 'Setsuna F. Seiei',
        nationality: 'Krugis',
        gundamName: 'GN-001 Gundam Exia',
        imageUrl: 'https://bibliomecha.altervista.org/pilots/images/Gundam%2000/setsuna-ad-2312-rear.jpg',
        affiliations: {
            affiliation: ['Celestial Being']
        }
    },
    {
        id: 4,
        name: 'Banagher Links',
        nationality: 'Earth Federation',
        gundamName: 'RX-0 Unicorn Gundam',
        imageUrl: 'https://preview.redd.it/how-would-you-rate-banagher-links-on-a-scale-of-1-10-daily-v0-mpoa9x7p4eqb1.png?auto=webp&s=89bd44133cbfc8ccc4eba989ec64b8dadc8ef6d0',
        affiliations: {
            affiliation: ['Londo Bell']
        }
    },
    {
        id: 5,
        name: 'Kamille Bidan',
        nationality: 'Earth Federation',
        gundamName: 'MSZ-006 Zeta Gundam',
        imageUrl: 'https://preview.redd.it/how-would-you-rate-kamille-bidan-on-a-scale-of-1-10-daily-v0-7g9y1tomz4jb1.png?auto=webp&s=cc870397729b171bd11b332955d0ec296b6e51bb',
        affiliations: {
            affiliation: ['Anti Earth Union Group']
        }
    },
    {
        id: 6,
        name: 'Heero Yuy',
        nationality: 'Japanese',
        gundamName: 'XXXG-01W Wing Gundam',
        imageUrl: 'https://preview.redd.it/how-would-you-rate-heero-yuy-endless-waltz-on-a-scale-of-1-v0-hosqffego7pb1.png?auto=webp&s=0110f642a4caa6343b9526427e4a86a9b079ab57',
        affiliations: {
            affiliation: ['G Team']
        }
    },
    {
        id: 7,
        name: 'Suletta Mercury',
        nationality: 'Mercurian',
        gundamName: 'XVX-016 Gundam Aerial',
        imageUrl: 'https://preview.redd.it/how-would-you-rate-suletta-mercury-on-a-scale-of-1-10-daily-v0-lyjrvnw0r7ob1.png?auto=webp&s=fce291951494e214f4a5734c721b99d7ca079d32',
        affiliations: {
            affiliation: ['Asticassia School of Technology']
        }
    },
    {
        id: 8,
        name: 'Mikazuki Augus',
        nationality: 'Martian',
        gundamName: 'ASW-G-08 Gundam Barbatos',
        imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/gundam_ibo_tekkadan_mikazuki_augus6.png',
        affiliations: {
            affiliation: ['Chryse Guard Security']
        }
    },
    {
        id: 9,
        name: 'Io Flemming',
        nationality: 'Side 4',
        gundamName: 'FA-78 Full Armor Gundam',
        imageUrl: 'https://s1.zerochan.net/Io.Fleming.600.3261578.jpg',
        affiliations: {
            affiliation: ['Earth Federation Forces']
        }
    },
    {
        id: 10,
        name: 'Char Aznable',
        nationality: 'Zeon',
        gundamName: 'MSN-04 Sazabi',
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7bced49-73a3-43c1-b3ce-fe419a596a72/dgkwq5v-7511e5e2-dbea-4423-8c62-46eb2c2eafa7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3YmNlZDQ5LTczYTMtNDNjMS1iM2NlLWZlNDE5YTU5NmE3MlwvZGdrd3E1di03NTExZTVlMi1kYmVhLTQ0MjMtOGM2Mi00NmViMmMyZWFmYTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u4Ctai-kAaE52uTsKBg_Usa8UGcxfPVFGTgSnfUi-qM',
        affiliations: {
            affiliation: ['Neo Zeon']
        }
    }
];
