const images = [
    {
        preview: 'img/krik.png',
        original: 'img/krik.png',
        description: 'Едвард Мунк. Крик',
    },
    {
        preview: 'img/time.png',
        original: 'img/time.png',
        description: 'Сальвадор Далі. Постійність Пам*яті',
    },
    {
        preview: 'img/voshod.png',
        original: 'img/voshod.png',
        description: 'Клод Моне. Враження. Схід сонця',
    },
    {
        preview: 'img/pikasso.png',
        original: 'img/pikasso.png',
        description: 'Пабло Пікасс. Герніка',
    },
    {
        preview: 'img/mona.png',
        original: 'img/mona.png',
        description: 'Леонардо да Вінчі. Джоконда',
    },
    {
        preview: 'img/van_gog.png',
        original: 'img/van_gog.png',
        description: 'Вінсент ван Гог. Автопортрет',
    },
    {
        preview: 'img/hanga-baba.png',
        original: 'img/hanga-baba.png',
        description: 'Тарас Шевченко. Ханга-Баба',
    },
    {
        preview: 'img/pey.png',
        original: 'img/pey.png',
        description: 'Пейзаж невідомого автора',
    },
    {
        preview: 'img/zenshina.png',
        original: 'img/zenshina.png',
        description: 'Пабло Пікасо. Жінка що плаче',
    },
    {
        preview: 'img/kozaky.png',
        original: 'img/kozaky.png',
        description: 'Ілля Рєпін. Запорожці',
    },
];

const galleryOrg = document.querySelector('.gallery');

const createImagesHtml = (images) => {
    return images.map(({ preview, original, description }) => {
        return `
            <li class="gallery-item">
                <img class ="gallery-image" src="${preview}" 
                data-source="${original}" 
                alt="${description}">
            </li>
        `;
    }).join('');
};



const imagesHtml = createImagesHtml(images)
galleryOrg.innerHTML = imagesHtml;
galleryOrg.addEventListener('click', onImage);

function onImage(event) {
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" style="max-width: 90vw; max-height: 90vh;"> <p style="color: white">${event.target.alt}</p>`);
    instance.show();
}