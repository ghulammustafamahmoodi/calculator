var output = document.getElementById("output");

// function addToutput(value){
//      output.value += value;
// }

// function equal(){
//      output.value = eval(output.value);
// }

// function rest(){
//      output.value = '';
// }

// document.getElementById('btn1_C').addEventListener('click', () => {
// output.value = output.value.slice(0, -1);
// });



function al(){
     var btnnum = document.querySelectorAll('.a');
     btnnum.forEach(function(EL){
          EL.addEventListener('click' , ()=>{
              output.value+= EL.value
          })
     })
}
al()
