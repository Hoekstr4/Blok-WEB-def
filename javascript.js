// filter uit laten klappen

document.addEventListener("DOMContentLoaded", function (e) {
    var header = document.querySelector('#filter h2');
    var filterOptions = document.querySelector('#filter .showfilters');
    
    header.addEventListener('click', function() {
        filterOptions.classList.toggle('animatiefilter');
        filterOptions.classList.toggle('showfilters');

    
    if (filterOptions.style.maxheight) { 
        filterOptions.style.maxHeight = null;
        
    } else {
        var hoogte = filterOptions.scrollHeight;
        hoogte = hoogte/16;
        filterOptions.style.maxHeight = hoogte + 'em';
    }
    
    })
    
})


// wow button van kleur veranderen

var artikelen = document.getElementsByTagName('article'); 


for (var i = 0; i < artikelen.length; i++){
    var wowrating = document.getElementsByTagName('article')[i].childNodes[7];
	wowrating.addEventListener('click', changeColor);

    
}

function changeColor() {
    this.classList.toggle('animatie');
    
    
    if (this.classList.contains('wit')) {
        this.src = "img/wow_button_klick.png";
        this.classList.remove('wit');
    } else {
        this.src = "img/wow_button.png";
        this.classList.add('wit');
    }
    

}

