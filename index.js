// Import stylesheets
import './style.css';

let diamonds = 0
let clk_power = 1
let price_ext = 1
let timer = 0
let dps = 0



statusText.textContent = `Current Diamonds ${diamonds}`;
gamestart();

function gamestart(){
  diamond_btn.addEventListener("click", add);
  pickaxe.addEventListener("click", buy_help);
  
}



function add(){
  Math.round(diamonds += clk_power)
  statusText.textContent = `Current Diamonds ${diamonds}`;
  add = false
  }
function buy_help(){
  if(diamonds >= 10 * price_ext){
    diamonds-= 10 * price_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    price_ext+=.15
    buy_help = false
    dps+= 1
  }
}




