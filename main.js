"use strict";

{
    const open = document.getElementsByClassName("open")[0];
    const close = document.getElementsByClassName("btn")[0];
    const modal = document.getElementsByClassName("modal")[0];
    const mask = document.getElementsByClassName("mask")[0];
    
    open.addEventListener("click", () => {
        modal.classList.remove("hidden");
        mask.classList.remove("hidden");
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
    
    mask.addEventListener('click', () => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    });

}