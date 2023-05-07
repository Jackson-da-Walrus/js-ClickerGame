let geo_ext = 1
let drl_ext = 1
let drn_ext = 1
let prnt_ext = 1



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