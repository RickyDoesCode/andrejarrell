let body  = document.getElementsByTagName('body')[0];

if (localStorage.theme === 'dark') {
    body.setAttribute('data-theme', 'dark');
};

let toggle = () => {
    if (localStorage.theme === 'light') {
        body.setAttribute('data-theme', 'dark');
        localStorage.theme = 'dark';
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.theme = 'light';
    };
};