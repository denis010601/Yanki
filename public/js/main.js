let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

let burger = document.getElementById('burger');
    burgerMenu = document.getElementById('burgerMenu');

burger.onclick = function() {
    burger.classList.toggle('is-active');
    burgerMenu.classList.toggle('is-active');
    
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzZWxlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2VsZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faGVhZGVyJyk7XHJcbiAgICBsZXQgc2VsZWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2l0ZW0nKTtcclxuXHJcbiAgICBzZWxlY3RIZWFkZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VG9nZ2xlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsZWN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RDaG9vc2UpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdENob29zZSgpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICBzZWxlY3QgPSB0aGlzLmNsb3Nlc3QoJy5zZWxlY3QnKSxcclxuICAgICAgICAgICAgY3VycmVudFRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY3VycmVudCcpO1xyXG4gICAgICAgIGN1cnJlbnRUZXh0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuc2VsZWN0KCk7XHJcblxyXG5sZXQgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpO1xyXG4gICAgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXJNZW51Jyk7XHJcblxyXG5idXJnZXIub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgIFxyXG59OyJdLCJmaWxlIjoibWFpbi5qcyJ9