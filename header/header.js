const allDropDownMenu = document.querySelectorAll(".drop-down-menu")
const allUlInDropDown = document.querySelectorAll(".menu-list")
const btnBurger = document.querySelector(".btn-humburger")
const menu = document.querySelector('.menu')
const header = document.getElementById("header")
const body = document.body

export function menuHandling(){
    allDropDownMenu.forEach((link) => {
        link.addEventListener("click", () => handleLinkClick(link));
    });
    btnBurger.addEventListener("click", HandleBurgerClick)
    window.addEventListener('scroll', checkTopScroll)
    checkTopScroll()
}







function closeIfMenuActive(tab){
    tab.forEach((el)=>{
        if(el.classList.contains("menu-list-active")){
            el.classList.remove("menu-list-active");
            el.parentElement.children[1].src = "asset/img/caret_down_green.svg";
            el.parentElement.children[0].classList.remove("menu-span-active");
        }
    })
}

function checkTopScroll() {
    const currentScrollPosition = window.scrollY;
    header.classList.toggle("scrolled", currentScrollPosition != 0);
    for (const link of allDropDownMenu) {
        link.classList.toggle("burgerStyle", currentScrollPosition == 0);
    }

    return currentScrollPosition;
}

function handleLinkClick(link){
    if(link.children[2].classList.contains("menu-list-active")){
        link.children[2].classList.remove("menu-list-active");
        link.children[1].src = "asset/img/caret_down_green.svg";
        link.children[0].classList.remove("menu-span-active");
    }else{
        closeIfMenuActive(allUlInDropDown)
        link.children[2].classList.add("menu-list-active")
        link.children[1].src = "asset/img/caret_up_green.svg";
        link.children[0].classList.add("menu-span-active");
    }
}

function HandleBurgerClick(){
    if(btnBurger.classList.contains("burger-active")){
        btnBurger.classList.remove("burger-active") 
        menu.classList.remove("menu-active")
        body.style.overflow = "auto"
        allDropDownMenu.forEach((link)=>link.classList.remove("burgerStyle"))
        if(checkTopScroll() == 0){
            header.classList.remove("scrolled")
        }
    } else{
        btnBurger.classList.add("burger-active")
        menu.classList.add("menu-active")
        header.classList.add("scrolled")
        allDropDownMenu.forEach((link) => link.classList.add("burgerStyle"));
        body.style.overflow = "hidden"
    }
}
