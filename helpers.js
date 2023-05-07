let geo_ext = 1
let drl_ext = 1
let drn_ext = 1
let prnt_ext = 1


Geo.addEventListener("click", buy_geo);
Auto_d.addEventListener("click", buy_drl);
Plasma_dr.addEventListener("click", buy_drn);
Diamond_pnt.addEventListener("click", buy_prnt);







function buy_geo(){
  if(diamonds >= 10 * geo_ext){
    diamonds-= 10 * geo_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=1
    geo_ext+= geo_ext * .50
    buy_geo = false
    diamonds = parseInt(diamonds)
  }
}
function buy_drl(){
  if(diamonds >= 150 * drl_ext){
    diamonds-= 150 * drl_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=3
    drl_ext+= drl_ext * .50
    buy_drl = false
    diamonds = parseInt(diamonds)
  }
}
function buy_drn(){
  if(diamonds >= 1000 * drn_ext){
    diamonds-= 1000 * drn_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=10
    drn_ext+= drn_ext * .50
    buy_drn = false
    diamonds = parseInt(diamonds)
  }
}
function buy_prnt(){
  if(diamonds >= 2500 * prnt_ext){
    diamonds-= 2500 * prnt_ext
    statusText.textContent = `Current Diamonds ${diamonds}`;
    clk_power+=20
    prnt_ext+= prnt_ext * .50
    buy_prnt = false
    diamonds = parseInt(diamonds)
  }
}