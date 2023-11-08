fetch("https://emojihub.yurace.pro/api/all/category/travel-and-places")
.then((response) => response.json())
.then((data)=>{
    console.log(data);
   document.getElementById("emoji").innerHTML = data.map(
    (post) =>
    `<div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title text-center text-bg-danger p-3">${post.name}</h5>
            <p class="card-text text-center">${post.category}</p>
        </div>
    </div>`
).join("");;
   
})
.catch((err) =>{
    console.log("Error:",err);
});