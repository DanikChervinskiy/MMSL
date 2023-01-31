"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}
const btnItem = document.querySelector('.btn__item');
const btn = document.querySelector('.btn');
    const wrapperlist = document.querySelector('.wrapper-input__list');
    // const bntOtstup = document.querySelector('.btn__otstup')

    btnItem.addEventListener('click', () => {
        
        let newDiv = document.createElement("div");
        newDiv.classList.add('input')
        newDiv.innerHTML = '<input class="input-text-1" type="text" placeholder="Description">';
        btnItem.classList.add('btn__otstup')
        wrapperlist.append(newDiv);
        
    });

    const inputClose = document.querySelectorAll('.input__close');

    wrapperlist.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);

        if(e.target.classList.contains('input__close')){

            let input = e.target.closest('input');
            input.remove();
        }
        // if(e)
    })