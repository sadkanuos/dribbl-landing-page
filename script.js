const themeToggle = document.getElementById('themeToggle');
const themeDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeLightIcon = document.getElementById('theme-toggle-light-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeLightIcon.classList.remove('hidden');
} else {
  themeDarkIcon.classList.remove('hidden');
}

themeToggle.addEventListener('click', toggleMode)

function toggleMode(){
    themeDarkIcon.classList.toggle('hidden');
    themeLightIcon.classList.toggle('hidden');

    if(localStorage.getItem('color-theme')){
        // Light -> Dark, save to localStorage
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}

