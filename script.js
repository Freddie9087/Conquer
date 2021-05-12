let header = document.getElementById("home");
let services = document.getElementById("service");
let contacts = document.getElementById("contact_wrapper");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    header.style.backgroundPositionY = value * 0.5 + 'px';
    services.style.backgroundPositionY = (value + 800) * 0.5 + 'px';
    contacts.style.backgroundPositionY = value * 0.5 + 'px';
})

let scrollUp = document.getElementById("icon");


scrollUp.addEventListener("click", function() {
    document.getElementById("home").scrollIntoView();     
})

window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    if (scrollPos <= 400) {
        scrollUp.style.display = "none";
        return
    }   else {
        scrollUp.style.display = "block"
        return
    }
})

 

 

// 1296

