/* ======================================
   Nauman Labs V2 - Part 1
====================================== */

/* Scroll Progress Bar */
const progress = document.createElement("div");
progress.id = "progressBar";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
  const scroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent = (scroll / height) * 100;

  progress.style.width = percent + "%";
});

/* Navbar Shadow */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

/* Typing Effect */

const typingText = document.querySelector(".typing");

if(typingText){

const words = [

"Website Development",

"Android Apps",

"AI Solutions",

"Software Development"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typing(){

const current = words[wordIndex];

if(!deleting){

typingText.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typing,1500);

return;

}

}else{

typingText.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex = (wordIndex + 1) % words.length;

}

}

setTimeout(typing,deleting ? 50 : 120);

}

typing();

}

/* AI Chat Animation */

if(chatBtn){

chatBtn.addEventListener("click",()=>{

chatBox.classList.toggle("chat-open");

});

}
