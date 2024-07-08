

const getuser = document.querySelector("#getuser");



function getNewUser(){
  fetch(`https://randomuser.me/api/`)
  .then(raw => raw.json())
  .then(result => {
   console.log(result.results[0]);
   
    // Object destructuring  
    const { name, email, gender, picture } = result.results[0];
    document.querySelector("#parent").innerHTML += `  
      <div class="card w-60 p-4 rounded-xl bg-zinc-800 overflow-hidden">
            <div class="w-20 h-20 rounded-2xl bg-zinc-500 mb-3">
                <img src="${picture.large}" alt="Profile Picture" class="rounded-2xl w-full h-full fit-cover"/>
            </div>
            <h3 class="font-semibold text-2xl">${name.title} ${name.first} ${name.last}</h3>
            <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
            <h6 class="text-sm opacity-40">${email}</h6>
            <p class="mt-5 text-xs font-semibold opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              voluptate
            </p>
          </div>`;
  });
  
}



getuser.addEventListener("click",()=>{
  getNewUser()
})