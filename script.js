bar = document.getElementById("bar");
nav = document.getElementById("navbar");
close = document.getElementById("close");
bag = document.getElementById("lg-bag");
bag_mobile = document.getElementById("lg-bag-mobile");


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        bar.style.display = "none";
        bag.style.display = "none";
        bag_mobile.style.display = "none";
        
    });
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        bar.style.display = "flex";
        bag.style.display = "flex";
        bag_mobile.style.display = "flex";
    });
}