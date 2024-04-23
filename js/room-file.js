/*SlideShow JavaScript */
    /*Let slideIndex begin at 1,*/
    let slideIndex = 1;
    showSlides(slideIndex);
    /*function to cause change of slides (no. by n)*/
    function plusSlides(n) {
        showSlides(slideIndex += n);
        }
    /*function to cause change of slides (no. by increment n)*/
    function currentSlide(n) {
        showSlides(slideIndex = n);
        }
    /*function to cause change of showslides (n)*/
    function showSlides(n) {
        let i;
        /*slides get by Class Name (mySlides)*/
        let slides = document.getElementsByClassName("mySlides");
        /*dots get by Class Name (dots)*/
        let dots = document.getElementsByClassName("dot");
        /*create loop, resets to SlideIndex 1 */
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        /*do not display slides which are not selects */
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        /*do display active dot when selected  */
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        /*do display slide when selected */
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    /* JavaScript Card Tab -->*/
    /* JavaScript Tab Function openOption evt & roomName -->*/
    function openOption(evt, roomName) {
        /* declares i, tabcontent, tablinks-->*/
         var i, tabcontent, tablinks;
        /* tabcontent get ClassName Tabcontent -->*/
        tabcontent = document.getElementsByClassName("tabcontent");
        /* don't dispaly tabcontent which exceeds length -->*/
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        /* tablinks get ClassName tablinks -->*/
        tablinks = document.getElementsByClassName("tablinks");
        /* display tablinks selected as active -->*/
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        /* display block roomName-->*/
        document.getElementById(roomName).style.display = "block";
        /* className Active-->*/
        evt.currentTarget.className += " active";
        }
        /* get tablink [0] by clicking-->*/
        document.getElementsByClassName('tablinks')[0].click()


    /* JavaScript Card 1 Tab -->*/
    /* JavaScript Tab Function openOption evt & roomName -->*/
    function openOption1(evt, roomName1) {
        var i, tabcontent1, tablinks1;
        /* declares i, tabcontent, tablinks-->*/
        tabcontent1 = document.getElementsByClassName("tabcontent1"); 
        /* don't dispaly tabcontent which exceeds length -->*/
        for (i = 0; i < tabcontent1.length; i++) {
            tabcontent1[i].style.display = "none";
        }
        /* display tablinks selected as active -->*/
        tablinks1 = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks1.length; i++) {
        tablinks1[i].className = tablinks1[i].className.replace(" active", "");
        }
        /* display block roomName-->*/
        document.getElementById(roomName1).style.display = "block";
        /* className Active-->*/
        evt.currentTarget.className += " active";
    }
        /* get tablink [0] by clicking-->*/
        document.getElementsByClassName('tablinks1')[0].click()


    /* JavaScript Card 2 Tab -->*/
    /* JavaScript Tab Function openOption evt & roomName -->*/
    function openOption2(evt, roomName2) {
        /* declares i, tabcontent, tablinks-->*/
        var i, tabcontent2, tablinks2;
        /* tabcontent get ClassName Tabcontent -->*/
        tabcontent2 = document.getElementsByClassName("tabcontent2");
        /* don't dispaly tabcontent which exceeds length -->*/
        for (i = 0; i < tabcontent2.length; i++) {
          tabcontent2[i].style.display = "none";
        }
        /* display tablinks selected as active -->*/
        tablinks2 = document.getElementsByClassName("tablinks2");
        for (i = 0; i < tablinks2.length; i++) {
          tablinks2[i].className = tablinks2[i].className.replace(" active", "");
        }
        /* display block roomName-->*/
        document.getElementById(roomName2).style.display = "block";
        /* className Active-->*/
        evt.currentTarget.className += " active";
    }
    /* get tablink [0] by clicking-->*/
    document.getElementsByClassName('tablinks2')[0].click()


    /* JavaScript Card 3 Tab -->*/
    /* JavaScript Tab Function openOption evt & roomName -->*/
    function openOption3(evt, roomName3) {
        /* declares i, tabcontent, tablinks-->*/
        var i, tabcontent3, tablinks3;
        /* don't dispaly tabcontent which exceeds length -->*/
        tabcontent3 = document.getElementsByClassName("tabcontent3");
        for (i = 0; i < tabcontent3.length; i++) {
            tabcontent3[i].style.display = "none";
        }
        /* display tablinks selected as active -->*/
        tablinks3 = document.getElementsByClassName("tablinks3");
        for (i = 0; i < tablinks3.length; i++) {
          tablinks3[i].className = tablinks3[i].className.replace(" active", "");
        }
        /* display block roomName-->*/
        document.getElementById(roomName3).style.display = "block";
        /* className Active-->*/
        evt.currentTarget.className += " active";
    }
        /* get tablink [0] by clicking-->*/
        document.getElementsByClassName('tablinks3')[0].click()



    /* JavaScript Card 4 Tab -->*/
    /* JavaScript Tab Function openOption evt & roomName -->*/
    function openOption4(evt, roomName4) {
        /* declares i, tabcontent, tablinks-->*/
        var i, tabcontent4, tablinks4;
        tabcontent4 = document.getElementsByClassName("tabcontent4");
        /* don't dispaly tabcontent which exceeds length -->*/
        for (i = 0; i < tabcontent4.length; i++) {
          tabcontent4[i].style.display = "none";
        }
        /* display tablinks selected as active -->*/
        tablinks4 = document.getElementsByClassName("tablinks4");
        for (i = 0; i < tablinks4.length; i++) {
          tablinks4[i].className = tablinks4[i].className.replace(" active", "");
        }
        /* display block roomName-->*/
        document.getElementById(roomName4).style.display = "block";
        /* className Active-->*/
        evt.currentTarget.className += " active";
  }
        /* get tablink [0] by clicking-->*/
        document.getElementsByClassName('tablinks4')[0].click()



        /* JavaScript Card 5 Tab -->*/
        /* JavaScript Tab Function openOption evt & roomName -->*/
        function openOption5(evt, roomName5) {
            /* declares i, tabcontent, tablinks-->*/
            var i, tabcontent5, tablinks5;
            tabcontent5 = document.getElementsByClassName("tabcontent5");
        /* don't dispaly tabcontent which exceeds length -->*/
            for (i = 0; i < tabcontent5.length; i++) {
                tabcontent5[i].style.display = "none";
            }
        /* display tablinks selected as active -->*/
            tablinks5 = document.getElementsByClassName("tablinks5");
            for (i = 0; i < tablinks5.length; i++) {
            tablinks5[i].className = tablinks5[i].className.replace(" active", "");
            }
        /* display block roomName-->*/
        document.getElementById(roomName5).style.display = "block";
        /* className Active-->*/
        evt.currentTarget.className += " active";
  }
        /* get tablink [0] by clicking-->*/
        document.getElementsByClassName('tablinks5')[0].click()    



        /* JavaScript Card 6 Tab -->*/
        /* JavaScript Tab Function openOption evt & roomName -->*/
        function openOption6(evt, roomName6) {
            /* declares i, tabcontent, tablinks-->*/
            var i, tabcontent6, tablinks6;
            /* don't dispaly tabcontent which exceeds length -->*/
            tabcontent6 = document.getElementsByClassName("tabcontent6");
            for (i = 0; i < tabcontent6.length; i++) {
              tabcontent6[i].style.display = "none";
        }
        /* display tablinks selected as active -->*/
        tablinks6 = document.getElementsByClassName("tablinks6");
        for (i = 0; i < tablinks6.length; i++) {
          tablinks6[i].className = tablinks6[i].className.replace(" active", "");
        }
        /* display block roomName-->*/
            document.getElementById(roomName6).style.display = "block";
        /* className Active-->*/
            evt.currentTarget.className += " active";
    }
    /* get tablink [0] by clicking-->*/
        document.getElementsByClassName('tablinks6')[0].click()    

