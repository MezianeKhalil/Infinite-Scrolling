window.addEventListener('scroll',()=>{
    // scrollTop => values of scroll
    // clientHeight => height of visible body
    // scrollHeight => height of all body
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if(clientHeight + scrollTop >= scrollHeight - 10){
        getPosts()
    }
})
async function getPosts(){
     fetch(`https://jsonplaceholder.typicode.com/posts/${(Math.floor(Math.random()*100)+1)}`).then(response => response.json()).then(json => renderData(json))
}
function renderData(data){
    let div = document.createElement('div')
    div.classList.add('my-2','p-4','w-full','overflow-hidden','lg:w-1/2','bg-white','rounded-lg','shadow-sm');
    div.innerHTML = `
        <h2 class="text-xl text-gray-900 font-bold capitalize mb-2">${data.title}</h2>
        <p class="text-gray-800 mb-2 leading-7">${data.body}</p>
    `;
    document.getElementById('postsContainer').appendChild(div)
}
document.addEventListener('DOMContentLoaded',()=>{
    x = 10
    while(x>0){
        getPosts()
        x--
    }
})
