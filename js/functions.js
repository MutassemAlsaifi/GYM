function clear(arr , class_name){
    arr.forEach(item => {
        item.classList.remove(class_name)
    });
}
