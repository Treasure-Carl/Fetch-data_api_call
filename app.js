const apiUrl = 'https://jsonplaceholder.typicode.com';
async function fetchPosts(){
    try{
    // developer.mozila.org
    
    const response = await fetch(`${apiUrl}/posts`);
    
    if (!response.ok){
        throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    return await response.json();
} catch (e){
console.log(e)
}


 }

 function listPosts(postContainerElementId){
const postContainerElement = document.getElementById('post-items-container')
 
    if (!postContainerElement){
        return;
    }
    fetchPosts()
    .then(posts => {
if(!posts){ 
    postContainerElement.innerText = 'No posts'
    return ;
}

    for(const post of posts){
        postContainerElement.appendChild(postElement(post))
    }


    }).catch(e => {
      console.log(e);  
    })

 }
 function postElement(post){
   const anchorElement = document.createElement('a');
   anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`) 
   anchorElement.setAttribute('target', '_blank');
   anchorElement.innerText = post.title

   const postTitleElement = document.createElement('h3');
   postTitleElement.appendChild(anchorElement);

   return postTitleElement;
 }
