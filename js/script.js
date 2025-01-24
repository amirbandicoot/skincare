function toggleMenu(e) {
    const menu = document.getElementById('menu-bar');
    //const val = getComputedStyle(menu).getPropertyValue('display');
    if(menu.style.display != 'block') {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.style.left = '0px';
        }, 1);
    } else {
        menu.style.left = '-300px';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300);
    }
}

function createMenu(e) {
    const menu = document.getElementById('menu-bar');
    const hArray = ['Vitamins', 'Acids'];
    const cArray = [['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Vitamin E'], ['Azelaic Acid', 'Glycolic Acid', 'Lactic Acid', 'Malic Acid', 'Salicylic Acid', 'Tartaric Acid']];
    for(let i = 0; i < hArray.length; i++) {
        const item = document.createElement('div');
        const header = document.createElement('h3');
        item.className = 'menu-item';
        header.className = 'menu-item-header';
        header.innerHTML = hArray[i];
        item.appendChild(header);
        for(let j = 0; j < cArray[i].length; j++) {
            const subItem = document.createElement('p');
            subItem.className = 'menu-item-content';
            subItem.innerHTML = cArray[i][j];
            subItem.addEventListener('click', e => {
                const indicator = document.getElementById('menu-indicator');
                indicator.style.opacity = '0.5';
                indicator.style.top = e.target.offsetTop + 5 + 'px';
                setTimeout(() => {
                    indicator.style.opacity = '1';
                }, 100);
            })
            item.appendChild(subItem);
        }
        menu.appendChild(item);
    }
    
}