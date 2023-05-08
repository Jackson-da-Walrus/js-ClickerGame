// Import stylesheets
import './style.css';

let diamonds = 0
let clk_power = 1
var w_ext = 1
var s_ext = 1
var c_ext = 1
var u_ext = 1
var geo_ext = 1
var drl_ext = 1
var drn_ext = 1
var prnt_ext = 1
var dps = 0

statusText.textContent = `Current Diamonds ${diamonds}`;
gamestart();

function gamestart(){
  diamond_btn.addEventListener("click", add);
  shop_btn.addEventListener("click", show_t);
  helper_btn.addEventListener("click", show_h);
  W_pick.addEventListener("click", buy_w);
  S_pick.addEventListener("click", buy_s);
  C_pick.addEventListener("click", buy_c);
  U_pick.addEventListener("click", buy_u);
  Geo.addEventListener("click", buy_geo);
  Auto_d.addEventListener("click", buy_drl);
  Plasma_dr.addEventListener("click", buy_drn);
  Diamond_pnt.addEventListener("click", buy_prnt);
  
}
function add(){
  diamonds+= clk_power
  statusText.textContent = `Current Diamonds ${diamonds}`;
  add = false
}
function show_t(){
  document.getElementById('Tool_bar').classList.toggle('active');
}
function show_h(){
  document.getElementById('Help_bar').classList.toggle('active');
}
function buy_w(){
  if(diamonds >= 10 * w_ext){
    diamonds-= 10 * w_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    w_ext+= w_ext * .20
    buy_w = false
    diamonds = parseInt(diamonds)
  }
}
function buy_s(){
  if(diamonds >= 150 * s_ext){
    diamonds-= 150 * s_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=3
    s_ext+= s_ext * .20
    buy_s = false
    diamonds = parseInt(diamonds)
  }
}
function buy_c(){
  if(diamonds >= 1000 * c_ext){
    diamonds-= 1000 * c_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=10
    c_ext+= c_ext * .20
    buy_c = false
    diamonds = parseInt(diamonds)
  }
}
function buy_u(){
  if(diamonds >= 2500 * u_ext){
    diamonds-= 2500 * u_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=20
    u_ext+= u_ext * .20
    buy_u = false
    diamonds = parseInt(diamonds)
  }
}
function buy_geo(){
  if(diamonds >= 250 * geo_ext){
    diamonds-= 250 * geo_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power += 1
    geo_ext+= geo_ext * .40
    buy_geo = false
    diamonds = parseInt(diamonds)
  }
}
function buy_drl(){
  if(diamonds >= 1500 * drl_ext){
    diamonds-= 1500 * drl_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power += 5
    drl_ext+= drl_ext * .40
    buy_drl = false
    diamonds = parseInt(diamonds)
  }
}
function buy_drn(){
  if(diamonds >= 7500 * drn_ext){
    diamonds-= 7500 * drn_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power += 15
    drn_ext+= drn_ext * .40
    buy_drn = false
    diamonds = parseInt(diamonds)
  }
}
function buy_prnt(){
  if(diamonds >= 15000 * prnt_ext){
    diamonds-= 15000 * prnt_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power += 30
    prnt_ext+= prnt_ext * .40
    buy_prnt = false
    diamonds = parseInt(diamonds)
  }
}







