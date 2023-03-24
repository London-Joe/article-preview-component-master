const lady = document.querySelector('.lady');
const detail = document.querySelector('.detail');
const share = document.querySelector('.share');
const profile = document.querySelector('.profile');
const switchToShare = document.querySelectorAll('.hidden');
const tooltipContent = document.querySelector('.tooltipContent');

share.addEventListener('click', () =>{
lady.classList.toggle('hidden');
detail.classList.toggle('hidden');
share.classList.toggle('show');
profile.classList.toggle('show');
tooltipContent.classList.toggle('show');

switchToShare.forEach(function(e){
e.classList.toggle('hidden');
});
});