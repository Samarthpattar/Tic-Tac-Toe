let turn0 = true; // 
let winPattern = [[0,1,2],

 [0,3,4],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]];




function addEvents(){
   var buttons=document.getElementsByClassName("box")
    Array.from(buttons).forEach((box)=>{
    box.addEventListener("click",function(){
        console.log("button was clicked")
        if(turn0){
            box.innerHTML="x"
            turn0=false;
        }else{
            box.innerHTML="o"
            turn0=true;
        }
        box.disabled = true;
      
      
        checkWinner();    
        
    })
   });
}


 function checkWinner(){
    var buttons=document.getElementsByClassName("box")
    
     for( pattern of winPattern){
       // console.log(pattern[0],pattern[1],pattern[2])
         let pos1Val = buttons[pattern[0]].innerHTML;
         let pos2Val = buttons[pattern[1]].innerHTML;
         let pos3Val = buttons[pattern[2]].innerHTML;

         if(pos1Val !=="" && pos2Val !=="" && pos3Val !=="" ){
        
              if(pos1Val===pos2Val && pos2Val===pos3Val){
                var p_id = document.getElementById("msg");
                if(pos1Val || pos2Val || pos3Val){
                p_id.innerHTML = `Congratulations,winner is ${pos1Val}`;  
                }else {
                 p_id .innerHTML =  `Congratulations,winner is ${pos2Val}`;
                }  
                console.log("winner is ",pos1Val); 
                 disable_Buttons() //Calling disable buttons              
                
             }   
              
         }
     }
   
 }  

 const disable_Buttons = () =>{  // disable button
    var buttons=document.getElementsByClassName("box")
    for(let box of buttons){
        box.disabled = true;
       }    
 }

 const reset_Button=()=>{   // Reset button

     var r_buttons = document.getElementById("Reset")
     var buttons = document.getElementsByClassName("box")
     var p_id = document.getElementById("msg");
    r_buttons.addEventListener("click",function(){

    console.log("clicked",r_buttons)


    Array.from(buttons).forEach((box)=>{
        box.innerHTML=""; 
        box.disabled=false; // Disable the boxes after the  winning conditions are met
        p_id.style.display = "none"; // to hide the message box
      
    })
    turn0 = true; 
    
 })        
 }
reset_Button();
function main(){

    addEvents();
  
}

main()