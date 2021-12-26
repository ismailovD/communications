const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'), 
        pageContent =document.querySelector('.global__content'),  
        visitedPage = document.querySelectorAll('.global-item'),
        userDropdown = document.querySelector('.global__auth'),
        userBtn = document.querySelector('.user__dropdown-btn'),
        selectBtns = document.querySelectorAll('.select__btn'),
        communContent = document.querySelector('.communications__inner'),
        sideBarSet = '.side-bar__settings',
        selectParent = '.select',
        selectItems = document.querySelectorAll('.select__item'),
        textareaParent = ".templates",
        textareasCommun = document.querySelectorAll('.templates__textarea'),
        symbolCurent = '.templates__symbols-curent',
        symbolMax = '.templates__symbols-max',
        dropdownList = document.querySelector('.side-bar__settings'),
        dropdownBtn = document.querySelector('.side-bar__dropdown'),
        globalSearch = document.querySelector('.global__search-input'),
        globalSearchDropdown = document.querySelector('.global__search-dropdown');
        
globalSearch.addEventListener('input', () => { 
    if(globalSearch.value.length > 0){
        globalSearchDropdown.classList.add('active');
        setTimeout(()=> {
            globalSearchDropdown.classList.add('show');
        }, 100)
    }else {
        globalSearchDropdown.classList.remove('show');
        setTimeout(()=> {
            globalSearchDropdown.classList.remove('active');
        }, 100)
    }
}) 

 
    
sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');  
    if(sideBar.classList.contains('active')){  
            pageContent.style.marginLeft = "275px"; 
            communContent.classList.add('change') 
    }else {  
        dropdownList.classList.remove('active')
        pageContent.style.marginLeft = "65px";  
        communContent.classList.remove('change')
    }
}); 
         
userBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('open')
});

visitedPage.forEach(item => {
    item.addEventListener('click', ()=> {
        visitedPage.forEach(elem => {
            elem.classList.remove('visited')
            if(elem.closest(sideBarSet)){
                elem.closest(sideBarSet).classList.remove('visited')
            }
        })
        if(item.closest(sideBarSet)){ 
            item.closest(sideBarSet).classList.add('visited')
        }
        item.classList.add('visited')
    })
})  

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
    dropdownList.classList.toggle('active'); 
    if(dropdownList.classList.contains('active')){
        sideBar.classList.add('change-height')
    }else sideBar.classList.remove('change-height')
})