/*****************for navbar world whin i reload the page**************************/
window.onload = function () {
  "use strict";
  var Text0 = "Home";
  var Text1 = "Abot";
  var Text2 = "Cnct";
  var Text3 = "Dsin";
  var Text4 = "Call";
  var Text5 = "Fotr";
  var i = 0;
  var x = setInterval(function () {
    "use strict";

    var myp = document.getElementsByTagName("a");
    myp[0].textContent += Text0[i];
    myp[1].textContent += Text1[i];
    myp[2].textContent += Text2[i];
    myp[3].textContent += Text3[i];
    myp[4].textContent += Text4[i];
    myp[5].textContent += Text5[i];
    i = i + 1;
    if (i > Text0.length - 1) {
      clearInterval(x);
    }
    if (i > Text1.length - 1) {
      clearInterval(x);
    }
    if (i > Text2.length - 1) {
      clearInterval(x);
    }
    if (i > Text3.length - 1) {
      clearInterval(x);
    }
    if (i > Text4.length - 1) {
      clearInterval(x);
    }
    if (i > Text5.length - 1) {
      clearInterval(x);
    }
  }, 500);
};

/********************slider********************** */

var slid = 1;
showDivs(slid);
function plausDiv(n) {
  "use strict";
  showDivs((slid += n));
}
function showDivs(n) {
  "use strict";
  var h;
  var o = document.getElementsByClassName("test");
  if (n > o.length) {
    slid = 1;
  }
  if (n < 1) {
    slid = o.length;
  }
  for (h = 0; h < o.length; h++) {
    o[h].style.display = "none";
  }
  o[slid - 1].style.display = "block";
}
/*//////////////////////////slider ////////////////////////////*/

var bg, MULsm, i;
bg = document.getElementById("big");
MULsm = document.getElementsByClassName("imgs");

for (i = 0; i < MULsm.length; i = i + 1) {
  MULsm[i].onclick = function () {
    bg.src = this.src;
  };
}
/**********************auto matic slider******************** */
var maimg;
maimg = document.getElementById("im");
var myarr = [
  "../imag/gow.jpg",
  "../imag/red.jpg",
  "../imag/nfs.jpg",
  "../imag/cyber.jpg",
];

function mychange() {
  "use strict";
  setInterval(function () {
    var x = Math.floor(Math.random() * myarr.length);
    maimg.src = myarr[x];
  }, 1500);
}
mychange(maimg, myarr);
/*************************for the backgrong color chang****************** */
var mycol, mybody, mybdy;
mybody = document.getElementsByTagName("body")[0];
mycol = document.getElementsByClassName("col");

mycol[0].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "red";
};
mycol[1].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "yellow";
};
mycol[2].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "green";
};
mycol[3].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "blue";
};
mycol[4].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "aqua";
};
mycol[5].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "#ffffff";
};
mycol[6].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "wheat";
};
mycol[7].onclick = function () {
  "use strict";
  mybody.style.backgroundColor = "black";
  mybody.style.color = "wheat";
  mybody.style.textShadow = "0px 0px 0 rgb(137, 156, 213)";
};
/***********for the backgrong color chang********/
var myss, myop, mysyle, mysyle2;
mysyle = `transition: 2s ease-in;
transform: translateX(150px);

`;
mysyle2 = `transition: 2s ease-in;
transform: translateX(0px);
`;
myss = document.getElementById("ss");
myop = document.getElementById("op");

myop.onclick = function () {
  "use strict";
  myss.style = mysyle;
  myop.style = mysyle;
};
myop.ondblclick = function () {
  "use strict";
  myss.style = mysyle2;
  myop.style = mysyle2;
};
/*************************4div************************* */
var myDiv1 = document.getElementsByClassName("p31")[0];
var myDiv2 = document.getElementsByClassName("p32")[0];
var myDiv3 = document.getElementsByClassName("p33")[0];
var myDiv4 = document.getElementsByClassName("p34")[0];
window.onscroll = function () {
  "use strict";
  if (window.scrollY > 100) {
    var style1 = `
      transition: 1s;
      transform: translateX(0px);
       
       `;
    var style2 = ` 
      transition: 1s;
       transform: translateY(0px);
       `;
    var style3 = ` 
      transition: 1s;
       transform: translateY(0px);
      `;
    var style4 = `
      transition: 1s;
       transform: translateX(0px);
       `;
    myDiv1.style = style1;
    myDiv2.style = style2;
    myDiv3.style = style3;
    myDiv4.style = style4;
  }
};
/****************3 div apper whin the scrolly =300****/
console.log(window.pageYOffset);
var mydiv66 = document.getElementsByClassName("p4");
var i = 0;
if (window.scrollY > 1500 || window.scrollY < 1500) {
  var p = setInterval(function () {
    "use strict";

    mydiv66[i].style.display = "block";
    i = i + 1;
    if (i > mydiv66.length - 1) {
      clearInterval(p);
    }
  }, 1000);
}
