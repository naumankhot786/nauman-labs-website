window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transform = "scale(1.15)";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 3000);

});
// Mobile Menu
function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

};
tsParticles.load("particles-js", {
  background: {
    color: {
      value: "#0f172a"
    }
  },
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#38bdf8"
    },
    links: {
      enable: true,
      color: "#38bdf8",
      distance: 150
    },
    move: {
      enable: true,
      speed: 2
    },
    size: {
      value: 3
    }
  }
});
// Cursor Glow

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});
// Scroll Reveal

const hiddenElements = document.querySelectorAll("section,.card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");
    observer.observe(el);

});
window.addEventListener("load", () => {

    const audio = document.getElementById("WelcomeSound");

document.addEventListener("click", function playAudio() {
    audio.play();
    document.removeEventListener("click", playAudio);
});

});

document.addEventListener("click", function playAudio() {
    audio.play().catch(err => console.log(err));
    document.removeEventListener("click", playAudio);
});
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;
        const visible = 120;

        if (top < windowHeight - visible) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const chatAnswer = document.getElementById("chatAnswer");

chatBtn.addEventListener("click", () => {

    if(chatBox.style.display === "block"){
        chatBox.style.display = "none";
    }else{
        chatBox.style.display = "block";
    }

});

function chatReply(type){

    switch(type){

        case "website":
            chatAnswer.innerHTML = `
            <h3>🌐 Website Development</h3>
            <p>We build premium business, portfolio and e-commerce websites.</p>
            `;
            break;

        case "app":
            chatAnswer.innerHTML = `
            <h3>📱 Android App Development</h3>
            <p>Modern Android applications with premium UI.</p>
            `;
            break;

        case "ai":
            chatAnswer.innerHTML = `
            <h3>🤖 AI Solutions</h3>
            <p>AI Chatbots, Automation and Smart Business Tools.</p>
            `;
            break;

        case "contact":
            chatAnswer.innerHTML = `
            <h3>📞 Contact Nauman Labs</h3>

            <p>📧 Email:<br>
            naumankhot786@gmail.com</p>

            <p>📱 Phone:<br>
            +91 8275544003</p>

            <p>
            <a href="https://wa.me/918275544003" target="_blank">
            💬 Chat on WhatsApp
            </a>
            </p>
            `;
            break;

    }

}
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.sendForm(
            "service_nwihw2m",
            "template_hf8pcqs",
            this
        )
        .then(() => {
            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        })
.catch((error) => {
    console.log(error);
    alert(error.text || error.message || JSON.stringify(error));
});

    });
}
document.addEventListener("click", (e) => {
    if (!chatBox.contains(e.target) && !chatBtn.contains(e.target)) {
        chatBox.style.display = "none";
    }
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("✅ Service Worker Registered"))
      .catch((err) => console.log("❌ Service Worker Error:", err));
  });
}