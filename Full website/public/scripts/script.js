burger=document.getElementById('burger')
navList=document.getElementById('navList')
search=document.getElementById('search')
navBar=document.getElementById('navBar')

let counter=0;

burger.addEventListener('click',()=>{
    navBar.classList.toggle('h-navResp')
    let doit=()=>{
        navList.classList.toggle('v-classResp')
        search.classList.toggle('v-classResp')
    };
    if(counter%2==0||counter==0)
    setTimeout(doit,300)
    else
    setTimeout(doit,100);

counter++;
});