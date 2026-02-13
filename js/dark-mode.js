
        const btn=document.getElementById('toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const image=document.getElementById('image');
        const img=document.getElementById('img');
        const logo_container=document.getElementById('logo-container');

    document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});




        btn.addEventListener('click',()=>{
        
            if(document.documentElement.classList.contains('dark')){
                 enableLightMode();
                localStorage.setItem("theme", "light");
                
            }else{
                enableDarkMode();
                localStorage.setItem("theme", "dark");
            }
        })
  
    function enableDarkMode(){
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        btn.setAttribute('aria-label', 'Enable dark mode');
        image.src = "./images/logo-darkmode.webp";
        img.src = "./images/logo-darkmode.webp";
        image.classList.add("w-36");
        image.classList.remove("w-55");
        logo_container.classList.add("px-4");
                
    }

    function enableLightMode(){
        document.documentElement.classList.remove('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        btn.setAttribute('aria-label', 'Enable light mode');
        image.src = "./images/alisaLogo.webp";
        img.src="./images/alisaLogo.webp";
        image.classList.remove("w-36");
        image.classList.add("w-55");
        logo_container.classList.remove("px-4");
    }