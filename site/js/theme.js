let body = document.getElementsByTagName('body')[0];
let btn = document.getElementById('toggle');

if (localStorage.theme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    btn.innerText = '🌙 Toggle Theme';
}

let toggle = () => {
    if (localStorage.theme === 'light') {
        body.setAttribute('data-theme', 'dark');
        btn.innerText = '🌙 Toggle Theme';
        localStorage.theme = 'dark';
    } else {
        body.setAttribute('data-theme', 'light');
        btn.innerText = '☀️ Toggle Theme';
        localStorage.theme = 'light';
    }
};
