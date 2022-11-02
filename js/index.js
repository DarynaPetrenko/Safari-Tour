function showText (el, index) {
    let text = document.getElementsByClassName('offer-desc');
    if(window.getComputedStyle(text[index]).overflow === 'hidden'){
        text[index].style.overflowY = 'scroll';
        el.innerHTML = "Read less";
    }else{
        text[index].style.overflow = 'hidden';
        el.innerHTML = "Read more";
    }
}
let photoTable = document.getElementsByClassName('photo-table');
let toursTable = document.getElementsByClassName('tours-table');
let toursTitle = document.getElementsByClassName('tours-title');
let photoTitle = document.getElementsByClassName('photo-title');


function showPhotos(el){
    if(window.getComputedStyle(photoTable[0]).display === 'none'){
        photoTable[0].style.display = 'block';
        el.style.backgroundColor = '#81ffff';
        el.style.color = '#127ea5';
        toursTable[0].style.display = 'none';
        toursTitle[0].style.backgroundColor = '#3aa1c7';
        toursTitle[0].style.color = '#81ffff';

    }
}


function showTours(el){
    if(window.getComputedStyle(toursTable[0]).display === 'none'){
        toursTable[0].style.display = 'block';
        el.style.backgroundColor = '#81ffff';
        el.style.color = '#127ea5';
        photoTable[0].style.display = 'none';
        photoTitle[0].style.backgroundColor = '#3aa1c7';
        photoTitle[0].style.color = '#81ffff';
    }
}