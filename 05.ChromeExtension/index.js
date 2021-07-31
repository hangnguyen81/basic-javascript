let myLinks = []
const inputText = document.getElementById('input-text')
const tbnSaveInput = document.getElementById('tbn-save-input')
const tbnSaveTab = document.getElementById('tbn-save-tab')
const listOfLinks = document.getElementById('list-of-links')
const btnDelete = document.getElementById('tbn-delete')
// data from LocalStorage is string, but we need it in an array, use JSON.parse()
const linksFromLocalStorage = JSON.parse(localStorage.getItem('myLinks'))

if (linksFromLocalStorage){
    myLinks = linksFromLocalStorage
    render(myLinks)
}

tbnSaveInput.addEventListener('click', function(){
    myLinks.push(inputText.value)
    localStorage.setItem('myLinks',JSON.stringify(myLinks))
    inputText.value = '' 
    render(myLinks)
})

btnDelete.addEventListener('dblclick', function(){
    localStorage.clear()
    myLinks = []
    render(myLinks)

})

tbnSaveTab.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem('myLinks',JSON.stringify(myLinks))
        render(myLinks)
    })
})

function render(links){
    let listItems = ''
    for (let i = 0; i<links.length; i++){
        listItems += `
            <li>
                <a href = ${links[i]} target='_blank'> ${links[i]} </a>
            </li>
        `
    } 
    listOfLinks.innerHTML = listItems

    // while(listOfLinks.hasChildNodes()){
    //     listOfLinks.removeChild(listOfLinks.firstChild)
    // }
    // for (let i = 0; i<links.length; i++){
    //     const liInUL = document.createElement('li')
    //     const aLink = document.createElement('a')
    //     aLink.setAttribute('href', links[i]) 
    //     aLink.setAttribute('target','_blank')
    //     aLink.innerText = links[i]
    //     liInUL.appendChild(aLink)
    //     listOfLinks.appendChild(liInUL)
    // }
}



