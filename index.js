// Import stylesheets
import './style.css';

let diamonds = 0
let clk_power = 1
let price_ext = 1
let timer = 0
let dps = 0
let btn_x = 0





statusText.textContent = `Current Diamonds ${diamonds}`;
gamestart();




function gamestart(){
  diamond_btn.addEventListener("click", add);
  shop_btn.addEventListener("click", show);
  


  //document.getElementById('diamond_cursor').addEventListener('mousemove', (e) => {
    //document.getElementById('diamond_cursor').style.left = e.clientX;
  //});
}




function add(){
  diamonds+= clk_power
  statusText.textContent = `Current Diamonds ${diamonds}`;
  add = false
  


  
}



function buy_help(){
  if(diamonds >= 10 * price_ext){
    diamonds-= 10 * price_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    price_ext+=.50
    buy_help = false
    
  }
}
function show(){
  document.getElementById('sidebar').classList.toggle('active');
}






