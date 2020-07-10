function fizetendőKiszámolás() {
    let választottHamburger = document.querySelector("name=['hamburger']");
    let hamburgerÁr = parseInt(választottHamburger.value);

         
    mutasdHamburgerÁr(hamburgerÁr, feltétÁr)
}

function mutasdHamburgerÁr(hamburgerÁr, feltétár) {
    let mutasdAzÖsszeget = document.querySelector("span.MutasdAzÖsszeget")
    
         
        mutasdAzÖsszeget.innerHTML = hamburgerÁr;
    }

}