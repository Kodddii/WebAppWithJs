const img = ["0.jpeg", "1.png","2.jpg","3.jpg"];
const chosenimg = img[Math.floor(Math.random() * img.length)];
const bgimg = document.createElement("img");
bgimg.src = `img/${chosenimg}`;
// bgimg를 body background에 추가하려면
document.body.appendChild(bgimg);
// appendChild 는 body에 html을 추가하는것
