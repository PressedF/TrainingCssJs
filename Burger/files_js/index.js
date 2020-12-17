var isOpen = false;
var d = document;
var query = document.querySelector('.menu_btn');
var query_for_a = document.querySelector('.links');
query.addEventListener('click', function () {
    if (!isOpen) {
        query.classList.add('active');
        query_for_a.classList.add('active_a');
        isOpen = true;
    }
    else {
        query.classList.remove('active');
        query_for_a.classList.remove('active_a');
        isOpen = false;
    }
    console.dir(isOpen);
});
