// const profiles = data.results;

// let profile_div = document.createElement("div");

// for(x of profiles){
//     let user = document.createElement("div");
//     user.className = "card";
//     user.style.backgroundColor = "red";
//     user.innerText = profile.name.first;
//     profile_div.appendChild(user);
// }

// profile_div.style.display = "flex";
// profile_div.style.flexDirection = "row";

// let body = document.querySelector("body");
// body.appendChild(profile_div);






// for(let i=0; i<data["results"].length; i++){        
//     let result = data["results"][i];
//     let picture = result.picture.large;
//     console.log(picture);
//     let firstName = result.name.first       //assign var to looped first names
//     let text = document.getElementsByClassName("searchbar")         //assign var to search bar text
//     if(firstName === text.innerText){
//     let lastName = result.name.last;
//     let h1Tag = document.createElement("h1");
//     let imgTag = document.createElement("img");
//     imgTag.src = picture;
//     let body = document.querySelector("body");
//     h1Tag.innerText = firstName + " " + lastName;
//     body.appendChild(imgTag);
//     body.appendChild(h1Tag);
//     }
// // }

// let results = data.results;
// console.log(results);
function search(){
    for(let i=0; i<data["results"].length; i++){        
    let result = data["results"][i]
    let picture = result.picture.large;
    console.log(picture);
    let firstName = result.name.first 
    let text = document.querySelector("input")
    if(firstName === text.value){
        let lastName = result.name.last;
        let h1Tag = document.createElement("h1");
        let imgTag = document.createElement("img");
        let profileDiv = document.createElement("div");
        imgTag.src = picture;
        let body = document.querySelector("body");
        h1Tag.innerText = firstName + " " + lastName;
        body.appendChild(profileDiv);
        profileDiv.appendChild(imgTag);
        profileDiv.appendChild(h1Tag);
        profileDiv.classList.add("profile")
    }
    }
}

document.getElementById("search_form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Finding matches")
    console.log(search())
});



// let myPic = result.picture.large
