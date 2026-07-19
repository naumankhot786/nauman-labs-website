emailjs.init({
  publicKey: "Zd-S6X6Hje-jPBQQd"
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_0igt6nk",
    "template_1tr0eio",
    this
  )
  .then(() => {
    alert("✅ Message sent successfully!");
    contactForm.reset();
  })
  .catch((error) => {
    console.error(error);
    alert("❌ Failed to send message.");
  });
});

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

/* ======================================
   Nauman Labs V2 - Part 2
====================================== */

/* Active Navigation */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if(window.scrollY >= top){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* Smooth Scroll */

navLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* Reveal Animation */

const revealItems=document.querySelectorAll(

".service-card,.tech-card,.portfolio-card,.price-card,.testimonial-card,.about-card,.why-card"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/* Back To Top */

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.opacity="1";
backTop.style.visibility="visible";

}else{

backTop.style.opacity="0";
backTop.style.visibility="hidden";

}

});

/* Welcome Toast */

window.addEventListener("load",()=>{

setTimeout(()=>{

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML="👋 Welcome to Nauman Labs";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3500);

},1000);

});
/* ======================================
   Nauman Labs V2 - Part 3
====================================== */

/* Theme Memory */

const themeButton = document.getElementById("themeBtn");

if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeButton.innerHTML = "☀️";
    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");
            themeButton.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "dark");
            themeButton.innerHTML = "🌙";

        }

    });

}

/* Contact Button Loading */

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(){

const btn=this.querySelector("button");

if(btn){

btn.disabled=true;

btn.dataset.old=btn.innerHTML;

btn.innerHTML="Sending... ⏳";

setTimeout(()=>{

btn.disabled=false;

btn.innerHTML=btn.dataset.old;

},3000);

}

});

}

/* Success Toast */

function showToast(message){

const toast=document.createElement("div");

toast.className="toast success";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3000);

}

/* AI Typing */

function typeAnswer(text){

const box=document.getElementById("chatAnswer");

if(!box) return;

box.innerHTML="";

let i=0;

const timer=setInterval(()=>{

box.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},20);

}

/* Mobile Menu */

const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

if(menuBtn && menu){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});

}

/* ======================================
   Nauman Labs V2 - Part 4
====================================== */

/* Smart AI Replies */

const aiReplies = {
website: "🌐 We build modern, fast and SEO optimized business websites.",
app: "📱 We develop Android applications with premium UI and smooth performance.",
software: "💻 We create custom software according to your business requirements.",
ai: "🤖 We provide AI Chatbots, AI Automation and Smart AI Solutions.",
seo: "📈 We optimize websites for better Google ranking and higher traffic.",
contact: "📞 Contact us on WhatsApp: +91 8275544003\n📧 naumankhot786@gmail.com"
};

function chatReply(type){

const answer=document.getElementById("chatAnswer");

if(!answer) return;

answer.innerHTML="";

let text=aiReplies[type] || "Hello! Welcome to Nauman Labs.";

let i=0;

const typing=setInterval(()=>{

answer.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},20);

}

/* Lazy Images */

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/* Fade Body */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/* Page Visibility */

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="👋 Come Back | Nauman Labs";

}else{

document.title="Nauman Labs";

}

});

/* Performance */

console.log("🚀 Nauman Labs V2 Loaded Successfully");
