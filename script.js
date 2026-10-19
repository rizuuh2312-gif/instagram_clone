document.addEventListener('DOMContentLoaded', () => {
    const heartBtn = document.querySelector('.heart-btn');
    const likeCountSpan = document.querySelector('.like-count');
    
    let isLiked = false;
    let likes = parseInt(likeCountSpan.innerText);

    heartBtn.addEventListener('click', () => {
        if (!isLiked) {
            heartBtn.classList.remove('far');
            heartBtn.classList.add('fas', 'active');
            likes++;
            isLiked = true;
        } else {
            heartBtn.classList.remove('fas', 'active');
            heartBtn.classList.add('far');
            likes--;
            isLiked = false;
        }
        likeCountSpan.innerText = likes;
    });
});
