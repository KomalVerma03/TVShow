const form=document.querySelector('#SearchForm')
form.addEventListener('submit',async function(e){ //e represents the event object
    e.preventDefault();
    const searchterm=form.elements.query.value;//what user write in the form input 
    //API CALL 
    const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
    displayImages(res.data);//function call
    form.elements.query.value=" ";
})
//shows is already a part of the URL of the given TV API 
const displayImages = (shows) =>{ //made a function named displayImages where shows is the parameter passed
    for(let result of shows){
        //This condition checks whether the current result has an image property under the show property.
        if(result.show.image){ 
            //This line creates a new IMG (image) element using the document.createElement method. 
            const img=document.createElement('IMG');
// This line sets the src attribute of the img element to the URL specified in result.show.image.medium. 
            img.src=result.show.image.medium;
// This effectively adds the image to the webpage.
            document.body.append(img);
        }
        
    }
}
