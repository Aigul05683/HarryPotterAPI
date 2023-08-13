// const root = document.querySelector('#root')
// fetch('https://hp-api.onrender.com/api/characters')
//     .then(response => {
//         if (!response.ok) throw new Error('Oops')
//         return response.json()
//     })
//     .then(data => {
//         const potterContainer = document.createElement('div')
//         potterContainer.classList.add('potterContainer')
//         data.forEach((el) => {
//             const person = document.createElement('div')
//             person.textContent = el.name
//             person.classList.add('person')
//             potterContainer.appendChild(person)
//             const br = document.createElement('h6', person)
//             person.appendChild(br)
//             const image = document.createElement('img')
//             image.setAttribute('src', el.image)
//             person.appendChild(image)
            
//         })
//         root.appendChild(potterContainer)
//     })
//     .catch((err) => console.log(err)) 


const apiURL = "https://harry-potter-api-en.onrender.com/db";

fetch(apiURL).then((res)=> res.json()).then((data)=>{
    data.characters.forEach(element=>
        document.getElementById('main').innerHTML +=
        '<div id="character">'+
        '<img src="' + element.image +'" width="200px" height"100px">'+
        '<div id="name">'+ element.character + '<div/>')
})