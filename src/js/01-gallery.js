import { galleryItems } from './gallery-items.js';

const refs = {
    'gallery': document.querySelector('.gallery'),
    'body': document.querySelector('body'),
}

galleryItems.map((item)=>{
    refs.gallery.append(createGalleryItem(item))
})

refs.gallery.addEventListener('click', createModalHandler)


function createModalHandler(e) {
    e.preventDefault()

    const instance = basicLightbox.create(`
    <div class="modal">
        <img
            class="gallery__image"
            src=${e.target.getAttribute('data-source')}
            data-source="large-image.jpg"
            alt="Image description"
        />
    </div>
    `,{
        onShow: () => {
            refs.body.addEventListener('keydown', escapeCloseModalHandler)
        },
        onClose: () => {
            refs.body.removeEventListener('keydown', escapeCloseModalHandler)
        }
    })
    instance.show()

    function escapeCloseModalHandler(e) {
        e.key === 'Escape' && instance.close()
    }
}


function createGalleryItem ({preview, original, description}){
    const galleryItem = document.createElement('div')
    galleryItem.classList.add('gallery__item')
    const galleryLink= document.createElement('a')
    galleryLink.classList.add('gallery__link')
    const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = preview
    galleryImage.dataset.source = original;
    galleryLink.href = original;
    galleryImage.alt = description;
    galleryLink.append(galleryImage)
    galleryItem.append(galleryLink)
    return galleryItem
}

