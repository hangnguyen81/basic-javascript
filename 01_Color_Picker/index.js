const colorPalette = document.getElementById('color-palette')

function displayColors(colors){
    let colorsHtml = ''
    // using FOR loop
    /*
    for (let color of colors){
        colorsHtml += `
            <div class = "my-color" style="background-color: ${color.value}">${color.value}</div>
        `
    }
    */

    // using map() method of array
    colorsHtml = colors.map(color =>{
        return `<div class="my-color" style="background-color: ${color.value}">${color.value}</div>`
    }).join('')

    colorPalette.innerHTML  = colorsHtml
}

async function getColors(colorCount){    
    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`)
    let data = await response.json()
    let colors = data.colors
    displayColors(colors)
}

let count = 100
getColors(count)