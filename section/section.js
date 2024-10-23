const btnFaq = document.querySelectorAll('.faq-accordeon > button')



export function faqHandeling(){
    btnFaq.forEach((btn)=>{
        btn.addEventListener('click', ()=> displayFaq(btn))
    })
}



const displayFaq = (btn) =>{
    const img = btn.children[1]
    const container = btn.parentNode
    const text = container.children[1]
    const lastBtn = btnFaq.length - 1
    
    if(text.classList.toggle("faq-active")){
        img.src = "asset/img/caret_up_green.svg"
        text.style.display = "block"
        btnFaq[lastBtn].style.borderBottom = "border-bottom: 1px #e5e5e5 solid"
        console.log(btnFaq[lastBtn])
        }else{
            img.src = "asset/img/caret_down_green.svg"
            text.style.display = "none"
            btnFaq[lastBtn].style.borderBottom = "none"
    }
}