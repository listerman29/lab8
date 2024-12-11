const images = [
    {
      preview: 'https://via.placeholder.com/150x100',
      original: 'https://via.placeholder.com/800x600',
      description: 'Placeholder Image 1',
    },
    {
      preview: 'https://via.placeholder.com/150x100/111',
      original: 'https://via.placeholder.com/800x600/111',
      description: 'Placeholder Image 2',
    },
    {
      preview: 'https://via.placeholder.com/150x100/222',
      original: 'https://via.placeholder.com/800x600/222',
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
  