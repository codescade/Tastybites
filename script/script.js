let hamburger = document.getElementById('hamburger');
let navbar_small_screen = document.getElementsByClassName('navbar_links_container-small_screen')[0];

hamburger.addEventListener('click', () => {
    toggleActive()
})

const toggleActive = () => {
    console.log('Toggle');
    navbar_small_screen.classList.toggle('active');
}

let slide_count = 1;
const slideNext = (parent_id, elems_class_name) => {
    let parent = document.getElementById(parent_id);
    if ((parent.getElementsByClassName(elems_class_name).length) < slide_count + 2) {

    } else {
        let vis_elem = parent.getElementsByClassName(elems_class_name)[slide_count];
        let nxt_elem = parent.getElementsByClassName(elems_class_name)[slide_count + 1];
        vis_elem.classList.add('display-none');
        nxt_elem.classList.remove('display-none');
        slide_count += 1;
    }
}
const slidePrevious = (parent_id, elems_class_name) => {
    let parent = document.getElementById(parent_id);
    if (0 > slide_count - 1) {

    } else {
        let vis_elem = parent.getElementsByClassName(elems_class_name)[slide_count];
        let pre_elem = parent.getElementsByClassName(elems_class_name)[slide_count - 1];
        vis_elem.classList.add('display-none');
        pre_elem.classList.remove('display-none');
        slide_count -= 1;
    }
}