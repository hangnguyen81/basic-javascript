// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const container = document.getElementById('container')
const imgs = [
    "images/pic_01.jpg",
    "images/pic_02.jpg",
    "images/pic_03.jpg",
    "images/pic_04.jpg",
    "images/pic_05.jpg",
    "images/pic_06.jpg"
]

function renderImg(arr){
    let listImages = ''
    for (let i = 0; i < arr.length; i++){
        listImages += `
            <img alt='Little flowers I collected' class="flower-img" src="${arr[i]}">
        `
    }
    return listImages
}

container.innerHTML = renderImg(imgs)