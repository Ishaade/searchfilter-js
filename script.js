let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];
let cardhold=document.querySelector("#cards");
let main=document.querySelector("#main");
main.appendChild(cardhold);
let inp=document.querySelector("input");

function showuser(arr){
arr.forEach(function (user){
let card=document.createElement("div");
let content=document.createElement("div");
let h6=document.createElement("h6");
let p=document.createElement("p");
card.id="card";
content.classList.add("content");
content.appendChild(h6);
content.appendChild(p);
card.appendChild(content);
card.style.backgroundImage=`url(${user.pic})`;
h6.textContent=user.name;
p.textContent=user.bio;
cardhold.appendChild(card);
})
}
// showuser(users);
inp.addEventListener("input",function(){
   let newuser= users.filter((user)=>{  return user.name.startsWith(inp.value);}
      )
      document.querySelector("#cards").innerHTML = "";
      if(newuser.length > 0){

        showuser(newuser);
      }
   else{
    let h4=document.createElement("h4");
    h4.textContent="no entry present";
    h4.style.color="red";
    cardhold.appendChild(h4);
   }
   

});
