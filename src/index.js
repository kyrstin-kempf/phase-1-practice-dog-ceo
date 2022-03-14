console.log('%c HI', 'color: firebrick')

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

//CHALLENGE 1: Fetch API------------------------------------------------
function fetchDogImages(url){
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => data['message'].forEach(dogImage => renderOneImage(dogImage)))
    // .then(data => console.log('array of URLs', data['message']))
    //(firstLink => into parameter)
    //(secondLink => into paratmeter)
    //(thirdLink => into parameter)
    // element => console.log(element))
}

function fetchDogBreeds(list){
    // console.log(url)
    fetch(list)
    .then(res => res.json())
    // .then(data => Object.keys(data['message']))
    .then(data => {
        let arrayOfBreeds = Object.keys(data['message'])
        arrayOfBreeds.forEach(breedName => renderOneBreed(breedName))
    })
    // .then(data => console.log('Array of breed names',Object.keys(data['message'])))
}

//RUN FUNCTIONS------------------------------------------------
function initialize(){
    fetchDogImages(imgURL)
    fetchDogBreeds(breedUrl)
    // filterDropDown();
}
initialize()
  
//ADD IMAGE TO DOM------------------------------------------------
function renderOneImage(image) {
   // create a variable to append each parameter link to document
   let dogCEO = document.createElement('img');
    // .appendChild(document.createElement('li').appendChild(document.createElement('img')));
    // let createList = document.createElement('ul')
    document.querySelector("#dog-image-container").append(dogCEO)
    dogCEO.style.width = "150px"
    dogCEO.style.height = "150px"
    //take variable and add the source
    dogCEO.src = image
}

function renderOneBreed(breed) {
    // create a variable to append each parameter link to document
     let dogBreedList = document.createElement('li');
     dogBreedList.className = 'breedName'
     dogBreedList.innerText = breed
     document.querySelector("#dog-breeds").append(dogBreedList)
     //the arrow function 'e' tie it to the changeFontColor function
     dogBreedList.addEventListener('click', e => changeFontColor(e))
    //  console.log(querySelector("#dog-breeds"))
 
    console.log(dogBreedList.innerText.startsWith('a'));
}

//Change Font Color------------------------------------------------

function changeFontColor(e) {
    console.log(e)
    //target tells the curser the specific click point is the target
    e.target.style.color = "#B3CBB9"
}

// Filter Breeds Based On Dropdown------------------------------------------------
function filterList() {
    let dogSelect = document.querySelector('#breed-dropdown')
    console.log(dogSelect)
//     dogSelect.addEventListener("change", (event) => {
//     console.log(event);
// })
}

// let dogSelect = document.getElementById('breed-dropdown')
//   dogSelect.addEventListener("change", (event) => {
//     makeFetchHappen()
//     .then(res => {
//       let dogBreedsArr = Object.keys(res.message)

//       let filteredArray = dogBreedsArr.filter(breed => {
//         return breed.startsWith(event.target.value)
//       })

//       dogUL.innerHTML = ""

//       filteredArray.forEach(addLI)


    // console.log(dogBreedList.innerText);
    // let breedList = dogBreedList.innerText.startsWith('a');
    // if(breedList = true) {
    //     dogBreedList
    // }

    // console.log(document.querySelectorAll('select'));
    console.log(document.querySelectorAll('option')[1]);
    // console.log(document.querySelector('#breed-dropdown'));
    // console.log(filter[1]);
    // console.log(document.getElementById('breed-dropdown'))
    // console.log(filter.options);
    // console.log(document.getElementById('breed-dropdown'))
// }

// function dropDown () {
    // console.log(document.getElementById("#dog-breeds").options.length)
// }

// const startsWithA = dogBreedList.filter((letter) => letter.startsWith("a"));

//         console.log(startsWithA);



// const emptyArray = [];
    // console.log(emptyArray)
    // emptyArray.push(dogBreedList); 
    // create empty array push
    // .filter
    
    //.filter works with arrays
    // dogBreedList.filter(letter => console.log(letter))
        // forEach 

    // function filterDropDown() {
    //     let filter = document.querySelectorAll('option');

    //     if (dogBreedList === filter[0]) {
    //         dogBreedList.
    //     }
    //     else {
    //         f.hide();
    //     }
    // }