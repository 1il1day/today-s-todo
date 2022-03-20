const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
];

const randomImg = images[Math.floor(Math.random()*images.length)];

const bgimg = document.createElement("img");
bgimg.src = `images/${randomImg}`

document.body.appendChild(bgimg);



const bgColors = [
    "#fff",
    "#ededed",
    "#f0ece1",
    "#cfdce9",
]

const bodyStyle = document.body.style;
bodyStyle.background = bgColors[Math.floor(Math.random()*bgColors.length)];
