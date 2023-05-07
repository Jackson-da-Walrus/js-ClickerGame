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
let dps = 0
let btn_x = 0
var i = 1






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
  
  



    //document.getElementById('diamond_cursor').addEventListener('mousemove', (e) => {
    //document.getElementById('diamond_cursor').style.left = e.clientX;
  //});
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
    w_ext+= w_ext * .50
    buy_w = false
    diamonds = parseInt(diamonds)
  }
}
function buy_s(){
  if(diamonds >= 150 * s_ext){
    diamonds-= 150 * s_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=3
    s_ext+= s_ext * .50
    buy_s = false
    diamonds = parseInt(diamonds)
  }
}
function buy_c(){
  if(diamonds >= 1000 * c_ext){
    diamonds-= 1000 * c_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=10
    c_ext+= c_ext * .50
    buy_c = false
    diamonds = parseInt(diamonds)
  }
}
function buy_u(){
  if(diamonds >= 2500 * u_ext){
    diamonds-= 2500 * u_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=20
    u_ext+= u_ext * .50
    buy_u = false
    diamonds = parseInt(diamonds)
  }
}


function buy_geo(){
  if(diamonds >= 10 * geo_ext){
    diamonds-= 10 * geo_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    
    geo_ext+= geo_ext * .50
    buy_geo = false
    diamonds = parseInt(diamonds)
  }
}
function buy_drl(){
  if(diamonds >= 150 * drl_ext){
    diamonds-= 150 * drl_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    
    drl_ext+= drl_ext * .50
    buy_drl = false
    diamonds = parseInt(diamonds)
  }
}
function buy_drn(){
  if(diamonds >= 1000 * drn_ext){
    diamonds-= 1000 * drn_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    
    drn_ext+= drn_ext * .50
    buy_drn = false
    diamonds = parseInt(diamonds)
  }
}
function buy_prnt(){
  if(diamonds >= 2500 * prnt_ext){
    diamonds-= 2500 * prnt_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    
    prnt_ext+= prnt_ext * .50
    buy_prnt = false
    diamonds = parseInt(diamonds)
  }
}







