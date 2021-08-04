let postsArr = []
const postTitle = document.getElementById('post-title')
const postBody  = document.getElementById('post-body')
const blogPost = document.getElementById('blog-post')
const postForm = document.getElementById('post-form')

function renderPosts(arr){
    let listItems = ''
    for (let item of arr){
        listItems += `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        <hr/>
        `
    }
    blogPost.innerHTML = listItems
}

//loading data (5 posts only) from APIs and display
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0,5)
        renderPosts(postsArr)
})

// form submit
postForm.addEventListener("submit", function(e){
    e.preventDefault() // prevent the refesh action of browser
    const data = {
        title: postTitle.value,
        body: postBody.value
    }
    //send new post to server
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })   
        .then(res => res.json())
        .then(data => {
            postsArr.unshift(data)
            renderPosts(postsArr)
        })
        postForm.reset()
})

