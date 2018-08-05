const $modal = $('.js-modal');
const className = 'hidden';

const isModalPresent = () => {
    return $('.js-modal').length > 0;
};

const showModal = () => {
    $modal.removeClass(className);
};

$('.js-modal-close').on('tap click',() => {
    $modal.addClass(className);
});

module.exports = {
    isModalPresent: isModalPresent,
    showModal: showModal
};