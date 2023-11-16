const nav_links = document.querySelector(".nav-links")
const indicators = document.querySelectorAll('.slide-indicators .indicator');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
const wrapper = document.querySelector('.wrapper');

nav_links.addEventListener("click", ()=>{
    if(nav_links.classList.contains("close-nav-bar")){
        nav_links.classList.remove("close-nav-bar")
        nav_links.classList.add("open-nav-bar")
    }else{
        nav_links.classList.remove("open-nav-bar")
        nav_links.classList.add("close-nav-bar")
    }
})




radio1.addEventListener('change', () => {
    console.log(radio1.checked)
    if (radio1.checked) {
        wrapper.style.left = '0%';
    }
});

radio2.addEventListener('change', () => {
    console.log(radio2.checked)
    if (radio2.checked) {
        wrapper.style.left = '-100%';
    }
});

radio3.addEventListener('change', () => {
    console.log(radio3.checked)
    if (radio3.checked) {
        wrapper.style.left = '-200%';
    }
});