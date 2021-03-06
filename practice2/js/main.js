'use strict';

{
    const open = document.getElementById("open");
    const mask = document.getElementById("mask");
    const modal = document.getElementById("modal");
    const close = document.getElementById("close");

    open.addEventListener("click", () => {
        mask.classList.remove("hidden");
        modal.classList.remove("hidden");
    });

    close.addEventListener("click", () => {
        modal.classList.add("hidden");
        mask.classList.add("hidden");
    });

    mask.addEventListener("click", () => {
        close.click();
    });
}
