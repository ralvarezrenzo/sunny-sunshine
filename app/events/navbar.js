const d = document;
export default function navBar(btnMenu,menu){
    d.addEventListener('click',(e)=>{
        if(e.target.matches(btnMenu)||e.target.matches(`${btnMenu} *`)){
            d.querySelector(menu).classList.toggle('menu-active')
        }
    })
}