document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.grid-item img');
    
    images.forEach(image => {
        image.addEventListener('click', function () {
            const lightbox = document.createElement('div');
            lightbox.classList.add('image-lightbox');
            
            const content = document.createElement('div');
            content.classList.add('lightbox-content');
            
            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;
            
            content.appendChild(img);
            lightbox.appendChild(content);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});
