
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('#Sub');
let ul = document.querySelector('.get');
btn.addEventListener('click', () => {
getName();
})
async function getName() {
    try{
        let country = document.querySelector(".one").value.trim();
        let state = document.querySelector(".two").value.trim();
       let api =  await axios.get(url + country);
       
       ul.innerHTML = " ";

       api.data.forEach(college => {
        if(college["state-province"] && college["state-province"].toLowerCase() === state){
            let li  = document.createElement('li');
            li.innerText = college.name;
            ul.appendChild(li);
        }
       });
    }
    catch(err){
        console.log("Error - ", err);
    } }
