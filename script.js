console.log("working"); 
let sliderImages=document.querySelectorAll(".slide"); 
console.log(sliderImages); 
let arrowRight=document.querySelector("#arrow-right"); 
let arrowLeft=document.querySelector("#arrow-left");
let current=0; //initialising the slide number we are on 
//remove all the images
reset=()=>{
	for(let i=0;i<sliderImages.length;i++){
		sliderImages[i].style.display="none";
	}
} 
//initialise the slider
startSlide=()=>{
	reset(); //images removed 
	sliderImages[0].style.display="block";

}  
//sshow prev
 slideLeft=()=>{
 	reset(); 
 	sliderImages[current-1].style.display = "block"; //whatever the value,show the image with prev index
 	current--;
 } 
 //show next
 slideRight=()=>{
 	reset(); //remove the present image and set  a new condition
 	sliderImages[current+1].style.display="block"; 
 	current++;
 }
//left arrow click 
arrowLeft.addEventListener("click",()=>{
	if (current===0){
		current=sliderImages.length; //incase we are on the first photo-->clicking prev would take us to the last one 
		//3-1=2
	} 
	slideLeft(); //call the function after definingthe condition of 0
}); 
arrowRight.addEventListener("click",()=>{
	if (current===sliderImages.length-1){
			current=-1; 
	} 
	slideRight();
})

startSlide(); 
