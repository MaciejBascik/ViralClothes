"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

import { getVideos } from "../../../../../lib/apiGetVideos";
import { useUser } from '@auth0/nextjs-auth0/client';
import LoginButton from "../../../../../components/LoginButton";
import { useSearchParams,useRouter  } from 'next/navigation'
<<<<<<< HEAD
import LoadingPage from "@/app/loading";
=======

let responseData = [{
    "code": 0,
    "msg": "success",
    "processed_time": 0.7393,
    "data": {
      "videos": [
        {
          "aweme_id": "v0f044gc0000cp5mh1fog65lc36b9u1g",
          "video_id": "7371101961053048097",
          "region": "DE",
          "title": "Was ist eurer Meinung nach der most overrated Trend von 2023?🤔 @jstin  #peso #jstin #justinfuchs #pesoclothing #asaprocky #lilyachty #gunna #centralcee #puma #drake #blokecore #kendricklamar #oldmoney #oldmoneystyle #style #fashion #mode #autos #jogger #sneaker #sneakers #deutschland #streetwearde #straßenumfragen #fashiontiktok #fashiontalk #streetinterview #umfrage #deutsch #fashion #streetwear #underrated #overrated #interview ",
          "cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/c4cb0cb20db34e75b421b866bbed005f_1716218423~tplv-dmt-logom:tos-useast2a-i-0068-euttp/o4RMlAMJQGIQAEQg8IAggfAWfttnBkGRMe3jeq.image?biz_tag=musically_video.video_cover&l=2024052313384895FCDE015CBB820000B9&lk3s=d05b14bd&nonce=36467&refresh_token=c65cabc4ad97b9ccbd5a2df3932f0e0d&s=SEARCH&sc=cover&se=false&sh=&shcp=811c9dc5&shp=d05b14bd&x-expires=1716555600&x-signature=s31x9XWbcMHC5VPutIROVo3AFJo%3D",
          "ai_dynamic_cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/3c313df91b2b4dc1ae9d10bc25577f71_1716218424~tplv-dmt-logom:tos-useast2a-i-0068-euttp/o4RMlAMJQGIQAEQg8IAggfAWfttnBkGRMe3jeq.image?lk3s=d05b14bd&nonce=86264&refresh_token=cf6cfcfdf86d6c78b8dcbc90961946c9&x-expires=1716555600&x-signature=DEXvxO3HF6qMKPykg2NYV9rUYP8%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/d8e1c7102d564cfbbcedeba151c9182c_1716218423~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=52815&refresh_token=e2dcc8e7e4daca0b0469d33214949f1d&x-expires=1716555600&x-signature=CW%2FFSAiKPKkJCD6VyHvFVipNIrE%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 63,
          "play": "https://v16m.tiktokcdn-us.com/a0fb50b7918123b9b9b30b7b8f85a33d/664f9b88/video/tos/useast2a/tos-useast2a-ve-0068-euttp/oEBRDEQlIwmQpiEkEBLGePFHZSD9aDf2qsAaiF/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1820&bt=910&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=Z2ZmZzs7Mzs1NGVlOzpkaUBpanhlNm85cjRwczMzZjczM0AvYzJgLjNiNmAxYl4zLS4vYSMuNjNgMmRjZTJgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "wmplay": "https://v16m.tiktokcdn-us.com/771aebf290df534fbff5f8cd38ab77e6/664f9b88/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/osRlUDFlAqVEeQkmD2PFEipSIBZfuHTLrQDaEw/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1882&bt=941&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=Z2k5ZWVkaWQ5ZmRnaGUzaEBpanhlNm85cjRwczMzZjczM0AzXy40MmI1XjIxYGFeMy02YSMuNjNgMmRjZTJgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "music": "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-euttp/7371101979462175521.mp3",
          "music_info": {
            "id": "7371101988672654113",
            "title": "original sound - samirhoma",
            "play": "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-euttp/7371101979462175521.mp3",
            "cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/9306d7039f29a846d2ad11052db22fd1~c5_1080x1080.jpeg?lk3s=45126217&nonce=26828&refresh_token=be9462e92e879b162eab5b08a55a8e09&x-expires=1716555600&x-signature=umbAszxKmw5qfB%2BMcpRB3jARDeg%3D&shp=45126217&shcp=811c9dc5",
            "author": "Sami",
            "original": true,
            "duration": 63,
            "album": ""
          },
          "play_count": 293022,
          "digg_count": 30739,
          "comment_count": 116,
          "share_count": 126,
          "download_count": 0,
          "create_time": 1716218420,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6794648323413754885",
            "unique_id": "samirhoma",
            "nickname": "Sami",
            "avatar": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/9306d7039f29a846d2ad11052db22fd1~c5_300x300.jpeg?lk3s=45126217&nonce=33118&refresh_token=0adfd4fc0e298653149da854f1bf17be&x-expires=1716555600&x-signature=7bdENBi1ItJfE2yhcpS6pzMo9mI%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v09044g40000con93b7og65uub8k2u60",
          "video_id": "7362983153323019525",
          "region": "PE",
          "title": "La marca más versátil de ropa para hombres 💎 Y es que mi marca favorita siempre será @RomeClothing 🔥 #gamarrafashion #fashionblogger #oufitinspiration #aesthetic #outfitideas #oufitinspiration #streetwear #oldmoney #fyp #viral ",
          "cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/4458cbb578ce4bc8be9547ee489ec76c_1714328156~tplv-dmt-logom:tos-useast2a-v-0068/oQJDbAPAEARAI2FQmp5AwkpfeN5RCqELuEBZkq.image?biz_tag=musically_video.video_cover&l=2024052313384895FCDE015CBB820000B9&lk3s=d05b14bd&nonce=30091&refresh_token=b3a58fd290c36acd68d4710b9f22c852&s=SEARCH&sc=cover&se=false&sh=&shcp=811c9dc5&shp=d05b14bd&x-expires=1716555600&x-signature=tnqHUqzF7pDDha7%2FkL4kamdP2hM%3D",
          "ai_dynamic_cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/5831589d5a1248fe90a221dfcf4e05bb_1714328158~tplv-dmt-logom:tos-useast2a-v-0068/oQJDbAPAEARAI2FQmp5AwkpfeN5RCqELuEBZkq.image?lk3s=d05b14bd&nonce=96271&refresh_token=4847092ec48280e48b6f3fb1be3673cb&x-expires=1716555600&x-signature=NMv0WOOssxTrgYD2FDZ9Bw0Vt0A%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/cd92e950d6af42cca350ec40ccc674f9_1714328155~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=5362&refresh_token=be802f4de7e8d6d810e19f7693ab1402&x-expires=1716555600&x-signature=UEbI5tTeS03fOqCB8liTHsP%2B7Zg%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 62,
          "play": "https://v16m.tiktokcdn-us.com/776336b729a488a23b0ea0785d273581/664f9b87/video/tos/useast2a/tos-useast2a-ve-0068c002/oUfmACR0ERDLKupESkFGsQeoBYVaIQB9p8gJ5A/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2880&bt=1440&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=NjU4ZmY8NTw3aTNmNGg7ZEBpM3huZXg5cmU8cjMzNzczM0BeNV5eYzJgXjYxLy0wNTE0YSMzLzVyMmQ0MGtgLS1kMTZzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "wmplay": "https://v16m.tiktokcdn-us.com/d2ef2003a243215f0fcbce943cef1a9d/664f9b87/video/tos/useast2a/tos-useast2a-ve-0068c003/oUmEBLsJfIAp8Z4aCjNGdfgvYQE95BDpmQKRAF/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=3280&bt=1640&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OWZnNDc5Mzs6N2QzZDkzOUBpM3huZXg5cmU8cjMzNzczM0AuYzE2NTMtXjExMV5hYC4uYSMzLzVyMmQ0MGtgLS1kMTZzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "music": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/oMFfDanHgD07VzfQy48bC8uf3nMcPlh0xgWMXA",
          "music_info": {
            "id": "7205297463144499202",
            "title": "Midnight Club",
            "play": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/oMFfDanHgD07VzfQy48bC8uf3nMcPlh0xgWMXA",
            "cover": "https://p77-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/3f3779f059df472f96b0cb0431e2be2d.jpeg",
            "author": "",
            "original": false,
            "duration": 60,
            "album": "Midnight Club"
          },
          "play_count": 213269,
          "digg_count": 12337,
          "comment_count": 245,
          "share_count": 983,
          "download_count": 37,
          "create_time": 1714328110,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6939584378066633734",
            "unique_id": "braindeadmartin",
            "nickname": "Martin Ludeña",
            "avatar": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0cbd3296d5b245d8b422f5a6aeafc91f~c5_300x300.jpeg?lk3s=45126217&nonce=38181&refresh_token=019bc7ba06ca28eef660fa90a5d87047&x-expires=1716555600&x-signature=JeEYkoHFDRZoG9FvXnvMKqwQCw4%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v0f044gc0000conrh0nog65t9sqlmg70",
          "video_id": "7363306797572082976",
          "region": "FR",
          "title": "Sometimes i wanna dress like this … #streetwear #stockholmstyle #oldmoney #outfit ",
          "cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/962fa2ce8e6d4debb3337e98fffc4e2d_1714403471~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=7P%2F1%2BRXQ25zxvapz%2Bn1vJ9kQoTY%3D",
          "ai_dynamic_cover": "https://p16-sign-useast2a.tiktokcdn.com/obj/tos-useast2a-p-0037-euttp/41e97c6738cd40c3a6989d26d32c7356_1714403472?lk3s=d05b14bd&nonce=68631&refresh_token=458e9dafa34381c0ca5db17096295912&x-expires=1716555600&x-signature=5YjWc0fWkZhW2nJ%2B8fD59TbL7aE%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/504eb7e0119d4bfab28811349137c673_1714403471~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=91087&refresh_token=cdcb76d3e45d949233e31a89c94f6086&x-expires=1716555600&x-signature=X%2FQ8hO3Qscv0J%2FQwWamuYLZHXLA%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 7,
          "play": "https://v16m.tiktokcdn-us.com/0977337a0a610d4d75e82094ec56bb20/664f9b50/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oMzuJJxOzUhFKQVvA9iio4BgCFAIhLXEITvbne/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1282&bt=641&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OjxoOTVkOjg4ZzszZzhkZUBpM2pvdnc5cjN1cjMzZjczM0AuYTItMS42Xl8xYTBfNS80YSM0am42MmRrZWtgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "wmplay": "https://v16m.tiktokcdn-us.com/0977337a0a610d4d75e82094ec56bb20/664f9b50/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oMzuJJxOzUhFKQVvA9iio4BgCFAIhLXEITvbne/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1282&bt=641&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OjxoOTVkOjg4ZzszZzhkZUBpM2pvdnc5cjN1cjMzZjczM0AuYTItMS42Xl8xYTBfNS80YSM0am42MmRrZWtgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "music": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7322546924501240618.mp3",
          "music_info": {
            "id": "7322546917668342570",
            "title": "original sound - drewjoiner",
            "play": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7322546924501240618.mp3",
            "cover": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ef30104a5b36ed807915c38700b3baaf~c5_1080x1080.jpeg?lk3s=45126217&nonce=43478&refresh_token=c391fcab8447822194133b63ad7bc038&x-expires=1716555600&x-signature=P7KDW5A6hw45tPwLwsH89gqGOXw%3D&shp=45126217&shcp=811c9dc5",
            "author": "Drew Joiner",
            "original": true,
            "duration": 8,
            "album": ""
          },
          "play_count": 95718,
          "digg_count": 11230,
          "comment_count": 24,
          "share_count": 733,
          "download_count": 0,
          "create_time": 1714403469,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6745123349288158213",
            "unique_id": "matt.bqt",
            "nickname": "Matt",
            "avatar": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3837db2131bd3f4047508b160f75200d~c5_300x300.jpeg?lk3s=45126217&nonce=465&refresh_token=fe91cca0b56be53e8edbac213b380e5d&x-expires=1716555600&x-signature=TUWCG9jFSzwLCx%2B9rHhFVlSj3XA%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v0f044gc0000cp4c9bvog65l4mvh59c0",
          "video_id": "7370357800469384480",
          "region": "AT",
          "title": "Replying to @Asia #fashiontok #shoppingaddict #summerfashion #pinterestfashion #pinterestgirl #streetwear #thatgirl #itgirl #OOTD #outfitinspo #fashiontrends #pullandbear #stockholmstyle #laidback #oldmoney #aesthetic ",
          "cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/01be40a62006425b87c5ffa4e6122a76_1716045174~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=peWss9ebr3NpmRj%2BqMPZiVqyAa4%3D",
          "ai_dynamic_cover": "https://p16-sign-useast2a.tiktokcdn.com/obj/tos-useast2a-p-0037-euttp/25169d9121764d5eb8fa88b748406d15_1716045174?lk3s=d05b14bd&nonce=76076&refresh_token=0bc0421a8fd5e248f693e7b972aeb13d&x-expires=1716555600&x-signature=UX%2BLskf9GNIcI%2FvUV3emP6oQYr0%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/73f7b4800dc441de9641f56ae99da4d4_1716045174~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=4351&refresh_token=599be67c5cc912166dffa901025b2310&x-expires=1716555600&x-signature=7N1v%2Fz6mMJ%2FUqbDNWDL8yjL8tus%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 12,
          "play": "https://v16m.tiktokcdn-us.com/aa5c9558fb1e4a1dcb76dd41fa6757d7/664f9b55/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oAaSPQvID4fSMBiSQEfvACgPlFS3EmDEMqwRLR/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2844&bt=1422&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=NjM7aTk3NzM4NDY1aTU6NEBpMzxrcG85cmVmczMzZjczM0BhXzAtY2MtNV8xNmMvNTQxYSNgMnMxMmRzNjFgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "wmplay": "https://v16m.tiktokcdn-us.com/9f1bc74d50764882cfe3f1ebd9b44fa3/664f9b55/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/ocfzxGXnJAhi8mYIQESP1CArpJJoXz0bBCIIiB/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2996&bt=1498&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OTpkNDc1PDVpZTM6ZThnZkBpMzxrcG85cmVmczMzZjczM0A0MV4wL2FeNWIxL18zXi5iYSNgMnMxMmRzNjFgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "music": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7063115698620517166.mp3",
          "music_info": {
            "id": "7063120736756271919",
            "title": "prom by sza blackseavfx remix",
            "play": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7063115698620517166.mp3",
            "cover": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/ae6b8f8f8318407aa998e391c0ccf3da~c5_1080x1080.jpeg?lk3s=45126217&nonce=52777&refresh_token=1453f9b770dc52d1224582175f2da625&x-expires=1716555600&x-signature=9LE3kuRXjHMTsxQipXRDTf5WrbQ%3D&shp=45126217&shcp=811c9dc5",
            "author": "leke",
            "original": true,
            "duration": 20,
            "album": ""
          },
          "play_count": 46675,
          "digg_count": 8482,
          "comment_count": 78,
          "share_count": 591,
          "download_count": 39,
          "create_time": 1716045171,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6978891297499530246",
            "unique_id": "linasfaves",
            "nickname": "🎀 𝐋 𝐈 𝐍 𝐀 🎀",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310919100204515333~c5_300x300.jpeg?lk3s=45126217&nonce=46581&refresh_token=cc5e22a3def5a2376e6bed0b887ee504&x-expires=1716555600&x-signature=6xqhA0uRDW1MEWqwLDUldMeRAk4%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v09044g40000cor90qnog65po8flmsjg",
          "video_id": "7365233546329459973",
          "region": "PE",
          "title": "🏷️ GURKHE STONE/ top collection  🌐 COLECCIÓN OLD MONEY 🇵🇪Producto Peruano/ Ciudad heroica de Tacna. . . #ropa #ropahombre #modahombre #tendenciahombre #oufithombre #instastyle #realoutfitgram #igfashion  #outfitideas #ootdshare #ootdfashion  #wiwtoday  #howtostyle  #classystreetwear  #whowhatwearing  #aboutalook #simplehomestyle  #polos #pantalon #camisas #zapatos #zapatillas #poleras #sudaderas #tiendaderopa #storefashion #digostylelife #facebookads #tiktokads #influencer #ecomerce #marca #amor #Love #bloggermoda #modeloderopa #sesiondefotos #oldmoney #follow #aestetic #inspiracionmoda #Fitness #motivacion #fotografia #hacks #trend #barbershop ",
          "cover": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/owv2bQZcraQ5EUSA9aAwhEkBdiWAjBOiIEni9~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=93ZPJ4n5QUj%2Boj%2BIbBRcYhFj8Ko%3D",
          "ai_dynamic_cover": "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a8a2b5c5b37d4361af916dc846baf315_1714852074?lk3s=d05b14bd&nonce=87356&refresh_token=eaf1373ee11d2e2b14e3c64db351d1b7&x-expires=1716555600&x-signature=RcCSXH%2BEmNEvsJaKHw0VxQ1GNGs%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/74a76c171288427bbe33fcb7457bda00_1714852074~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=8470&refresh_token=5f9fa3fabe9add0ee6dafc8d6523eb91&x-expires=1716555600&x-signature=YlELA3CeDF3l0P9%2F4xXygxX0x%2FU%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 11,
          "play": "https://v16m.tiktokcdn-us.com/ef01ec71e72f9f1bbc7897ef23eff4a3/664f9b54/video/tos/useast2a/tos-useast2a-pve-0068/owkAEBZjSUAaPinQ9iQcADbI5E2CvBaw7QhHE/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2756&bt=1378&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OGY1M2ZoNjlmPDRnaDw1OEBpanZvO3M5cnQ8cjMzNzczM0BhMGAtNl5eNi8xL19iNTUyYSNnamNsMmRrLW9gLS1kMTZzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "wmplay": "https://v16m.tiktokcdn-us.com/363828a7ac2869176d6cba30256e407f/664f9b54/video/tos/useast2a/tos-useast2a-ve-0068c002/o0EfpFBLAd2R4Dz5IOIBqhC6ZNEENmeJQgBtQD/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2782&bt=1391&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=aGQ5Ojo1aDo7aTQ0NTZoZ0BpanZvO3M5cnQ8cjMzNzczM0BjM18uNi9gXzIxLWFgMGIuYSNnamNsMmRrLW9gLS1kMTZzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "music": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/oMfVqxCQhzdGIwi5LKmimWRBAckcGMs0Y4oBDA",
          "music_info": {
            "id": "7351200557484985093",
            "title": "BBY BOO (REMIX)",
            "play": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/oMfVqxCQhzdGIwi5LKmimWRBAckcGMs0Y4oBDA",
            "cover": "https://p77-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/oAYAQM61KGI8uAAAEeDFeLJTEGAefQhImPDDzA.jpeg",
            "author": "",
            "original": false,
            "duration": 14,
            "album": "BBY BOO (REMIX)"
          },
          "play_count": 158451,
          "digg_count": 4893,
          "comment_count": 264,
          "share_count": 291,
          "download_count": 11,
          "create_time": 1714852071,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6801678003577848837",
            "unique_id": "digo_style.life",
            "nickname": "𝑫𝑰𝑮𝑶 style life",
            "avatar": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/20b33b6e24528898cba03a174c295f7d~c5_300x300.jpeg?lk3s=45126217&nonce=73805&refresh_token=bf8e106f8f0b0a4f903ee7c4bd53621a&x-expires=1716555600&x-signature=H2CzUyC0J3h5XCjjAjTBmstijzc%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v12044gd0000copdfu7og65hcdun00e0",
          "video_id": "7364187592234962218",
          "region": "US",
          "title": "Are we considering this fashion brainrot? I think so. Honestly thid screams YT/old money yes and anything somewhat tied to minorities as a no 💀 #fashion #streetwear #brainrot #fashiontiktok #fyp #foryou #jordan ",
          "cover": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-p-0068-tx/ogMzALiIEBwzeQGP32ipyz0wcZv1zCAYBAWIBx~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=0v9aI0m2nRfHbb75KER9dTmWsg8%3D",
          "ai_dynamic_cover": "https://p16-pu-sign-useast8.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/a276a32320114e13b4ab909f6fa1f3a7_1714608549?lk3s=d05b14bd&nonce=9348&refresh_token=0b4cd8bfb4762b33427e6e19c3460059&x-expires=1716555600&x-signature=lJM8L0nKjpEdBC%2BRIdHuJRD1ZhA%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/9c45961721d943de828ff908d5b8afea_1714608549~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=21334&refresh_token=b88d92750f4befe840fa608914dd4cf6&x-expires=1716555600&x-signature=b9vDzzbUXYL8nEyB0yAXqPvNbdw%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 78,
          "play": "https://v16m.tiktokcdn-us.com/f7f639ff4b4324de645cbcf5195fe38c/664f9b97/video/tos/useast5/tos-useast5-ve-0068c004-tx/oEiCEpHPWbAI1iCIe2GzYQivcrKB30wBAwxJyA/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=560&bt=280&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OWY5aWk6Z2k6Zzo4aTVmZkBpMzNxZ2s5cnhncjMzZzczNEAvLWI0YmJfXzIxMDE2X2JiYSNiLXJgMmQ0Y21gLS1kMS9zcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "wmplay": "https://v16m.tiktokcdn-us.com/0fe05140fc0903d9cedefb4ace2daefb/664f9b97/video/tos/useast5/tos-useast5-ve-0068c004-tx/oUEJAbEIQHAM4eZfvsFklyJg47frtIAxDCajgi/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=432&bt=216&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OmczNWkzZGg5Njc8Ozg2ZkBpMzNxZ2s5cnhncjMzZzczNEAuYjZfXjUyNWAxYTYxNS01YSNiLXJgMmQ0Y21gLS1kMS9zcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "music": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/o8FjDcNeA7EzFQBsGKorZ4e0agDwgHbfClgin7",
          "music_info": {
            "id": "7021220308539410434",
            "title": "Mysterious and sad BGM(1120058)",
            "play": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/o8FjDcNeA7EzFQBsGKorZ4e0agDwgHbfClgin7",
            "cover": "https://p77-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/43faa110cb7545508bcb8448e005da2d.jpeg",
            "author": "",
            "original": false,
            "duration": 354,
            "album": ""
          },
          "play_count": 13745,
          "digg_count": 1381,
          "comment_count": 28,
          "share_count": 4,
          "download_count": 0,
          "create_time": 1714608547,
          "anchors": [
            {
              "actions": [
                {
                  "action_type": 1,
                  "icon": {
                    "height": 720,
                    "uri": "tiktok-obj/28px_primary_create_onDark3x.png",
                    "url_list": [
                      "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/28px_primary_create_onDark3x.png?biz_tag=anchor.effect&nonce=31018&refresh_token=7c6d8b3906dd4494f8c22844714ddff0&shcp=811c9dc5&shp=45126217"
                    ],
                    "url_prefix": null,
                    "width": 720
                  },
                  "schema": "shoot"
                }
              ],
              "component_key": "anchor_effect",
              "description": "Effects",
              "extra": "{\"effect_source\":0,\"is_commerce\":0}",
              "icon": {
                "height": 720,
                "uri": "tiktok-obj/20px_anchor_effect3x.png",
                "url_list": [
                  "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/20px_anchor_effect3x.png?biz_tag=anchor.effect&nonce=3394&refresh_token=5f75a9452b31a107c9a527c847ac822d&shcp=811c9dc5&shp=45126217"
                ],
                "url_prefix": null,
                "width": 720
              },
              "id": "308665",
              "keyword": "Green Screen",
              "log_extra": "{\"anchor_id\":\"308665\",\"anchor_name\":\"Green Screen\",\"anchor_type\":\"prop\"}",
              "thumbnail": {
                "height": 64,
                "uri": "cfaa5ce4a49351ceb195197df28a788b",
                "url_list": [
                  "https://lf16-effectcdn-va.tiktokcdn.com/obj/ies-fe-effect-va/cfaa5ce4a49351ceb195197df28a788b",
                  "https://lf21-effectcdn-va.tiktokcdn.com/obj/ies-fe-effect-va/cfaa5ce4a49351ceb195197df28a788b",
                  "https://lf19-effectcdn-va.tiktokcdn.com/obj/ies-fe-effect-va/cfaa5ce4a49351ceb195197df28a788b"
                ],
                "url_prefix": null,
                "width": 64
              },
              "type": 28
            }
          ],
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "7050970414831961134",
            "unique_id": "adamecrossbyw",
            "nickname": "Adame Cross",
            "avatar": "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/850b1e1628118e3e7650ad6aeec1c438~c5_300x300.jpeg?lk3s=45126217&nonce=72328&refresh_token=e658515750ad1ba59fc1b248b3f15b4b&x-expires=1716555600&x-signature=Z6sH1TQGaudJCT%2Be4EJgBS%2BJxrI%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v12044gd0000cp1oi3fog65k74a0lc30",
          "video_id": "7368885371607797034",
          "region": "US",
          "title": "Cual es su estilo favorito? 🤔 #parati #fypage #styles #fashiontiktok #trending #viral #viraltiktok #oldmoney #streetwear #starboy #stockholmstyle ",
          "cover": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-p-0068-tx/owHIYexHqAsjGuIgFAQIAbCkFHhLQeiFMwI5fC~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=Kd16RzU%2F9ItNLzZxgIT12BqSLlg%3D",
          "ai_dynamic_cover": "https://p19-pu-sign-useast8.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/2ca3ebbcfdd74510949807d4ce434cef_1715702336?lk3s=d05b14bd&nonce=85239&refresh_token=b3bf21c7dcdadc3524995d0e46567590&x-expires=1716555600&x-signature=MjqbEdjTY0iamO3HgusOsR6eihs%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/80390ce0913a408db0273eb27746fafb_1715702335~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=60529&refresh_token=5782a5417a04d09f24a994374bcfcd4d&x-expires=1716555600&x-signature=9e43UpwCdViFcsoa0zSPc32PQ1I%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 14,
          "play": "https://v16m.tiktokcdn-us.com/5c35a05d770f69c779a5bf1525aead9a/664f9b57/video/tos/useast5/tos-useast5-ve-0068c004-tx/oIABQksDWOzEfAWB0NBcKIGLpIiIiSiwkjQCGR/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1784&bt=892&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=N2Y7NmkzZWg5ZDhoaWRnZ0BpM2YzN245cjZyczMzZzczNEBhNTReNDIyNWIxNDFfLmFeYSMwaV40MmRjZi5gLS1kMS9zcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "wmplay": "https://v16m.tiktokcdn-us.com/3dba72eda058138566307dda2c26f09d/664f9b57/video/tos/useast5/tos-useast5-ve-0068c003-tx/osiBEpUfcksIQwCIGiIzOQiSG0vBRtwBAK0TDA/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2078&bt=1039&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OjxoN2hmaTQ1Ozw0NWkzNEBpM2YzN245cjZyczMzZzczNEAuYl9gYl4vXjMxNS9gYl42YSMwaV40MmRjZi5gLS1kMS9zcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "music": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7336996239438220038.mp3",
          "music_info": {
            "id": "7336996233076706054",
            "title": "original sound - ndsound_check",
            "play": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7336996239438220038.mp3",
            "cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b6d1e5bf7201d1867126d135286c6f7a~c5_1080x1080.jpeg?lk3s=45126217&nonce=60060&refresh_token=caf8f79bfb8ba2ffa8e47e89069147c3&x-expires=1716555600&x-signature=y%2Fv8Ot1p2Cj85PeR0TrFwFceiRg%3D&shp=45126217&shcp=811c9dc5",
            "author": "nadd🩹",
            "original": true,
            "duration": 16,
            "album": ""
          },
          "play_count": 4876,
          "digg_count": 1127,
          "comment_count": 8,
          "share_count": 2,
          "download_count": 0,
          "create_time": 1715702334,
          "anchors": [
            {
              "actions": [
                {
                  "action_type": 1,
                  "icon": {
                    "height": 720,
                    "uri": "tiktok-obj/28px_primary_create_onDark3x.png",
                    "url_list": [
                      "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/28px_primary_create_onDark3x.png?biz_tag=anchor.effect&nonce=89531&refresh_token=89a739eb02f1b02aadd730d46e8dbbc7&shcp=811c9dc5&shp=45126217"
                    ],
                    "url_prefix": null,
                    "width": 720
                  },
                  "schema": "shoot"
                }
              ],
              "component_key": "anchor_effect",
              "description": "Effects",
              "extra": "{\"effect_source\":1,\"is_commerce\":0}",
              "icon": {
                "height": 720,
                "uri": "tiktok-obj/20px_anchor_effect3x.png",
                "url_list": [
                  "https://p77-sg.tiktokcdn.com/obj/tiktok-obj/20px_anchor_effect3x.png?biz_tag=anchor.effect&nonce=88086&refresh_token=c9c14cf71b019323ff9801f6cdc42248&shcp=811c9dc5&shp=45126217"
                ],
                "url_prefix": null,
                "width": 720
              },
              "id": "1501754",
              "keyword": "Green Eyes for Brown Eyes",
              "log_extra": "{\"anchor_id\":\"1501754\",\"anchor_name\":\"Green Eyes for Brown Eyes\",\"anchor_type\":\"prop\"}",
              "thumbnail": {
                "height": 64,
                "uri": "47eebadc7856f0539626841715d472aa",
                "url_list": [
                  "https://lf16-effectcdn-va.tiktokcdn.com/obj/ies-fe-effect-va/47eebadc7856f0539626841715d472aa",
                  "https://lf21-effectcdn-va.tiktokcdn.com/obj/ies-fe-effect-va/47eebadc7856f0539626841715d472aa",
                  "https://lf19-effectcdn-va.tiktokcdn.com/obj/ies-fe-effect-va/47eebadc7856f0539626841715d472aa"
                ],
                "url_prefix": null,
                "width": 64
              },
              "type": 28
            }
          ],
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "7053662908622259206",
            "unique_id": "itsflornavarro_",
            "nickname": "Flor Navarro",
            "avatar": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b9991dece44155b841552eaff95f889f~c5_300x300.jpeg?lk3s=45126217&nonce=61507&refresh_token=fb2e9d1d2eb3856381beb75c16baa911&x-expires=1716555600&x-signature=6tSlCNX160pAuY103LGYqXb1oMs%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v0f044gc0000coptf57og65khf84vja0",
          "video_id": "7364467159625420064",
          "region": "FR",
          "title": "🏘️👔#fashiontiktok #starboy #dress #oldmoney #StreetFashion #streetwear ",
          "cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/66c6bc1d31f348a08728f97c98da01fe_1714678140~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=c3OyTDb3ieGEkB8c7HxNG7be1iQ%3D",
          "ai_dynamic_cover": "https://p16-sign-useast2a.tiktokcdn.com/obj/tos-useast2a-p-0037-euttp/08d4c7d2e87f4e3aac5f44097c366db5_1714678141?lk3s=d05b14bd&nonce=66770&refresh_token=a8b5fd22caa49cfafe208878c29dff5d&x-expires=1716555600&x-signature=X3MpEPYDicqVi8uadN8ZmyUxFuw%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/50037ae6b01f47d6a2f0de41326ca87b_1714673640~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=67423&refresh_token=f0bac1e6feba0b7bde37c8095c8e63ad&x-expires=1716555600&x-signature=EfzyejRVP%2BGzTunUTvLbAchDuPw%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 13,
          "play": "https://v16m.tiktokcdn-us.com/3fbb4ee8ec5726976f499df8f9a12883/664f9b56/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oQAVGIfMeIpgCjNI8oneELrZhGpAL6QSmQfE0g/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1414&bt=707&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=ZThkaGUzZTY4aGc7NWlkZUBpM203aW45cjh3cjMzZjczM0AyLjQtNC8yXi4xYGAwNC9jYSNeczVlMmQ0Y21gLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "wmplay": "https://v16m.tiktokcdn-us.com/3fbb4ee8ec5726976f499df8f9a12883/664f9b56/video/tos/useast2a/tos-useast2a-ve-0068c001-euttp/oQAVGIfMeIpgCjNI8oneELrZhGpAL6QSmQfE0g/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1414&bt=707&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=ZThkaGUzZTY4aGc7NWlkZUBpM203aW45cjh3cjMzZjczM0AyLjQtNC8yXi4xYGAwNC9jYSNeczVlMmQ0Y21gLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "music": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/bc1706f19e7d46daaca17da2560b15da",
          "music_info": {
            "id": "6982541212746008578",
            "title": "Walking Around - Instrumental Version",
            "play": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/bc1706f19e7d46daaca17da2560b15da",
            "cover": "https://p77-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/bb52eed3f6ee4a54a6ca54c96a22e21d.jpeg",
            "author": "",
            "original": false,
            "duration": 177,
            "album": "Something New"
          },
          "play_count": 10426,
          "digg_count": 935,
          "comment_count": 12,
          "share_count": 34,
          "download_count": 0,
          "create_time": 1714673638,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6745123349288158213",
            "unique_id": "matt.bqt",
            "nickname": "Matt",
            "avatar": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3837db2131bd3f4047508b160f75200d~c5_300x300.jpeg?lk3s=45126217&nonce=21985&refresh_token=f64c68c7083d6a500f81f550c1cf9fd1&x-expires=1716555600&x-signature=TUWCG9jFSzwLCx%2B9rHhFVlSj3XA%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v0f044gc0000cp71l37og65htv589nl0",
          "video_id": "7371859075409251617",
          "region": "FR",
          "title": "on va mettre fin au debat old money vs streetwear #sneakers #microtrottoir #microtrottoir #oldmoney ",
          "cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/7673793926224d31abc97157e8c4964f_1716394705~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=HLsrY3fvn0ffzeR16iP7Sjs%2FGW0%3D",
          "ai_dynamic_cover": "https://p16-sign-useast2a.tiktokcdn.com/obj/tos-useast2a-p-0037-euttp/4a95b2fbbefd49bbba902ca7a36d8f0b_1716394706?lk3s=d05b14bd&nonce=82207&refresh_token=1a45ea6de15672aaabfdbc1e4289f5b5&x-expires=1716555600&x-signature=FjZEphW2dp1K7Y4hfZnHoJImg3Y%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-euttp/9a97a90ec00b41ce9052064eac1635ed_1716394705~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=60940&refresh_token=2d09b3f2d177d05f83310880bb2dc238&x-expires=1716555600&x-signature=0RWDpt6pHIfn%2FRT%2F32UIKFD6Dpo%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 29,
          "play": "https://v16m.tiktokcdn-us.com/bcb30429a98800b26df82bc212865c6e/664f9b67/video/tos/useast2a/tos-useast2a-ve-0068-euttp/ogZOPAE3tI0k7BTqkviEaitQEEG8Bjiw4Sxqo/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2534&bt=1267&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=OGRmODU7OWhoZWZkPGc5OEBpM3E7eWs5cjY0czMzZjczM0BjXzUtYzFfXjUxNTUuYS4uYSNpNjJxMmQ0aTRgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "wmplay": "https://v16m.tiktokcdn-us.com/0a8c5cf702f3b627b535e3c7e74544b0/664f9b67/video/tos/useast2a/tos-useast2a-ve-0068-euttp/oYLE3EkitaBjI8xB7ZQ1wzEqGtAOiET4iq0PB/?a=1233&bti=NEBzNTY6QGo6OjZALnAjNDQuYCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2640&bt=1320&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=Zjg4NTs7ODc0Zjo3ZGdlZkBpM3E7eWs5cjY0czMzZjczM0BgNGBeNjAxXi8xLl4zLTY0YSNpNjJxMmQ0aTRgLS1kMWNzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00088000",
          "music": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/ooNkISfEhpolPbiwAQzBMBmAs9ywIAgWCBhLts",
          "music_info": {
            "id": "7291363788900861953",
            "title": "Drake style/HIPHOP beat(1491552)",
            "play": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/ooNkISfEhpolPbiwAQzBMBmAs9ywIAgWCBhLts",
            "cover": "https://p77-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/f66164c9ba674f49b6a324a9f8808e94.jpeg",
            "author": "",
            "original": false,
            "duration": 163,
            "album": ""
          },
          "play_count": 9956,
          "digg_count": 860,
          "comment_count": 16,
          "share_count": 32,
          "download_count": 0,
          "create_time": 1716394703,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "7252723322348160027",
            "unique_id": "antoine.ctrl",
            "nickname": "Antoine",
            "avatar": "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/c58d62fa019568b2cd095fe30a47c5ed~c5_300x300.jpeg?lk3s=45126217&nonce=64785&refresh_token=dcb92baf6231aa5635801e9232daff39&x-expires=1716555600&x-signature=OCHbhq19fPLt9RQ7iAHcC%2BSKs88%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        },
        {
          "aweme_id": "v09044g40000cp16oknog65vhti825m0",
          "video_id": "7368571084364352774",
          "region": "PE",
          "title": "🔴REC LIVE. Videos cortos de nuestros LIVE'S.  🇵🇪Producto Peruano/ Ciudad heroica de Tacna. . . #ropa #ropahombre #modahombre #tendenciahombre #oufithombre #instastyle #realoutfitgram #igfashion  #outfitideas #ootdshare #ootdfashion  #wiwtoday  #howtostyle  #classystreetwear  #whowhatwearing  #aboutalook #simplehomestyle  #polos #pantalon #camisas #zapatos #zapatillas #poleras #sudaderas #tiendaderopa #storefashion #digostylelife #facebookads #tiktokads #influencer #ecomerce #marca #amor #Love #bloggermoda #modeloderopa #sesiondefotos #oldmoney #follow #aestetic #inspiracionmoda #Fitness #motivacion #fotografia #hacks #trend #barbershop ",
          "cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/osSIQEfBRxSEmAbfCzsQxmGJ2F0DEBFSJjABbB~c5_500x800.jpeg?biz_tag=musically_video.video_cover&lk3s=c1333099&x-expires=1716490800&x-signature=zf2g1EzmUz302zHxfyf0ZhIQWsM%3D",
          "ai_dynamic_cover": "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/05ca4a55526f498abe43d3ece1e29e24_1715629157?lk3s=d05b14bd&nonce=1425&refresh_token=1577dbd8706e9c39f8484a5539a52df7&x-expires=1716555600&x-signature=nlg7UkX7snLkTQszu7wKmTSqPAE%3D&s=SEARCH&se=false&sh=&sc=dynamic_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "origin_cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/a2ff977670bd4306a4afb3f21551e05a_1715629156~tplv-tiktokx-360p.webp?lk3s=d05b14bd&nonce=96386&refresh_token=fb4400b0cf7224d3eaa754183df57766&x-expires=1716555600&x-signature=eMCdXcHAqgC%2BUlLUPsjC7txqXFE%3D&s=SEARCH&se=false&sh=&sc=feed_cover&l=2024052313384895FCDE015CBB820000B9&shp=d05b14bd&shcp=811c9dc5",
          "duration": 88,
          "play": "https://v16m.tiktokcdn-us.com/adbeed1782a83e3bf12a8673e1196107/664f9ba2/video/tos/useast2a/tos-useast2a-ve-0068c001/oQSgEjVQQxfRAISHmOEF2NFJEBBCJmfbBFQsDn/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2690&bt=1345&cs=0&ds=6&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=NDg7ODc3OjNnMzdkN2k7OUBpMzg7d3k5cm45czMzNzczM0AzYWBeYC9gX2MxMDQuMzNiYSNqL2ZlMmRrbC5gLS1kMTZzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "wmplay": "https://v16m.tiktokcdn-us.com/7f21168072119c1c6c682d7a4fff8d65/664f9ba2/video/tos/useast2a/tos-useast2a-ve-0068c002/oILiOd9MhAfCCLlgIfsNyj2CSWEeITk6IHYgQG/?a=1233&bti=NTY6QGo0QHM6OjZANDQuYCMucCMxNDNg&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2754&bt=1377&cs=0&ds=3&ft=arR-Iq_wmYaPD12x.7e73wUnDvrIjeF~O5&mime_type=video_mp4&qs=0&rc=ZDdnOGc6aTU2ZmczO2c2NUBpMzg7d3k5cm45czMzNzczM0BeMi1iNTNeXl8xYDVeYGAuYSNqL2ZlMmRrbC5gLS1kMTZzcw%3D%3D&vvpl=1&l=2024052313384895FCDE015CBB820000B9&btag=e00090000",
          "music": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7368571108090104582.mp3",
          "music_info": {
            "id": "7368571107585592070",
            "title": "original sound - digo_style.life",
            "play": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7368571108090104582.mp3",
            "cover": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/20b33b6e24528898cba03a174c295f7d~c5_1080x1080.jpeg?lk3s=45126217&nonce=53846&refresh_token=9ba68664a0d489e235aa59e38212a5b1&x-expires=1716555600&x-signature=NOyPgctiDWD3iGonykdGeqjk55E%3D&shp=45126217&shcp=811c9dc5",
            "author": "𝑫𝑰𝑮𝑶 style life",
            "original": true,
            "duration": 89,
            "album": ""
          },
          "play_count": 55234,
          "digg_count": 623,
          "comment_count": 74,
          "share_count": 25,
          "download_count": 7,
          "create_time": 1715629151,
          "anchors": null,
          "anchors_extras": "",
          "is_ad": false,
          "commerce_info": {
            "adv_promotable": false,
            "auction_ad_invited": false,
            "branded_content_type": 0,
            "with_comment_filter_words": false
          },
          "commercial_video_info": "",
          "item_comment_settings": 0,
          "author": {
            "id": "6801678003577848837",
            "unique_id": "digo_style.life",
            "nickname": "𝑫𝑰𝑮𝑶 style life",
            "avatar": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/20b33b6e24528898cba03a174c295f7d~c5_300x300.jpeg?lk3s=45126217&nonce=73805&refresh_token=bf8e106f8f0b0a4f903ee7c4bd53621a&x-expires=1716555600&x-signature=H2CzUyC0J3h5XCjjAjTBmstijzc%3D&shp=45126217&shcp=811c9dc5"
          },
          "is_top": 0
        }
      ],
      "cursor": 10,
      "hasMore": true
    }
  }]











>>>>>>> 0df9e3a504d6b8dcf19a32b534f1fd89f7adcdbf

function Results() {
    const { user, error, isLoading } = useUser();
    const [videos, setVideos] = useState([]);
<<<<<<< HEAD
    const searchParams = useSearchParams();
    let search = searchParams.get("keywords");
    const router = useRouter();
=======
    const searchParams = useSearchParams()
    const router = useRouter();

    const handleDetails = (id) => {
      const resData = responseData[0]?.data?.videos.find(v => v.video_id === id);
      console.log(resData)
      if (resData) {
        router.push(`/user/feed/result/${id}?video=${encodeURIComponent(JSON.stringify(resData))}`);
    } else {
        console.log("curvba");
    }
  };
                            /*                                                    
    useEffect(() => {
>>>>>>> 0df9e3a504d6b8dcf19a32b534f1fd89f7adcdbf

    const handleDetails = (id) => {
      const resData = videos?.data?.videos.find(v => v.video_id === id);
      if (resData) {
        router.push(`/user/feed/result/${id}?video=${encodeURIComponent(JSON.stringify(resData))}`);
    } 
  };

  
                                                                             
    useEffect(() => {
              getVideos(search)
              .then(data => setVideos(data))
              .catch(error => console.error('Error:', error));


          
        }, []);
<<<<<<< HEAD
        
=======
        */
>>>>>>> 0df9e3a504d6b8dcf19a32b534f1fd89f7adcdbf

        if(isLoading) return <LoadingPage/>;
        if(error) return <h1>Error!</h1>;
    return (
    <div>
        <header className="flex items-center justify-between font-['DM Sans']">
            
            <div className="navbar bg-[#EAEEFE] flex flex-col md:flex-row">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-[18px] md:ml-10 font-light" style={{color:"black"}}>made by
                    <span className="font-[600]">MaciejBaścik</span></Link>
                </div>

                <ul className="menu menu-horizontal px-2 text-[16px] mr-10">
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/#about">About</Link>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/#features">Features</Link>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/#help">Help</Link>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/user/feed">Feed</Link>
                    </li>
                    {user ? (
                        <div>
                    <li style={{color:"black", fontWeight:"500"}}>
                        <Link href="/user/info">@{user.nickname}</Link>
                    </li>

                    </div>
                    ) : (
                    <li className="md:ml-2">
                        <LoginButton>Log in</LoginButton>
                    </li>
                    )}
                    </ul>

            </div>
        </header>
        {user ? (
        <main className="main">
            <div className="hero min-h-screen bg-white">
                
                                      
                <div className="text-center text-neutral-content">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center m-[80px]">



<<<<<<< HEAD
                        {videos?.data?.videos?.map((e, index) => (
                        <div key={index} className="card  h-[30rem] w-[16rem] bg-gradient-to-r from-[#000000] to-[#1c1f29] shadow-xl">
                            <figure>
                                <img src={e.ai_dynamic_cover} className="max-w-[100%] max-h-[500px]"   alt="Video Cover" />
=======
                        {responseData[0].data.videos.map((e, index) => (
                        <div key={index} className="card  h-[30rem] w-[16rem] bg-gradient-to-r from-[#000000] to-[#1c1f29] shadow-xl">
                            <figure>
                                <img src={e.ai_dynamic_cover} className="w-[100%] max-h-[500px]"   alt="Video Cover" />
>>>>>>> 0df9e3a504d6b8dcf19a32b534f1fd89f7adcdbf
                            </figure>
                            <div className="card-body p-[25px] ">
                                <h2 className="card-title flex justify-between items-center overflow-auto">
                                    <span>{e.author.nickname.slice(0, 6)}</span>
                                    {
                                        e.play_count > 100000 && (<div className="badge badge-secondary bg-white border-white">🔥TOP</div>)
                                    }
                                </h2>
                                <p className="text-[14px] text-left">{e.title.slice(0,40)}{e.title.length > 60 && ".."}</p>

                                <div className="flex flex-row mt-10">
                                <div className="card-actions flex-col   w-[70%] overflow-auto">
                                {(e.title.match(/#[a-zA-Z0-9_]+/g) || []).slice(0, 2).map((hashtag, index) => (<>
                                    <div key={index} className="badge badge-outline text-[11px] p-2">{hashtag}</div></>))}
                                                                       
                                </div>
                                <div className="card-actions flex-col 7 w-[30%]">
                                    <button className="btn glass justify-end min-h-[15px] min-w-[65px] text-[13px] text-center items-center" onClick={() => handleDetails(e.video_id)}>See <br/> more</button>
                                                                       
                                </div>


                                </div>
                            </div>
                        </div>
                        ))}

                        

                    </div>
                </div>
            </div>
        </main>
         ) : (
            <div className="hero min-h-screen" id="hero"
            style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)', objectFit:"cover"}}>
            <div className="text-center sm:text-left text-neutral-content max-w-[100%] md:mr-[50%]  mr-0">
              <div>
                <h1
                  className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">
                  Please log in </h1>
                <p
                  className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
                  Looks like you  wandered into the clothes wilderness <br /> without logging in, please log in by clicking button<br /> 
                  to continue your clothing adventure.</p>
                  {!user ? (<LoginButton>Log in with tiktok</LoginButton>) : (<button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>You are logged in.</button>)}
                <button>
                  <Link href="/#about"
                    className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] "
                    style={{color:"black"}}>Learn more
                  </Link>
                  </button>
              </div>
            </div>
          </div>
            )}
</div>
    );
}
export default Results;