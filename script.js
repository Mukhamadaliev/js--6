// ==== HEADER YARATISH ====
let header = document.querySelector("header");
let nav = document.createElement("nav");

// Chap tomon: menu
let left = document.createElement("div");
let ul = document.createElement("ul");
["Home", "About", "Blog", "Pages", "Contact"].forEach(text => {
  let li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
});
left.appendChild(ul);
nav.appendChild(left);

// O‘ng tomon: til select, sign in, register
let right = document.createElement("div");
right.className = "right-header";

let select = document.createElement("select");
["EN", "UZ", "RU"].forEach(lang => {
  let option = document.createElement("option");
  option.textContent = lang;
  select.appendChild(option);
});

let sign = document.createElement("a");
sign.href = "#";
sign.textContent = "Sign in";

let buttonHeader = document.createElement("button");
buttonHeader.textContent = "Register";

right.appendChild(select);
right.appendChild(sign);
right.appendChild(buttonHeader);

nav.appendChild(right);
header.appendChild(nav);

// ==== ASOSIY QISM: IMG + TEXT + LOGIN FORM ====
let container = document.createElement("div");
container.className = "container";

// IMG
let img = document.createElement("img");
img.src = "assets/BMW.jpg";
img.alt = "BMW rasmi";

// TEXT qismi
let textBox = document.createElement("div");
["Hello", "Welcome Back"].forEach(text => {
  let h1 = document.createElement("h3");
  h1.textContent = text;
  textBox.appendChild(h1);
});

// FORM
let form = document.createElement("form");

let loginInput = document.createElement("input");
loginInput.type = "text";
loginInput.placeholder = "Login";

let passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";

// Login tugmasi (a element ko‘rinishida)
let loginBtn = document.createElement("a");
loginBtn.textContent = "Login";
loginBtn.href = "index.html";
loginBtn.style.display = "inline-block";
loginBtn.style.textAlign = "center";
loginBtn.style.padding = "10px";
loginBtn.style.backgroundColor = "#007BFF";
loginBtn.style.color = "white";
loginBtn.style.textDecoration = "none";
loginBtn.style.borderRadius = "5px";
loginBtn.style.fontSize = "16px";
loginBtn.style.cursor = "pointer";

// Formga inputlarni qo‘shish
form.appendChild(loginInput);
form.appendChild(passwordInput);
form.appendChild(loginBtn);

// Matn va formani bitta divga jamlash
let rightBox = document.createElement("div");
rightBox.style.display = "flex";
rightBox.style.flexDirection = "column";
rightBox.style.gap = "20px";
rightBox.appendChild(textBox);
rightBox.appendChild(form);

// Containerga rasm va o‘ng qismni qo‘shish
container.appendChild(img);
container.appendChild(rightBox);
document.body.appendChild(container);

// ==== FOOTER QISMI ====
// Footer yaratish
let footer = document.createElement("footer");
footer.style.padding = "20px";
footer.style.backgroundColor = "#f0f0f0";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.gap = "50px";

// Instagram ikonka
let instagramIcon = document.createElement("i");
instagramIcon.className = "bx bxl-instagram";
instagramIcon.style.fontSize = "40px";
instagramIcon.style.color = "blue";
instagramIcon.style.cursor = "pointer";

// Footerga qo‘shish
footer.appendChild(instagramIcon);
document.body.appendChild(footer);

// Scroll chiqmasligi uchun
document.body.style.margin = "0";


// Telegram ikonka
let telegramIcon = document.createElement("i");
telegramIcon.className = "bx bxl-telegram";
telegramIcon.style.fontSize = "40px";
telegramIcon.style.color = "blue";
telegramIcon.style.cursor = "pointer";

// Footerga qo‘shish
footer.appendChild(telegramIcon);
document.body.appendChild(footer);

// Scroll chiqmasligi uchun
document.body.style.margin = "0";

// github ikonka
let githubIcon = document.createElement("i");
githubIcon.className = "bx bxl-github";
githubIcon.style.fontSize = "40px";
githubIcon.style.color = "blue";
githubIcon.style.cursor = "pointer";

// Footerga qo‘shish
footer.appendChild(githubIcon);
document.body.appendChild(footer);

// Scroll chiqmasligi uchun
document.body.style.margin = "0";
