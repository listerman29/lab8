const images = [
    {
      preview: 'img/cat-2605502_1280.jpg',
      original: 'img/cat-2605502_1280.jpg',
      description: 'Placeholder Image 1',
    },
    {
      preview: 'img/cat-1045782_1280.jpg',
      original: 'img/cat-1045782_1280.jpg',
      description: 'Placeholder Image 2',
    },
    {
      preview: 'img/cat-1151519_1280.jpg',
      original: 'img/cat-1151519_1280.jpg',
      description: 'Placeholder Image 3',
    },
    {
        preview: 'img/cat-2934720_1280.jpg',
        original: 'img/cat-2934720_1280.jpg',
        description: 'Placeholder Image 3',
    },
    {
        preview: 'img/cat-2083492_1280.jpg',
        original: 'img/cat-2083492_1280.jpg',
        description: 'Placeholder Image 3',
    },
    {
        preview: 'img/kitten-4611189_1280.jpg',
        original: 'img/kitten-4611189_1280.jpg',
        description: 'Placeholder Image 3',
    },
  ];
  
  const galleryContainer = document.querySelector('.gallery');
  
  // Генеруємо розмітку галереї
  const galleryMarkup = images
    .map(
      ({ preview, original, description }) =>
        `<li>
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </li>`
    )
    .join('');
  
  // Додаємо розмітку у контейнер галереї
  galleryContainer.innerHTML = galleryMarkup;
  
  // Делегування для відкриття модального вікна
  galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Перевірка, чи клік був на зображенні
    if (event.target.nodeName !== 'IMG') {
      return;
    }
  
    const originalImageURL = event.target.dataset.source;
  
    // Використання basicLightbox для відкриття модального вікна
    const instance = basicLightbox.create(`
      <img src="${originalImageURL}" alt="${event.target.alt}">
    `);
  
    instance.show();
  });
  