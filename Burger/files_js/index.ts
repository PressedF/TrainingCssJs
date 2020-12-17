var isOpen: boolean = false;

var d = document;
var query = d.querySelector('.menu_btn');
var query_for_a = d.querySelector('.links');

query.addEventListener('click', () => {
    if(!isOpen){
        query.classList.add('active');
        query_for_a.classList.add('active_a');
        isOpen = true;
    } else {
        query.classList.remove('active');
        query_for_a.classList.remove('active_a');
        isOpen = false;
    }
    console.dir(isOpen);
});
