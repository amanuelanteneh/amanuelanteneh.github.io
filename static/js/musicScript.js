
var albumPics = ["https://images.genius.com/dc2572caf975df705384d4cb73fcd632.1000x1000x1.jpg","https://images.genius.com/75e00924380679580e1eec2518036101.1000x1000x1.jpg",
   "https://images.genius.com/5443eae847ee7264b28aadbbd6506172.1000x1000x1.jpg", "https://images.genius.com/9a730f4211a37520ef2bffa7e7b6d4e5.1000x1000x1.jpg",
   "https://images.rapgenius.com/3d133ec414db16e54831955e9def643f.1000x1000x1.jpg", "https://images.genius.com/c188db3fb8c0cd48ce3707ab279ee334.1000x1000x1.jpg",
    "https://images.genius.com/40bcd5cc419a7f4d283c62b7e181e156.1000x1000x1.png",
    "https://images.genius.com/882b7e5e56b8b740817a689861b361da.1000x1000x1.jpg", "https://images.rapgenius.com/adbf4ffd825c955a6b9d8449683f3506.900x900x1.jpg",
    "https://images.genius.com/085543ef6e94aaac94a54357f68514aa.1000x1000x1.jpg","https://images.genius.com/1cb37f019090222d0b989faca033f49e.1000x1000x1.jpg",
    "https://images.genius.com/06cc39e9166099cb526ad783affa4d59.1000x1000x1.jpg", "https://images.genius.com/1f77c23ba856976ec0935f5c31a5e6e6.1000x1000x1.jpg",
    "http://images.genius.com/e00c2cd9627558026a8fe51f598f0604.1000x1000x1.jpg","https://images.genius.com/1a1cbb5e577084bd589568deaaa5a5bf.1000x1000x1.jpg",
    "https://images.genius.com/08d1f4a31bd429941363f5454d3b8492.435x435x1.png", "https://images.genius.com/4463b77987a84c57593b9d333b10c9e3.999x999x1.png",
    "https://images.genius.com/87e00d314ce3cca3a6d8e2e26c538845.1000x1000x1.jpg", "https://images.genius.com/c4bb8ce84ca234c188ef096bda62ca4b.1000x1000x1.jpg",
    "http://images.genius.com/5f66b21e0c69ff6c30080f2c6795f025.924x924x1.jpg", "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
    "https://images.genius.com/07a3deb92bfe7c78f95add89edc0e5ed.1000x1000x1.png", "https://images.genius.com/5a4516e086091510752ca9a49bc5bfef.1000x1000x1.png",
    "https://images.genius.com/d3648154d6d90501b1fd53f863ebd4da.933x1000x1.jpg", "https://images.genius.com/e297c3581302abc64415b8c5452fa4a7.1000x1000x1.jpg",
    "https://images.genius.com/8ee275d4d0297661c906d2c352de9bf3.1000x1000x1.jpg", "https://images.genius.com/13735754b81d3308d7912e79da38baf3.1000x1000x1.jpg",
    "https://images.genius.com/801a195d757673ec4ab2c16cd6b6ea79.1000x1000x1.jpg", "https://images.genius.com/6771e2ae82582f12432a330dadd58d5e.500x500x1.png",
    "https://images.genius.com/135e9ae4d19e7816e0ffdd9a95922a0c.1000x1000x1.jpg", "https://images.genius.com/d4e0d43615a542cdcb675478b81d7007.1000x1000x1.jpg",
    "https://images.genius.com/1bcfc018946cc855bf4a5d159878eba9.1000x1000x1.jpg", "https://images.genius.com/cefe9800b2956bb3b06946767fcf8baa.1000x1000x1.jpg",
    "https://images.genius.com/858fc19cb2091093364895e43ccb1264.1000x1000x1.jpg", "https://images.genius.com/cc468733278d1032da7422ad39801897.960x960x1.jpg",
    "https://images.genius.com/907c17462968b0b095c7433b22bbabb4.1000x1000x1.png", "https://images.genius.com/93c577bcd2cce45a2e7063978bcb3b1a.1000x1000x1.png",
    "https://images.genius.com/2d5ddfb7732ae514f3562c0d8fa13305.1000x1000x1.png", "https://images.genius.com/1a12d4214f8dbe1a3fb5fd42b09b6b5d.1000x1000x1.jpg",
    "https://images.genius.com/7aa3bebecdfc0a7f9140c479bcb52182.1000x1000x1.png", "https://images.genius.com/2f8fe2c881a5f12a1e0e01f9eb43191b.1000x1000x1.jpg",
    "https://images.genius.com/a7476d42435ba6e34c7015fcb635cca6.1000x1000x1.jpg"
];
var albumPicElements = document.getElementsByClassName("album-pic");


$(document).ready(function() {
    for (let i=0; i < albumPics.length; i++) {
        albumPicElements[i].style.backgroundImage = 'url("' + albumPics[i] + '")';       
    }

  });