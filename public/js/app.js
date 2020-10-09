for(var i = 0; i < document.getElementsByClassName('js_signin_action').length; i++) {
    document.getElementsByClassName('js_signin_action')[i].addEventListener('click', function(){
        document.querySelector('#js_signin_wrapper').classList.remove('hide_from_screen');
        document.querySelector('#js_form_wrapper').classList.remove('signup_active');
        document.querySelector('#js_signup_wrapper').classList.add('hide_from_screen');
        document.querySelector('#js_forgot_password_wrapper').classList.add('hide_from_screen');
    
        if(document.getElementById('js_signin') && document.getElementById('js_signup')) {
            document.querySelector('#js_signup').classList.remove('hide');
            document.querySelector('#js_signin').classList.add('hide');
        }
    });
}

for (var j = 0; j < document.getElementsByClassName('js_signup_action').length; j++) {
    document.getElementsByClassName('js_signup_action')[j].addEventListener('click', function(){
        document.querySelector('#js_signup_wrapper').classList.remove('hide_from_screen');
        document.querySelector('#js_form_wrapper').classList.add('signup_active');
        document.querySelector('#js_signin_wrapper').classList.add('hide_from_screen');
        document.querySelector('#js_forgot_password_wrapper').classList.add('hide_from_screen');
    
        if (document.getElementById('js_signin') && document.getElementById('js_signup')) {
            document.querySelector('#js_signin').classList.remove('hide');
            document.querySelector('#js_signup').classList.add('hide');
        }
    });
}

document.querySelector('.js_forgot_password_action').addEventListener('click', function(){
    document.querySelector('#js_forgot_password_wrapper').classList.remove('hide_from_screen');
    document.querySelector('#js_signin_wrapper').classList.add('hide_from_screen');
    document.querySelector('#js_signup_wrapper').classList.add('hide_from_screen');
});

for(var k = 0; k < document.getElementsByClassName('js_link').length; k++) {
    document.getElementsByClassName('js_link')[k].addEventListener('click', function(event) {
        let linkTarget = event.target.dataset['linkTarget'];
    
        if (linkTarget == undefined) {
            return false;
        }
    
        let linkedEl = document.getElementsByClassName('js_linked');
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

document.querySelector('.js_link').addEventListener('click', function(event) {
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
    let links = document.getElementsByClassName('js_link');

    if (linkForm == undefined) {
        return false;
    }

    for (var i = 0; i < links.length; i++) {
        document.querySelector('body').classList.remove(links[i].dataset['bodyClass']);
    }

    document.querySelector('body').classList.add(linkForm);
}
