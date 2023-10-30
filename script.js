const li = document.querySelectorAll(".menu-links > li")
const menu_toggle = document.querySelectorAll(".menu-toggle")


menu_toggle.forEach((el)=>{
    el.addEventListener("click", ()=>{
        el.classList.toggle("animation-toggle-menu")
    })
})


window.addEventListener('load', function () {
    document.body.style.display = 'block';
});
/*
const removeActive = () =>{
    li.forEach((el)=>{
            if(window.innerWidth < 851){
                alert(window.innerWidth)
                if(el.classList.contains('active')) el.classList.remove("active")
                return
            }
            if(el.classList.contains('active')) el.classList.remove("active")
    })
}
*/
li.forEach((el)=>{
    el.addEventListener("click", ()=>{
        removeActive()
        el.classList.toggle("active")
    })
})