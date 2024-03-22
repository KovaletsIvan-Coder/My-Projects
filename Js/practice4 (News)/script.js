fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json =>{
        json.forEach((item, index) => {
        const refreshButton = document.querySelector(".ul-refresh");
        const postList = document.querySelector(".post-list");

        refreshButton.addEventListener('click',()=>{
        refreshButton.style.transform = 'rotate(180deg)';
        refreshButton.style.transition = 'all 1s ease';
        
        const postItem = document.createElement("li");
        postItem.className = 'post-list-item';
        postList.appendChild(postItem);

        const itemIndex = document.createElement('span');
        itemIndex.className = 'post-number';
        itemIndex.innerHTML = index +1;
        postItem.appendChild(itemIndex);

        const postTitle = document.createElement('h4');
        postTitle.className = 'post-title';
        postTitle.innerHTML = item.title;
        postItem.appendChild(postTitle);

        const postText = document.createElement('p');
        postText.className = 'post-text';
        postText.innerHTML = item.body;
        postItem.appendChild(postText); 
        })
    });

      
      

      
        
      });  
       