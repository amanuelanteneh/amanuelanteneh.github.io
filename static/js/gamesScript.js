
var albumPics = ["https://assets1.ignimgs.com/thumbs/userUploaded/2020/7/14/halo3-multiplayerpcblogroll-1594760905664.jpg", 
                "https://assets1.ignimgs.com/thumbs/userUploaded/2015/6/5/IGNPlaysLive_060515_1280-1433530262924.jpg",
                "https://assets1.ignimgs.com/thumbs/userUploaded/2019/12/4/reachign-1575498991511.jpg",
                "https://assets1.ignimgs.com/thumbs/userUploaded/2018/5/17/maxresdefault-1526594886194.jpg",
                "https://sm.ign.com/t/ign_ap/articlepage/p/ps4-xbox-one-get-6-player-dark-souls-ii-scholar-of/ps4-xbox-one-get-6-player-dark-souls-ii-scholar-of_kgn4.1280.jpg",
                "https://assets-prd.ignimgs.com/2021/07/08/1280x720-6e3-1441008848228jpg-9b3dfc-1625749927174.jpg",
                'https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/04/injustice_040913_1600.jpg',
                'https://assets-prd.ignimgs.com/2023/06/10/injustice2-1024-576-1489108566238-1686441365530.jpg',
                'https://assets1.ignimgs.com/thumbs/userUploaded/2022/2/1/destinythumb-1607620044156-1643715089550.jpeg'
   
];
var albumPicElements = document.getElementsByClassName("album-pic");


$(document).ready(function() {
    for (let i=0; i < albumPics.length; i++) {
        albumPicElements[i].style.backgroundImage = 'url("' + albumPics[i] + '")';       
    }

  });