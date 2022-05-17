const rocketEth = document.getElementById('rocket-eth');
const lidoEth = document.getElementById('lido-eth');
const tombFinance = document.getElementById('tomb-finance');
const stader = document.getElementById('stader');
const btnText = document.getElementById('yield-button');
let randYieldArray = [rocketEth, lidoEth, tombFinance, stader]
let txtArray = ['Keep Clicking For More Good Yields', 'More Yield Strategies Await', 'Yield on Yield Is A Click Away'];


function toggleText(){
    let randText = Math.floor(Math.random() * txtArray.length);
    btnText.innerHTML = txtArray[randText];
}

function toggleYield(){
    let randYield = Math.floor(Math.random() * randYieldArray.length);
    if (randYield === 0){
        randYieldArray[randYield].style.display = 'flex';
        lidoEth.style.display = 'none';
        tombFinance.style.display = 'none';
        stader.style.display = 'none';
    }else if(randYield === 1){
        randYieldArray[randYield].style.display = 'flex';
        rocketEth.style.display = 'none';
        tombFinance.style.display = 'none';
        stader.style.display = 'none';
    }else if(randYield === 2){
        randYieldArray[randYield].style.display = 'flex';
        rocketEth.style.display = 'none';
        lidoEth.style.display = 'none';
        stader.style.display = 'none';
    }else{
        randYieldArray[randYield].style.display = 'flex';
        rocketEth.style.display = 'none';
        lidoEth.style.display = 'none';
        tombFinance.style.display = 'none';
    }
}

function yieldRandomizer(){
    toggleText();
    toggleYield();
}

// Success Message Display

const lidoSuccess = document.getElementById('lido-success')

function lidoSuccessMessage(){
    lidoSuccess.style.display = 'flex';
}

// Checkbox Script Lido

const boxOneLido = document.getElementById('box-one-lido');
const boxTwoLido = document.getElementById('box-two-lido');
const boxThreeLido = document.getElementById('box-three-lido');
const stepTwoLido = document.getElementById('step-two-lido');
const stepThreeLido = document.getElementById('step-three-lido');

let boxTwoOpacityLido = 0.2;
let boxThreeOpacityLido = 0.2;

function boxTwoRevealLido(){
    if (boxTwoOpacityLido<1){
        boxTwoOpacityLido += .1;
        setTimeout(function(){boxTwoRevealLido()},100);
     }
     boxTwoLido.style.opacity = boxTwoOpacityLido;
}

function boxTwoTextLido(){
    stepTwoLido.innerHTML += ": Deposit your ETH and stETH into the <a href=\"https://curve.fi/steth\">Curve stETH pool</a>.";
}

function boxThreeRevealLido(){
    if (boxThreeOpacityLido<1) {
        boxThreeOpacityLido += .1;
        setTimeout(function(){boxThreeRevealLido()},100);
     }
     boxThreeLido.style.opacity = boxThreeOpacityLido;
}

function boxThreeTextLido(){
    stepThreeLido.innerHTML += ": Deposit your crvSTETH LP tokens into <a href=\https://yearn.finance/#/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325\">Yearn's stETH pool</a> for a boosted APY on your stETH-ETH position. ";
}

function checkboxTwolLido(){
    boxTwoRevealLido();
    boxTwoTextLido();
}

function checkboxThreelLido(){
    boxThreeRevealLido();
    boxThreeTextLido();
}

// Checkbox Script Rocket

const checkboxOneRocket = document.getElementById('box-one-rocket');
const checkboxTwoRocket = document.getElementById('box-two-rocket');
const checkboxThreeRocket = document.getElementById('box-three-rocket');

let boxTwoOpacityRocket = 0.2;
let boxThreeOpacityRocket = 0.2;

function boxTwoRevealRocket(){
    if (boxTwoOpacityRocket<1){
        boxTwoOpacityRocket += .1;
        setTimeout(function(){boxTwoRevealRocket()},100);
     }
     checkboxTwoRocket.style.opacity = boxTwoOpacityRocket;
}

function boxThreeRevealRocket(){
    if (boxThreeOpacityRocket<1) {
        boxThreeOpacityRocket += .1;
        setTimeout(function(){boxThreeRevealRocket()},100);
     }
     checkboxThreeRocket.style.opacity = boxThreeOpacityRocket;
}

// Checkbox Script Stader

const checkboxOneStader = document.getElementById('box-one-stader');
const checkboxTwoStader = document.getElementById('box-two-stader');
const checkboxThreeStader = document.getElementById('box-three-stader');

let boxTwoOpacityStader = 0.2;
let boxThreeOpacityStader = 0.2;

function boxTwoRevealStader(){
    if (boxTwoOpacityStader<1){
        boxTwoOpacityStader += .1;
        setTimeout(function(){boxTwoRevealStader()},100);
     }
     checkboxTwoStader.style.opacity = boxTwoOpacityStader;
}

function boxThreeRevealStader(){
    if (boxThreeOpacityStader<1) {
        boxThreeOpacityStader += .1;
        setTimeout(function(){boxThreeRevealStader()},100);
     }
     checkboxThreeStader.style.opacity = boxThreeOpacityStader;
}

// Checkbox Script Tomb

const checkboxOneTomb = document.getElementById('box-one-tomb');
const checkboxTwoTomb = document.getElementById('box-two-tomb');
const checkboxThreeTomb = document.getElementById('box-three-tomb');

let boxTwoOpacityTomb = 0.2;
let boxThreeOpacityTomb = 0.2;

function boxTwoRevealTomb(){
    if (boxTwoOpacityTomb<1){
        boxTwoOpacityTomb += .1;
        setTimeout(function(){boxTwoRevealTomb()},100);
     }
     checkboxTwoTomb.style.opacity = boxTwoOpacityTomb;
}

function boxThreeRevealTomb(){
    if (boxThreeOpacityTomb<1) {
        boxThreeOpacityTomb += .1;
        setTimeout(function(){boxThreeRevealTomb()},100);
     }
     checkboxThreeTomb.style.opacity = boxThreeOpacityTomb;
}

// Checkbox Script Rocket YG

const checkboxOneRocketYg = document.getElementById('box-one-rocket-yg');
const checkboxTwoRocketYg = document.getElementById('box-two-rocket-yg');
const checkboxThreeRocketYg = document.getElementById('box-three-rocket-yg');

let boxTwoOpacityRocketYg = 0.2;
let boxThreeOpacityRocketYg = 0.2;

function boxTwoRocketYg(){
    if (boxTwoOpacityRocketYg<1){
        boxTwoOpacityRocketYg += .1;
        setTimeout(function(){boxTwoRocketYg()},100);
     }
     checkboxTwoRocketYg.style.opacity = boxTwoOpacityRocketYg;
}

function boxThreeRocketYg(){
    if (boxThreeOpacityRocketYg<1) {
        boxThreeOpacityRocketYg += .1;
        setTimeout(function(){boxThreeRocketYg()},100);
     }
     checkboxThreeRocketYg.style.opacity = boxThreeOpacityRocketYg;
}

// Checkbox Script Lido YG

const checkboxOneLidoYg = document.getElementById('box-one-lido-yg');
const checkboxTwoLidoYg = document.getElementById('box-two-lido-yg');
const checkboxThreeLidoYg = document.getElementById('box-three-lido-yg');

let boxTwoOpacityLidoYg = 0.2;
let boxThreeOpacityLidoYg = 0.2;

function boxTwoLidoYg(){
    if (boxTwoOpacityLidoYg<1){
        boxTwoOpacityLidoYg += .1;
        setTimeout(function(){boxTwoLidoYg()},100);
     }
     checkboxTwoLidoYg.style.opacity = boxTwoOpacityLidoYg;
}

function boxThreeLidoYg(){
    if (boxThreeOpacityLidoYg<1) {
        boxThreeOpacityLidoYg += .1;
        setTimeout(function(){boxThreeLidoYg()},100);
     }
     checkboxThreeLidoYg.style.opacity = boxThreeOpacityLidoYg;
}

// Checkbox Script Stader YG

const checkboxOneStaderYg = document.getElementById('box-one-stader-yg');
const checkboxTwoStaderYg = document.getElementById('box-two-stader-yg');
const checkboxThreeStaderYg = document.getElementById('box-three-stader-yg');

let boxTwoOpacityStaderYg = 0.2;
let boxThreeOpacityStaderYg = 0.2;

function boxTwoStaderYg(){
    if (boxTwoOpacityStaderYg<1){
        boxTwoOpacityStaderYg += .1;
        setTimeout(function(){boxTwoStaderYg()},100);
     }
     checkboxTwoStaderYg.style.opacity = boxTwoOpacityStaderYg;
}

function boxThreeStaderYg(){
    if (boxThreeOpacityStaderYg<1) {
        boxThreeOpacityStaderYg += .1;
        setTimeout(function(){boxThreeStaderYg()},100);
     }
     checkboxThreeStaderYg.style.opacity = boxThreeOpacityStaderYg;
}

// Checkbox Script Tomb YG

const checkboxOneTombYg = document.getElementById('box-one-tomb-yg');
const checkboxTwoTombYg = document.getElementById('box-two-tomb-yg');
const checkboxThreeTombYg = document.getElementById('box-three-tomb-yg');

let boxTwoOpacityTombYg = 0.2;
let boxThreeOpacityTombYg = 0.2;

function boxTwoTombYg(){
    if (boxTwoOpacityTombYg<1){
        boxTwoOpacityTombYg += .1;
        setTimeout(function(){boxTwoTombYg()},100);
     }
     checkboxTwoTombYg.style.opacity = boxTwoOpacityTombYg;
}

function boxThreeTombYg(){
    if (boxThreeOpacityTombYg<1) {
        boxThreeOpacityTombYg += .1;
        setTimeout(function(){boxThreeTombYg()},100);
     }
     checkboxThreeTombYg.style.opacity = boxThreeOpacityTombYg;
}