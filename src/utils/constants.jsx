import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report ", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "feedback", icon: <RiFeedbackLine />, type: "menu" },
];


/// demo data of Structure of api response

// export const content = [
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/UHbffDIqI1O2VyuJ3Ww-1DNvL6VVt1clNM4j_vyOF9rbk65mw96nueeh9bhxE3mExi6SD60KeZc=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [],
//         "canonicalBaseUrl": "/@soothingchristmasmusic",
//         "channelId": "UCt7J2jDcIikpRxC5cM0kd6w",
//         "title": "Soothing Christmas Music"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 42863,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/cT7Z8fKLqRU/mqdefault_6s.webp?du=3000&sqp=COrwmqwG&rs=AOn4CLBJbk7LpiYd_JDvh-OmToOj6qPOGg",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "Streamed 1 month ago",
//       "stats": {
//         "views": 5700762
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/cT7Z8fKLqRU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjD8QGuHdpxWfa-QnIThttVG0mFQ",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/cT7Z8fKLqRU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHSJcPpHncAq2CB-rV8FBW2ZD5RA",
//           "width": 720
//         }
//       ],
//       "title": "BEAUTIFUL CHRISTMAS MUSIC 2024: Best Christmas Songs of All Time for Relax, Sleep, Study",
//       "videoId": "cT7Z8fKLqRU"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZRa5Va4SmzMZdW_oxYTjabKqx3tGBSG9-ZFGG_c0w=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@NileRed",
//         "channelId": "UCFhXFikryT4aFcLkLw2LBLA",
//         "title": "NileRed"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 3200,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/d6Pcp944sRI/mqdefault_6s.webp?du=3000&sqp=CNLsmqwG&rs=AOn4CLBG1-cy1KS3wGZD7gXANr-yl2Bm5A",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "15 hours ago",
//       "stats": {
//         "views": 2221709
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/d6Pcp944sRI/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEQoYTAP&rs=AOn4CLCMlkzRYOFoGO3DkS46orTasyoGbA",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/d6Pcp944sRI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEQoYTAP&rs=AOn4CLBYr8jPixxy1_yGXBbfLwddKoW6Kw",
//           "width": 720
//         }
//       ],
//       "title": "Making purple gold",
//       "videoId": "d6Pcp944sRI"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/23TuXHVGFOQNJ--nGIH3sbX5Tt1pscojy3lHhHJB3T9IcowEFJHJqORL7o1Gw-4WrrLMFFknLQ=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@DharMann",
//         "channelId": "UC_hK9fOxyy_TM8FJGXIyG8Q",
//         "title": "Dhar Mann Studios"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 914,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/GHqwK-_osLs/mqdefault_6s.webp?du=3000&sqp=CLDfmqwG&rs=AOn4CLCtdAe7uX1Vaf43uv9s1qzoIoAF4A",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "1 month ago",
//       "stats": {
//         "views": 12704050
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/GHqwK-_osLs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAIQHsCT6kjp7bqRykaQ9Y1D13GA",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/GHqwK-_osLs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJHn8_sNjU6M5z59nZ3B49-lGdnQ",
//           "width": 720
//         }
//       ],
//       "title": "15-Year-Old BILLIONAIRE Gets BULLIED, What Happens Next Is Shocking | Dhar Mann Studios",
//       "videoId": "GHqwK-_osLs"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZQ2o_8O0C-u3jGZZX6jsT-So1-DTg5GuvFiTAGA5g=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@Scambaiter",
//         "channelId": "UCV_w9-UYod7bPbazMW7Zp4A",
//         "title": "Scambaiter"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1392,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/oE-fPpjYDVY/mqdefault_6s.webp?du=3000&sqp=CKTwmqwG&rs=AOn4CLDgtEhJTc74eQETeivrcpMUsj-n_g",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "2 weeks ago",
//       "stats": {
//         "views": 2421513
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/oE-fPpjYDVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGziCpvrJAYa3gEKKGLLe66mO4VQ",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/oE-fPpjYDVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALITROwN4AzpHB-NdzhW558naajQ",
//           "width": 720
//         }
//       ],
//       "title": "SCAMMERS Get ARRESTED Live On Camera! (POV)",
//       "videoId": "oE-fPpjYDVY"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/E6aCdB-Kgx60Y1ZJ-c_YFwHYa7Eah5Bu33kNVoGogzv3WfTQUjLjCItlF8JwOZMdNVYRPkuiVQ=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@SaturdayNightLive",
//         "channelId": "UCqFzWxSCi39LnW1JKFR3efg",
//         "title": "Saturday Night Live"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 309,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/bv8MDqVrRH0/mqdefault_6s.webp?du=3000&sqp=CL77mqwG&rs=AOn4CLBYbl2biKhAl9GuOONNT_NcvIvkag",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "6 days ago",
//       "stats": {
//         "views": 2122495
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/bv8MDqVrRH0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhDMxS1Io6VffnJ-IepUxzvURVbg",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/bv8MDqVrRH0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8qmPJbQgOXjk9HIo3E0pEpRTluQ",
//           "width": 720
//         }
//       ],
//       "title": "Whiskers R We with Billie Eilish - SNL",
//       "videoId": "bv8MDqVrRH0"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZRRZnTyzGuDAAURI6j0RSBatEIDHVEeAl6idjcmBg=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@DrEricBergDC",
//         "channelId": "UC3w193M5tYPJqF0Hi-7U-2g",
//         "title": "Dr. Eric Berg DC"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 486,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/2zaVRd4sNpM/mqdefault_6s.webp?du=3000&sqp=CMr6mqwG&rs=AOn4CLB2aTXJrjwpc_d189ECQahVARONZg",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "2 days ago",
//       "stats": {
//         "views": 564372
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/2zaVRd4sNpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIixHxy6CKCS9GwekmL2uYnZduFQ",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/2zaVRd4sNpM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1JVwYg9DVMZCl7--1rw4IsjdznA",
//           "width": 720
//         }
//       ],
//       "title": "The CARB More Deadly than Sugar (SURPRISING)",
//       "videoId": "2zaVRd4sNpM"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/qzUi-hOEqkfKelIthhTpyAIRYAjmrrY9DAD9vDMz29VRZEkHlC9lK11gRqT0A1C1FrIswEOGOA=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [],
//         "canonicalBaseUrl": "/@RamitheiconClips",
//         "channelId": "UCeO4FT-qyyQnvCAsaMr9anA",
//         "title": "RamitheiconClips"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 911,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/EwaDK1FcMdM/mqdefault_6s.webp?du=3000&sqp=COm9mqwG&rs=AOn4CLD6skdzuT_3UVNgte_53aL1pIiZ6g",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "2 weeks ago",
//       "stats": {
//         "views": 1862730
//       },
//       "thumbnails": [
//         {
//           "height": 270,
//           "url": "https://i.ytimg.com/vi/EwaDK1FcMdM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYg6Tch4-yeYmreefW71AZBDOhsQ",
//           "width": 480
//         }
//       ],
//       "title": "Worlds TOP 5 Rarest Sneakers!",
//       "videoId": "EwaDK1FcMdM"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/J3u3Ur0yv_eh75URRCU8QmMp8ikDBNsUY7uZx6L6eSxUrIIu8SFjB7h8s_-AFL1JJmTdxTZL9Q=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@LofiGirl",
//         "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
//         "title": "Lofi Girl"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 23525,
//       "movingThumbnails": null,
//       "publishedTimeText": "1 year ago",
//       "stats": {
//         "views": 31063417
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/n61ULEU7CO0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsbMTx1evh72jfc4JDtfDXYVhYNg",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/n61ULEU7CO0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi4TCpAtbxLFIBULRlcZHudl1uFw",
//           "width": 720
//         }
//       ],
//       "title": "Best of lofi hip hop 2021 ✨ [beats to relax/study to]",
//       "videoId": "n61ULEU7CO0"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZTmA_CQzYelqvjS_7gqolfH8HAqeyJSSF_g0mFq=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@BikesandBeards",
//         "channelId": "UCEbCRO739v3_RDmv6_aw1QQ",
//         "title": "Bikes and Beards"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1610,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/LPOIlNPvkZY/mqdefault_6s.webp?du=3000&sqp=CPznmqwG&rs=AOn4CLAu653RTF9JK3WBIDMdQu35c9vf-w",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "7 days ago",
//       "stats": {
//         "views": 692634
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/LPOIlNPvkZY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrnXj0ClxEZytatK14202WJ0UEiw",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/LPOIlNPvkZY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDY1h60FMe07SXwl-6FcX9QJwezjg",
//           "width": 720
//         }
//       ],
//       "title": "I Bought Amazons Cheapest & Most Expensive Electric Dirt Bikes",
//       "videoId": "LPOIlNPvkZY"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/MIC7bffVwtZmCanRdo51mswcg5ZYmK870VrigV7Z3aLzVktQEdPNZAYTiHAzuJmHgNeS5JGiRg=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [],
//         "canonicalBaseUrl": "/@Infamous69",
//         "channelId": "UCkAU1z5u7qMtGV0ISWrELdA",
//         "title": "Relaxing World"
//       },
//       "badges": [
//         "LIVE"
//       ],
//       "isLiveNow": true,
//       "lengthSeconds": null,
//       "movingThumbnails": null,
//       "publishedTimeText": null,
//       "stats": {
//         "viewers": 2073
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/LOf_CEQNYBY/hq720_live.jpg?sqp=CNz9mqwG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsuphqmZ8ktclfvUo0l8vjlGwXXw",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/LOf_CEQNYBY/hq720_live.jpg?sqp=CNz9mqwG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfT3tJXKaG8q0Mi5z2K0DzB2SmuA",
//           "width": 720
//         }
//       ],
//       "title": "Christmas Music Ambience with Instrumental Christmas Music & Crackling Fireplace 🎄 Merry Christmas!",
//       "videoId": "LOf_CEQNYBY"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/PLsX6LIg5JbMJR9v7eTD7nQOPmZN16_X7h_uACw5qeWLAewiNfasZFsxQ48Dn8wZ_4McKUPZSA=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@failarmy",
//         "channelId": "UCPDis9pjXuqyI7RYLJ-TTSA",
//         "title": "FailArmy"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 764,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/zJqzjDX-XFU/mqdefault_6s.webp?du=3000&sqp=CO--mqwG&rs=AOn4CLDI46dxphMeW2yIXzRHk6GUINDEgA",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "2 days ago",
//       "stats": {
//         "views": 2092800
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/zJqzjDX-XFU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5u3O2biUM-U-w-MI1XV4MzL-1aQ",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/zJqzjDX-XFU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVvTEs1d_1C4m9lUjbSt4vx8_f1g",
//           "width": 720
//         }
//       ],
//       "title": "Best CCTV Fails of 2023! | Try Not to Laugh",
//       "videoId": "zJqzjDX-XFU"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/I-dXgrTxIF4cOK5IjbKKptW4w6bcogkcPkxrFnYqwswGxJc7F3DYOFbTKgQ4rCAWJhQwAqRz1w=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@h0ser",
//         "channelId": "UCAiEWppTvoNSHU939xhMb2g",
//         "title": "hoser"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1149,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/S3NO9VhUoEE/mqdefault_6s.webp?du=3000&sqp=CJH0mqwG&rs=AOn4CLCT6RipfwIprHpCqPXTsmYGyG9Nsw",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "1 day ago",
//       "stats": {
//         "views": 600663
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/S3NO9VhUoEE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbuaMTmZd1KAxX5pTewheLEQG89w",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/S3NO9VhUoEE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCD1awtWgzCzysSAWQMJEUGD5hSmg",
//           "width": 720
//         }
//       ],
//       "title": "Africa's North Korea",
//       "videoId": "S3NO9VhUoEE"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/UbDV9WXyPGb0Q0QC2lH274TOV0Zr-d8pFQPNi9WAmRlp7fTP59dOoTvYMNpqDIJ5ouJseesA=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@AdamStew",
//         "channelId": "UCImE4SlRS79SqsMfLMol-6g",
//         "title": "Adam Stew"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 966,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/JHVDOvgF_uc/mqdefault_6s.webp?du=3000&sqp=CLX9mqwG&rs=AOn4CLAccR6iXVs6cnsJOvBBJhQGQV9JuQ",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "2 weeks ago",
//       "stats": {
//         "views": 1899907
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/JHVDOvgF_uc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIE0OK8wKqq2MoMs_iQ_yPgW55FA",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/JHVDOvgF_uc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCL1fqTCOSb8ROC4lA_AWG8VR7iuQ",
//           "width": 720
//         }
//       ],
//       "title": "Winter Camping In Inflatable Cabin | Snow Storm + Bear Tenderloins",
//       "videoId": "JHVDOvgF_uc"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZQsHoe5Z2z-_owpVULpoM2mFi5mTEP4fUzDAhrJrA=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@BetaSquad",
//         "channelId": "UCxOzbkk0bdVl6-tH1Fcajfg",
//         "title": "Beta Squad"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1434,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/bXP_BIrF3Ak/mqdefault_6s.webp?du=3000&sqp=CNnvmqwG&rs=AOn4CLDVIPcV_2rabtY1tjRpDA6xzzbh0w",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "1 year ago",
//       "stats": {
//         "views": 17716696
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/bXP_BIrF3Ak/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaY4j1YSR0YvAzxV6wfVpMf9yXjQ",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/bXP_BIrF3Ak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_RnOTAfTKkX_83MCIsSN8J79XEw",
//           "width": 720
//         }
//       ],
//       "title": "6 White People Vs 1 Secret Black Person (FINALE)",
//       "videoId": "bXP_BIrF3Ak"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/zcs1leNSr4HhRn-_IHzR3CA_U3Tt7AN7jQVgKkIIgpVKoXyr9a2nzl3g7mhWirvrKzfUAD4cYN0=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@CozyCoffeeShopOfficial",
//         "channelId": "UCIWAwKP3_KcWned5aLqZHtw",
//         "title": "Cozy Coffee Shop"
//       },
//       "badges": [
//         "LIVE"
//       ],
//       "isLiveNow": true,
//       "lengthSeconds": null,
//       "movingThumbnails": null,
//       "publishedTimeText": null,
//       "stats": {
//         "viewers": 764
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/B7nut0m6HBQ/hq720_live.jpg?sqp=CNz9mqwG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCelzDK4JD49BMiIFFqJN8NUlKvEg",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/B7nut0m6HBQ/hq720_live.jpg?sqp=CNz9mqwG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCOx7LSgZB7I9cc7uUsebRHhrEbg",
//           "width": 720
//         }
//       ],
//       "title": "Cozy Christmas Coffee Shop Ambience🎄Sweet Christmas Jazz Instrumental Music with Crackling Fireplace",
//       "videoId": "B7nut0m6HBQ"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZSTGgcchWhWf4qLbOaiNrTS2y9y7uZQduFllN4klA=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@MrBeast",
//         "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
//         "title": "MrBeast"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1628,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/9RhWXPcKBI8/mqdefault_6s.webp?du=3000&sqp=CJfomqwG&rs=AOn4CLC6fUqgkstPG3SnEIcHqmhBDu7QjQ",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "6 days ago",
//       "stats": {
//         "views": 99124839
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/9RhWXPcKBI8/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDwoEzAP&rs=AOn4CLDnuOvG2ban47zbeJxkF-aMCPWAyg",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/9RhWXPcKBI8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDwoEzAP&rs=AOn4CLAO3PZmvFo0a6mQuDPV0KOKiB3JdA",
//           "width": 720
//         }
//       ],
//       "title": "Survive 100 Days Trapped, Win $500,000",
//       "videoId": "9RhWXPcKBI8"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/2sYYb_3kO4LGiT1kr9CEhLP2_d-YBrYRUI3b7L4grvlUqblyg1jz1lFX96NzeNkL3OzgifPd=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [],
//         "canonicalBaseUrl": "/@-ChristmasAmbience",
//         "channelId": "UCY4sReUWNjfzFPjp96GdOfg",
//         "title": "Christmas Ambience"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 18929,
//       "movingThumbnails": null,
//       "publishedTimeText": "3 days ago",
//       "stats": {
//         "views": 98148
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/apZ_5Np3HJU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA60VyWxmo8WrMmhl4Z2C8r6oDeEA",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/apZ_5Np3HJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrDXK4qqP2UwlB0J0hSWHmF_pSpg",
//           "width": 720
//         }
//       ],
//       "title": "3 Hours Classic Christmas Music with Fireplace 🎅🏼 Christmas Songs Playlist 🎄 Merry Christmas 2023",
//       "videoId": "apZ_5Np3HJU"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/3E0lg34XmSIQlUS9txkzEgxugosUvcS5mMnOhesMwXuJ0Yk151vNzEm6tVf1LbsQ3ISY3ALn5w=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@BrightSunFilms",
//         "channelId": "UC5k3Kc0avyDJ2nG9Kxm9JmQ",
//         "title": "Bright Sun Films"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1504,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/Y4PD4xvsivw/mqdefault_6s.webp?du=3000&sqp=CID3mqwG&rs=AOn4CLDDVBJn_pHkpjSV-cbEE057PZujvw",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "7 days ago",
//       "stats": {
//         "views": 843990
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/Y4PD4xvsivw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxEL9tZS0ib5apoPBMrELaiS1f8A",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/Y4PD4xvsivw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAavh8TJjQZWi3ThSlwCek7mm0K-w",
//           "width": 720
//         }
//       ],
//       "title": "Abandoned - Nickelodeon Studios Florida",
//       "videoId": "Y4PD4xvsivw"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/XH-XdwPK-3whQomXtG5JTgC7aaRfawLlljCKkDiShJdNVruYtDs0gNnWjYvp0j6RtCsDlVdZhg=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@GeographyByGeoff",
//         "channelId": "UC7-Z34pbJ0ZAOJRmUCEz0Cg",
//         "title": "Geography By Geoff"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 737,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/Bgw6OMnTr9I/mqdefault_6s.webp?du=3000&sqp=CLzumqwG&rs=AOn4CLANyO_u-yspHF4KZ2Hq4OvWJCBYgg",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "11 days ago",
//       "stats": {
//         "views": 1619005
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/Bgw6OMnTr9I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1KY4cQKBoEMhRRyv-G7gqkWAMGg",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/Bgw6OMnTr9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB57BWaGqBrgia1CtaYf4P-poOfMQ",
//           "width": 720
//         }
//       ],
//       "title": "Why \"Nobody\" Lives In Northern And Western Minnesota",
//       "videoId": "Bgw6OMnTr9I"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/ytc/AIf8zZT-m0H9rV5kO_AjrCDhNcMjuGbgi4TQXjUbgkRl1A=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@safiya",
//         "channelId": "UCbAwSkqJ1W_Eg7wr3cp5BUA",
//         "title": "Safiya Nygaard"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 1784,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/ajbooXnvsE8/mqdefault_6s.webp?du=3000&sqp=CLrnmqwG&rs=AOn4CLAP5IgcRL-iMdMy8hBAi6bVRY3Y1A",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "5 days ago",
//       "stats": {
//         "views": 1701860
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/ajbooXnvsE8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDaE0YxspAOW3HitXg7xp35ZTEzw",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/ajbooXnvsE8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8KPXjDH-nrbh45Z8k2DtXbtWidg",
//           "width": 720
//         }
//       ],
//       "title": "I Took A 52-Hour Sleeper Train From San Francisco To Chicago",
//       "videoId": "ajbooXnvsE8"
//     }
//   },
//   {
//     "type": "video",
//     "video": {
//       "author": {
//         "avatar": [
//           {
//             "height": 68,
//             "url": "https://yt3.ggpht.com/nY-CGQ6Ozw8hTuyqQwiKUg8pvRTNuH8bSaVZDuftORLMEXqbtuJ7zpVk1R5A5LqXjpgUE1ViEPc=s68-c-k-c0x00ffffff-no-rj",
//             "width": 68
//           }
//         ],
//         "badges": [
//           {
//             "text": "Verified",
//             "type": "VERIFIED_CHANNEL"
//           }
//         ],
//         "canonicalBaseUrl": "/@InsiderNews",
//         "channelId": "UCHjm6wybRbldhqveS7c2WTA",
//         "title": "Insider News"
//       },
//       "badges": [],
//       "isLiveNow": false,
//       "lengthSeconds": 602,
//       "movingThumbnails": [
//         {
//           "height": 180,
//           "url": "https://i.ytimg.com/an_webp/SKyoc_XkWEQ/mqdefault_6s.webp?du=3000&sqp=CNDhmqwG&rs=AOn4CLBShk8Iqg4XwT_dK5udbrzOG6FJ1A",
//           "width": 320
//         }
//       ],
//       "publishedTimeText": "7 days ago",
//       "stats": {
//         "views": 2520840
//       },
//       "thumbnails": [
//         {
//           "height": 202,
//           "url": "https://i.ytimg.com/vi/SKyoc_XkWEQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUP_qrf7ONukX3_RlSzEAGk8G80g",
//           "width": 360
//         },
//         {
//           "height": 404,
//           "url": "https://i.ytimg.com/vi/SKyoc_XkWEQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ7HB5SZjzllq8QJ8zE_E55XlbEQ",
//           "width": 720
//         }
//       ],
//       "title": "Risking Death in the Name of 'Natural Viagra' | Risky Business | Insider News",
//       "videoId": "SKyoc_XkWEQ"
//     }
//   }
// ]

