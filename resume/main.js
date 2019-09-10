
if (document.getElementsByClassName('slide').length) {
    var index = 1;
    showSlides(index);

    function moveSlide(no) {
        showSlides(index += no);
    }

    function showSlides(no) {
        var i;
        var slides = document.getElementsByClassName('slide');
        if(no > slides.length) { index = 1};
        if(no < 1) { index = slides.length};

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[index-1].style.display = "block";  
    }
}


