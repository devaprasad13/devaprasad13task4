let menuIcon =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let section = document.querySelector('section');
let navLink = document.querySelector('header nav a');

window.onscroll = () =>
{
    section.forEach(sec => 
        {
            let top = window.scrollX;
            let offset = scec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top>= offset && top < offset + height)
            {
                navLink.forEach(links => 
                    {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' +id+ ']').ckassList.add('active')
                    });
            };

        });
};

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);