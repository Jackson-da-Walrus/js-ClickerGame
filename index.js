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
var rebirth_ext = 1
let auto_clicker = 0;




statusText.textContent = `Current Diamonds ${diamonds}`;
gamestart();

function gamestart(){
  
  fix_lists();
  diamond_btn.addEventListener("click", add);
  gear_icon.addEventListener("click", open_settings);
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

function fix_lists(){
  document.getElementById("credits").style.listStyle = "none";
  document.getElementById("clk_power_see").style.listStyle = "none";
  document.getElementById("per_sec").style.listStyle = "none";
}
function fix_stuff(){
  W_pick.textContent = `Wood Pick +1 - ` + Math.round(50 * w_ext);
  S_pick.textContent = `Stone Pick +3 - ` + Math.round(200 * s_ext);
  C_pick.textContent = `Copper Pick +10 - ` + Math.round(2000 * c_ext);
  U_pick.textContent = `Unobtanium Pick +20 - ` + Math.round(6000 * u_ext);

  Diamond_pnt.textContent = `Diamond printer +40/s - ` + Math.round(20000 * prnt_ext);
  Geo.textContent = `Geologist +1/s -` + Math.round(350 * geo_ext);
  Auto_d.textContent = `Auto drill +5/s - ` + Math.round(3000 * drl_ext);
  Plasma_dr.textContent = `Plasma drone +20/s - ` + Math.round(13000 * drn_ext);


  document.getElementById("per_sec").innerText = "Per second - " + dps;
  document.getElementById("clk_power_see").innerText = "Per click - " + clk_power;
}

function rebirth(){
  if(diamonds >= 50000 * rebirth_ext){
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
    fix_stuff();
    rebirth_mult *= 1.80
    rebirth_ext *= 2
  }
}
function open_settings(){
  document.getElementById('gear_icon').classList.toggle('active');
  document.getElementById("Settings_menu").classList.toggle('active');
  
}


function buy_geo(){
  if(diamonds >= 350 * geo_ext){
    dps = dps + 1
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 350 * geo_ext
    geo_ext += geo_ext * .25
    document.getElementById("per_sec").innerText = "Per second - " + dps;
    Geo.textContent = `Geologist +1/s -` + Math.round(350 * geo_ext);
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
  if(diamonds >= 3000 * drl_ext){
    dps = dps + 5
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 3000 * drl_ext
    drl_ext += drl_ext * .25
    document.getElementById("per_sec").innerText = "Per second - " + dps;
    Auto_d.textContent = `Auto drill +5/s - ` + Math.round(3000 * drl_ext);
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
  if(diamonds >= 13000 * drn_ext){
    dps = dps + 20
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 13000 * drn_ext
    drn_ext += drn_ext * .25
    document.getElementById("per_sec").innerText = "Per second - " + dps;
    Plasma_dr.textContent = `Plasma drone +20/s - ` + Math.round(13000 * drn_ext);
    diamonds = parseInt(diamonds)
    document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    setInterval(function(){
      diamonds = diamonds + (dps * rebirth_mult)
      diamonds = Math.trunc(diamonds)
      document.getElementById("statusText").innerText = "Current Diamonds " + diamonds;
    }, 1000);  
  }
}function buy_prnt(){
  if(diamonds >= 20000 * prnt_ext){
    dps = dps + 40
    auto_clicker = auto_clicker + 1;
    diamonds = diamonds - 20000 * prnt_ext
    prnt_ext += prnt_ext * .25
    document.getElementById("per_sec").innerText = "Per second - " + dps;
    Diamond_pnt.textContent = `Diamond printer +40/s - ` + Math.round(20000 * prnt_ext);
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
  if(diamonds >= 50 * w_ext){
    diamonds-= 50 * w_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    w_ext+= w_ext * .20
    document.getElementById("clk_power_see").innerText = "Per click - " + clk_power;
    W_pick.textContent = `Wooden Pick +1 - ` + Math.round(50 * w_ext);
    buy_w = false
  }
}
function buy_s(){
  if(diamonds >= 200 * s_ext){
    diamonds-= 200 * s_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=3
    s_ext+= s_ext * .20
    document.getElementById("clk_power_see").innerText = "Per click - " + clk_power;
    S_pick.textContent = `Stone Pick +3 - ` + Math.round(200 * s_ext);
    buy_s = false
  }
}
function buy_c(){
  if(diamonds >= 2000 * c_ext){
    diamonds-= 2000 * c_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=10
    c_ext+= c_ext * .20
    document.getElementById("clk_power_see").innerText = "Per click - " + clk_power;
    C_pick.textContent = `Copper Pick +10 - ` + Math.round(2000 * c_ext);
    buy_c = false
  }
}
function buy_u(){
  if(diamonds >= 6000 * u_ext){
    diamonds-= 6000 * u_ext
    diamonds = parseInt(diamonds)
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=20
    u_ext+= u_ext * .20
    document.getElementById("clk_power_see").innerText = "Per click - " + clk_power;
    U_pick.textContent = `Unobtainiun Pick +20 - ` + Math.round(6000 * u_ext);
    buy_u = false
  }
}



