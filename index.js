// Import stylesheets
import './style.css';

let diamonds = 0
let clk_power = 1
let dps = 0
var w_ext = 1
var s_ext = 1
var c_ext = 1
var u_ext = 1
var geo_ext = 1
var drl_ext = 1
var drn_ext = 1
var prnt_ext = 1
var rebirth_mult = 1
let auto_clicker = 0;




statusText.textContent = `Current Diamonds ${diamonds}`;
gamestart();

function gamestart(){
  diamond_btn.addEventListener("click", add);
  shop_btn.addEventListener("click", show_t);
  helper_btn.addEventListener("click", show_h);
  rebirth_btn.addEventListener("click", rebirth);
  W_pick.addEventListener("click", buy_w);
  S_pick.addEventListener("click", buy_s);
  C_pick.addEventListener("click", buy_c);
  U_pick.addEventListener("click", buy_u);
  Geo.addEventListener("click", buy_geo)
  Auto_d.addEventListener("click", buy_drl)
  Plasma_dr.addEventListener("click", buy_drn)
  Diamond_pnt.addEventListener("click", buy_prnt)
}



function rebirth(){
  if(diamonds >= 150000){
    diamonds = 0
    document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    clk_power = 1
    dps = 0
    auto_clicker = 0
    geo_ext = 1
    drl_ext = 1
    drn_ext = 1
    prnt_ext = 1
    w_ext = 1
    s_ext = 1
    c_ext = 1
    u_ext = 1
    rebirth_mult += .10
  }
 
}
function buy_geo(){
  if(diamonds >= 750 * geo_ext){
    dps = dps + 1
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 750 * geo_ext
    geo_ext += geo_ext * .25
    diamonds = parseInt(diamonds)
    document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    setInterval(function(){
      diamonds = diamonds + (dps * rebirth_mult)
      diamonds = Math.trunc(diamonds)
      document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    }, 1000);  
  }
}
function buy_drl(){
  if(diamonds >= 5000 * drl_ext){
    dps = dps + 5
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 5000 * drl_ext
    drl_ext += drl_ext * .25
    diamonds = parseInt(diamonds)
    document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    setInterval(function(){
      diamonds = diamonds + (dps * rebirth_mult)
      diamonds = Math.trunc(diamonds)
      document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    }, 1000);  
  }
}
function buy_drn(){
  if(diamonds >= 15000 * drn_ext){
    dps = dps + 20
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 15000 * drn_ext
    drn_ext += drn_ext * .25
    diamonds = parseInt(diamonds)
    document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    setInterval(function(){
      diamonds = diamonds + (dps * rebirth_mult)
      diamonds = Math.trunc(diamonds)
      document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    }, 1000);  
  }
}function buy_prnt(){
  if(diamonds >= 25000 * prnt_ext){
    dps = dps + 30
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 25000 * prnt_ext
    prnt_ext += prnt_ext * .25
    diamonds = parseInt(diamonds)
    document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    setInterval(function(){
      diamonds = diamonds + (dps * rebirth_mult)
      diamonds = Math.trunc(diamonds)
      document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    }, 1000);  
  }
}
 
  



function add(){
  diamonds += clk_power * rebirth_mult
  diamonds = Math.trunc(diamonds)
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
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    w_ext+= w_ext * .20
    buy_w = false
  }
}
function buy_s(){
  if(diamonds >= 150 * s_ext){
    diamonds-= 150 * s_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=3
    s_ext+= s_ext * .20
    buy_s = false
  }
}
function buy_c(){
  if(diamonds >= 1000 * c_ext){
    diamonds-= 1000 * c_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=10
    c_ext+= c_ext * .20
    buy_c = false
  }
}
function buy_u(){
  if(diamonds >= 3000 * u_ext){
    diamonds-= 3000 * u_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=20
    u_ext+= u_ext * .20
    buy_u = false
  }
}

  




