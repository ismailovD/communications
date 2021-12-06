const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'), 
        pageContent =document.querySelector('.return__content'), 
        body = document.querySelector('.return__body'),
        selectBtns = document.querySelectorAll('.select__btn'),
        selectParent = '.select',
        selectItems = document.querySelectorAll('.select__item'),
        textareaParent = ".templates",
        textareasCommun = document.querySelectorAll('.templates__textarea'),
        symbolCurent = '.templates__symbols-curent',
        symbolMax = '.templates__symbols-max',
        dropdownWindow = document.querySelector('.side-bar__dropdown'),
        dropdownBtn = document.querySelector('.side-bar__dropdown-btn');

 
    
sideBarBtn.addEventListener('click', () => { 
    sideBar.classList.toggle('active');
    if(sideBar.classList.contains('active')){  
            pageContent.style.marginLeft = "275px"; 
    }else {  
        dropdownWindow.classList.remove('active')
        pageContent.style.marginLeft = "65px";  
    }
});
         
  

selectBtns.forEach(btn => { 
    btn.addEventListener('click', () => {  
        document.querySelectorAll(selectParent).forEach(parent => {
            if(btn.closest(selectParent) != parent){
                parent.classList.remove('show-select')
            }
        })
        btn.closest(selectParent).classList.toggle('show-select') 
    });
}) 

selectItems.forEach(item => {
     item.addEventListener('click', () => {
        selectItems.forEach(el => {
            el.classList.remove('item-selected')
        })
        item.classList.add('item-selected'); 
        item.closest(selectParent).children[0].textContent = item.getAttribute('data-value');
        item.closest(selectParent).classList.remove('show-select')
     })
})  



textareasCommun.forEach(writeTable => {
    let parent =  writeTable.closest(textareaParent);
    parent.querySelector(symbolMax).textContent = writeTable.getAttribute('maxlength');
    writeTable.addEventListener('input', () => { 
       parent.querySelector(symbolCurent).textContent = writeTable.value.length;  
    })
})

dropdownBtn.addEventListener('click', () => {
    dropdownWindow.classList.toggle('active')
})