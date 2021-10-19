const progressLine = document.querySelector('.progress_line');
window.addEventListener('scroll',scrollBar);
function scrollBar(){
    const windowScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = Math.round(windowScroll / windowHeight * 100);
    progressLine.style.width = `${percent}%`;
};

const btnScrollTop = document.querySelector('.scroll_top');

window.addEventListener('scroll',scrollTop);
function scrollTop(){
    const scrollHeight = document.documentElement.scrollTop;
    if(scrollHeight > 200){
        btnScrollTop.classList.add('active');
    }else{
        btnScrollTop.classList.remove('active');
    };
};

btnScrollTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

const btnShowModal = document.querySelectorAll('.show_demo--btn');
const modalOwerflow = document.querySelector('.modal_owerflow');
const modalContent = document.querySelector('.modal_content');
const btnModalClose = document.querySelector('.btn_modal_close');
const docBody = document.body;

btnShowModal.forEach(modalBtn => {
    modalBtn.addEventListener('click', showModal);
});

function showModal(){
    modalOwerflow.classList.add('showModal');
    docBody.classList.add('hide');
};

modalOwerflow.addEventListener('click', closeModal);
btnModalClose.addEventListener('click', closeModal);

function closeModal(){
    modalOwerflow.classList.remove('showModal')
    docBody.classList.remove('hide');
};

modalContent.addEventListener('click',(e)=>{
    e.stopPropagation();
});



const mobile_nav_btn = document.querySelector('.mobile_nav_btn');
const btnLine = document.querySelector('.btn_line');
const nav = document.querySelector('.nav');

mobile_nav_btn.addEventListener('click', showMobileMenu)

function showMobileMenu(){
    btnLine.classList.toggle('active');
    nav.classList.toggle('show-menu');
    docBody.classList.toggle('hide');
};
