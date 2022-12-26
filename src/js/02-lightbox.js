import { galleryItems } from './gallery-items.js';

const refs = {
    'gallery': document.querySelector('.gallery'),
}

function createGalleryItem ({preview, original, description}){
    const galleryLink= document.createElement('a')
    galleryLink.classList.add('gallery__item')
    galleryLink.href = original;
    const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = preview
    galleryImage.alt = description;
    galleryLink.append(galleryImage)
    return galleryLink
}

galleryItems.map((item)=>{
    refs.gallery.append(createGalleryItem(item))
})

new SimpleLightbox('.gallery a', {
    'captions':true,
    'captionsData':'alt',
    'captionPosition':'bottom',
    'captionDelay':250,
})

