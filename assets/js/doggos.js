//Fetching
const DOG_URL = "https://dog.ceo/api/breeds/image/random";
// const promise = fetch(DOG_URL); //fetch combac with a promise take time and when come back

//Html
const doggos    = document.getElementById("imgWrapper");
const lodingGif = document.getElementById("loadingImg");

//when promise come back THEN
function addNewDog(){
  lodingGif.classList.remove('hide');
  const promise = fetch(DOG_URL); //fetch combac with a promise take time and when come back

  promise.then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
  .then(function(processingPromise) { //processedResponse puede ser cualquier cosa

      if(processingPromise.status != null && processingPromise.status === 'success'){
        console.log('Request successful', processingPromise);
        // const img       = document.createElement('img');
        // img.setAttribute('src', processingPromise.message);
        // img.setAttribute('alt', 'doggy');
        // img.setAttribute('class', 'doggyImg');
        // img.appendChild(doggos);
        
        
        document.getElementById("imgWrapper").innerHTML = "<img class='doggyImg' src='"+processingPromise.message+"' width='auto' >";
        lodingGif.classList.add('hide');
      }

      
    })
  .catch(function(error) {
    console.log('Request failed', error)
    });

}

document.querySelector('#addImg').addEventListener('click', addNewDog);