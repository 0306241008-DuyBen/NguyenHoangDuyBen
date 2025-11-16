document.addEventListener('DOMContentLoaded', function() {

    const userIcon = document.getElementById('user-icon');
    const modalBackdrop = document.getElementById('modal-backdrop');

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const userModal = document.getElementById('user-modal');

    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    let isLoggedIn = false;

    function hideAllModals() {
        modalBackdrop.classList.add('hidden');
        loginModal.classList.add('hidden');
        registerModal.classList.add('hidden');
        userModal.classList.add('hidden');
    }

    function showLoginModal() {
        hideAllModals();
        modalBackdrop.classList.remove('hidden');
        loginModal.classList.remove('hidden');
    }

    function showRegisterModal() {
        hideAllModals();
        modalBackdrop.classList.remove('hidden');
        registerModal.classList.remove('hidden');
    }

    function showUserModal() {
        hideAllModals();
        modalBackdrop.classList.remove('hidden');
        userModal.classList.remove('hidden');
    }

    userIcon.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        if (isLoggedIn) {
            showUserModal();
        } else {
            showLoginModal();
        }
    });

    modalBackdrop.addEventListener('click', hideAllModals);

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        showRegisterModal();
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        showLoginModal();
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        if (username === 'admin' && password === 'admin') {
            alert('Đăng nhập Admin thành công!');
            window.location.href = 'admin.html'; 
        
        } else if (username === 'user' && password === 'user') {
            alert('Đăng nhập User thành công!');
            isLoggedIn = true; 
            hideAllModals(); 
        
        } else {
            alert('Sai tên tài khoản hoặc mật khẩu! \n(Gợi ý: user/user hoặc admin/admin)');
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Đăng ký thành công! Vui lòng đăng nhập.');
        showLoginModal();
    });


    const navLMHT = document.getElementById('nav-lmht');
    const navTFT = document.getElementById('nav-tft');
    const navEsports = document.getElementById('nav-esports');

    function showComingSoon(event) {
        event.preventDefault();
        alert('Chưa hoàn thành, vui lòng thử lại sau');
    }
    
   
    if (navLMHT) {
        navLMHT.addEventListener('click', showComingSoon);
    }
    if (navTFT) {
        navTFT.addEventListener('click', showComingSoon);
    }
    if (navEsports) {
        navEsports.addEventListener('click', showComingSoon);
    }
 

});