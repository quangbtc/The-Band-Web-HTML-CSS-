var header=document.getElementById('header');
var mobileMenu=document.querySelector('.mobile-menu');
var heightMenu= header.clientHeight;

mobileMenu.onclick= function(){
    var isClose=header.clientHeight===heightMenu;
    if(isClose){
        header.style.height='auto';
        header.style.overflow="";
    }else{
        header.style.height = null;
        header.style.overflow = "hidden";
    }    
}
// Xử lý khi click vào menuItem
var menuItems = document.querySelectorAll(".nav-list-item a[href*='#']");
for(var i=0; i<menuItems.length;i++){
    var menuItem=menuItems[i];
    menuItem.onclick=function(event){
         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('nav-extra');
        if(!isParentMenu){
            header.style.height = null;
            header.style.overflow = "hidden";
        }else{
            event.preventDefault();
        }
    }
}

