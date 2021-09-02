var form=document.getElementById("my form")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search=document.getElementById("search").value

    var originalname=search.split(' ').join('');

   document.getElementById("result").innerHTML=""


    async function githubapi(){
        let result= await fetch('https://api.github.com/users/'+originalname)
        let data=await result.json()
        return data;
    }
    let func=githubapi();

    githubapi().then((data)=>{console.log(data)})
    
    document.getElementById("result").innerHTML = `
      <a target="_blank"href=" https://api.github.com/users/${originalname}/repos"> <img src="${'https://avatars.githubusercontent.com/'+originalname}"/></a>
    `
    
})
