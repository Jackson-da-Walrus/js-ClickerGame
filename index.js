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
  archealogist.addEventListener("click", buy_help);
}



function add(){
  diamonds+= clk_power
  statusText.textContent = `Current Diamonds ${diamonds}`;
  add = false
  diamonds += dps
}
function buy_help(){
  if(diamonds >= 10 * price_ext){
    diamonds-= 10 * price_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    price_ext+=.05
    buy_help = false
    dps+= 1
  }
}





