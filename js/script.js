// =====================
// ハンバーガーメニュー
// =====================
const menuButton =
document.getElementById("menuButton");
const mobileMenu =
document.getElementById("mobileMenu");
if(menuButton && mobileMenu){
    menuButton.addEventListener("click",()=>{
        mobileMenu.classList.toggle("active");
    });
    document.querySelectorAll(".mobile-menu a")
    .forEach(link=>{
        link.addEventListener("click",()=>{
            mobileMenu.classList.remove("active");
        });
    });
}
// =====================
// 写真拡大モーダル
// =====================
const photoModal =
document.getElementById("photoModal");
const modalImage =
document.getElementById("modalImage");
const photoClose =
document.querySelector(".photo-close");
const galleryImages =
document.querySelectorAll(".gallery-grid img");
galleryImages.forEach(image=>{
    image.addEventListener("click",()=>{
        if(window.innerWidth <= 768){
            return;
        }
        if(photoModal && modalImage){
            modalImage.src =
            image.src;
            photoModal.classList.add("active");
        }
    });
});
if(photoClose){
    photoClose.addEventListener("click",()=>{
        photoModal.classList.remove("active");
    });
}
if(photoModal){
    photoModal.addEventListener("click",(event)=>{
        if(event.target === photoModal){
            photoModal.classList.remove("active");
        }
    });
}
// =====================
// 入会前注意事項モーダル
// =====================
const modal =
document.getElementById("modal");
const modalOpen =
document.querySelector(".modal-open");
const modalClose =
document.querySelector(".modal-close");
if(modalOpen && modal){
    modalOpen.addEventListener("click",()=>{
        modal.classList.add("active");
    });
}
if(modalClose && modal){
    modalClose.addEventListener("click",()=>{
        modal.classList.remove("active");
    });
}
if(modal){
    modal.addEventListener("click",(event)=>{
        if(event.target === modal){
            modal.classList.remove("active");
        }
    });
}
