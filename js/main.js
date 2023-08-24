//**************************************EVENTS*****************************//
// WHEN USER CLICK TO BAR ICONS 
bar.addEventListener("click",_=>{
    nav.classList.toggle("active_bar")
})
//  TO ADD ACTIVE TO LINKS
links.forEach(link => {
    link.addEventListener("click",_=>{
        clear(links, "active")
        link.classList.add("active")
        nav.classList.remove("active_bar")
    })
    
 });