// Import stylesheets
import './style.css';

let diamonds = 0
let clk_power = 1
let price_ext = 1
let w_ext = 1
let s_ext = 1
let c_ext = 1
let u_ext = 1
let timer = 0
let dps = 0
let btn_x = 0





statusText.textContent = `Current Diamonds ${diamonds}`;
gamestart();




function gamestart(){
  diamond_btn.addEventListener("click", add);
  shop_btn.addEventListener("click", show);
  W_pick.addEventListener("click", buy_w);
    //document.getElementById('diamond_cursor').addEventListener('mousemove', (e) => {
    //document.getElementById('diamond_cursor').style.left = e.clientX;
  //});
}
function add(){
  diamonds+= clk_power
  statusText.textContent = `Current Diamonds ${diamonds}`;
  add = false
}
function show(){
  document.getElementById('Tool_bar').classList.toggle('active');
}
function buy_w(){
  if(diamonds >= 10 * w_ext){
    diamonds-= 10 * w_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    w_ext+= w_ext * .50
    buy_w = false
  }
}
function buy_s(){
  if(diamonds >= 150 * s_ext){
    diamonds-= 150 * s_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=3
    s_ext+= s_ext * .50
    buy_s = false
  }
}
function buy_c(){
  if(diamonds >= 1000 * c_ext){
    diamonds-= 1000 * c_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=10
    c_ext+= c_ext * .50
    buy_c = false
  }
}
function buy_u(){
  if(diamonds >= 2500 * u_ext){
    diamonds-= 2500 * u_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=20
    u_ext+= u_ext * .50
    buy_u = false
  }
}






