import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery')

const saveItems = galleryItems.map(item => 
`<li class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
</li>`).join('')
galleryList.insertAdjacentHTML('beforeend', saveItems)

galleryList.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
      const imageUrl = event.target.dataset.source;
      const imageDesc = event.target.getAttribute('alt');
      const instance = basicLightbox.create(`<img src="${imageUrl}" alt="${imageDesc}">`,{
        onShow: () => {
          document.addEventListener('keydown', closeEscape)
        },
        onClose: () => {
          document.removeEventListener('keydown', closeEscape);
      }
    });
      instance.show();
      function closeEscape(event){
        if(event.code === 'Escape'){
          instance.close()
        }
      }
    }
})



console.log(galleryItems);