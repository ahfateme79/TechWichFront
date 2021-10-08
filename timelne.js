(function () {
    var d = document,
        tabs = d.querySelector('.timeline'),
        tab = d.querySelectorAll('.timeline .tab-btn'),
        contents = d.querySelectorAll('.code-result');
    tabs.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'DIV') {
            // change tabs
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove('box-shadow');
            }
            e.target.classList.toggle('box-shadow');

            // change content
            for (i = 0; i < contents.length; i++) {
                contents[i].classList.remove('block');
            }

            var tabId = '#' + e.target.dataset.tabId;
            d.querySelector(tabId).classList.toggle('block');
        }
    });
})();

$(function () {
    setInterval(() => {
        var tab = $('.timeline .tab-btn')
        var ontab = tab.filter('.box-shadow')
        var nexttab = ontab.index() < tab.length - 1 ? ontab.next() : tab.first();
        nexttab.click()
    }, 3500);
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        var tab = document.querySelectorAll('.timeline > div')
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove('box-shadow')

        }

    }
})