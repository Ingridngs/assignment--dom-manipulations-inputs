document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1

document.querySelector("#reset-field input").value =""

})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
 var text1= document.querySelector(".text")

 var text2= [...text1]

for(let i = 0 ; i < text2.length; i++ ){

 if( text2.length[i] <= 6){
 	
 	message.textContent="Not long enough"

 } else if (text2.length[i]
  >= 6) {
 	message.textContent="valid"

 }

 }

})



var message=document.querySelector(".flash-message")

document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3

 const listItems=document.querySelectorAll("#calculate-items input")
 const arrayItems=[...listItems]
 var result=0

 for(let i = 0 ; i < arrayItems.length ;i++){
 	if(arrayItems[i].checked === true){
 		result+=parseInt(arrayItems[i].value)
 		document.querySelector(".sum-total").textContent= "$ " +result
 	}
 }

})
var img= document.createElement("img")
document.querySelector(".img-box").appendChild(img)

document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4

  const select= document.querySelector("#select-to-show-more select")
  const options= select.options[select.selectedIndex]
  
  const info= options.getAttribute("data-msrp")
  document.querySelector(".msrp").textContent= info
  
  const info2= options.getAttribute("data-mpg")
  document.querySelector(".mpg").textContent= info2
  
  const info3= options.getAttribute("data-edmunds")
  document.querySelector(".edmunds").textContent= info3


  var image= options.getAttribute("data-img")
  img.setAttribute("src", "./images/" +image)
  

})
//#TASK5
// key code enter es el 13 "keypress=enter"
document.querySelector("#add-guest input").addEventListener("keypress",function(e){
	if ( e.keyCode=== 13){
       var node=document.createElement("li")
       node.classList = "guest"
       node.textContent=this.value
       document.querySelector("#add-guest ul").appendChild(node)
       this.value=""
}

})
//#TASK6

document.querySelector("#add-item-bonus input").addEventListener("keypress",function(e){

    if(e.keyCode===13){

      var node= document.createElement("li")
            node.classList="item"
            node.textContent=this.value
      document.querySelector("#add-guest ul").appendChild(node)
        
        buttonX=document.createElement("button")
        node.appendChild(buttonX)

        buttonX.addEventListener("click", function(){

        buttonX.parentNode.remove()
    })



    }

})








