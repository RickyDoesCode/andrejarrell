let body  = document.getElementsByTagName('body')[0];
let btn = document.getElementById('toggle');

if (localStorage.theme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    btn.innerHTML('🌙 Toggle Theme');
};

let toggle = () => {
    if (localStorage.theme === 'light') {
        body.setAttribute('data-theme', 'dark');
        btn.innerHTML('🌙 Toggle Theme');
        localStorage.theme = 'dark';
    } else {
        body.setAttribute('data-theme', 'light');
        btn.innerHTML('☀️ Toggle Theme');
        localStorage.theme = 'light';
    };
};