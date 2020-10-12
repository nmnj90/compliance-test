for(var i = 0; i < document.getElementsByClassName('js-signin-action').length; i++) {
    document.getElementsByClassName('js-signin-action')[i].addEventListener('click', function(){
        document.querySelector('#js-signin-wrapper').classList.remove('hide-from-screen');
        document.querySelector('#js-form-wrapper').classList.remove('signup-active');
        document.querySelector('#js-signup-wrapper').classList.add('hide-from-screen');
        document.querySelector('#js-forgot-password-wrapper').classList.add('hide-from-screen');

        if(document.getElementById('js-signin') && document.getElementById('js-signup')) {
            document.querySelector('#js-signup').classList.remove('hide');
            document.querySelector('#js-signin').classList.add('hide');
        }
    });
}

for (var j = 0; j < document.getElementsByClassName('js-signup-action').length; j++) {
    document.getElementsByClassName('js-signup-action')[j].addEventListener('click', function(){
        document.querySelector('#js-signup-wrapper').classList.remove('hide-from-screen');
        document.querySelector('#js-form-wrapper').classList.add('signup-active');
        document.querySelector('#js-signin-wrapper').classList.add('hide-from-screen');
        document.querySelector('#js-forgot-password-wrapper').classList.add('hide-from-screen');

        if (document.getElementById('js-signin') && document.getElementById('js-signup')) {
            document.querySelector('#js-signin').classList.remove('hide');
            document.querySelector('#js-signup').classList.add('hide');
        }
    });
}

document.querySelector('.js-forgot-password-action').addEventListener('click', function(){
    document.querySelector('#js-forgot-password-wrapper').classList.remove('hide-from-screen');
    document.querySelector('#js-signin-wrapper').classList.add('hide-from-screen');
    document.querySelector('#js-signup-wrapper').classList.add('hide-from-screen');
});

for(var k = 0; k < document.getElementsByClassName('js-link').length; k++) {
    document.getElementsByClassName('js-link')[k].addEventListener('click', function(event) {
        let linkTarget = event.target.dataset['linkTarget'];

        if (linkTarget == undefined) {
            return false;
        }

        let linkedEl = document.getElementsByClassName('js-linked');
        let linkedTargetEl = document.querySelector(linkTarget);

        if (linkedEl == undefined) {
            console.log(`Not exists: ${linkTarget}`);
            return false;
        }
        for (var i = 0; i < linkedEl.length; i++) {
            if (linkedEl[i] == undefined) {
                console.log(`Not exists: ${linkedEl[i]}`);
                return false;
            }
            linkedEl[i].classList.add('hide');
        }
        linkedTargetEl.classList.remove('hide');

        addToBodyFormClass(event);
    })
}

document.querySelector('.js-link').addEventListener('click', function(event) {
    let linkTarget = event.target.dataset['linkTarget'];
    if (linkTarget) {
        window.scroll({
            behavior: 'smooth',
            top: document.querySelector(linkTarget).offsetTop
        });
    }
})

var addToBodyFormClass = function(event) {
    let linkForm = event.target.dataset['bodyClass'];
    let links = document.getElementsByClassName('js-link');

    if (linkForm == undefined) {
        return false;
    }

    for (var i = 0; i < links.length; i++) {
        document.querySelector('body').classList.remove(links[i].dataset['bodyClass']);
    }

    document.querySelector('body').classList.add(linkForm);
}
