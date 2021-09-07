function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}
loadPost()

function displayPost(posts){
    const postContainer =document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post');
        div.innerHTML=`
        <h1>${post.title}</h1>
        <p>${post.body}</p>`;
        postContainer.appendChild(div)
    }
}