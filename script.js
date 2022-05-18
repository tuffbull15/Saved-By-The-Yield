// Checkbox Script CRV-Yearn Strategy

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

function checkboxTwoLido(){
    boxTwoRevealLido();
    boxTwoTextLido();
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

function checkboxThreeLido(){
    boxThreeRevealLido();
    boxThreeTextLido();
}

const lidoSuccess = document.getElementById('lido-success')

function lidoSuccessMessage(){
    lidoSuccess.style.display = 'flex';
}

// Checkbox Script Rocket Strategy

const boxOneRock = document.getElementById('box-one-rock');
const boxTwoRock = document.getElementById('box-two-rock');
const boxThreeRock = document.getElementById('box-three-rock');
const stepTwoRock = document.getElementById('step-two-rock');
const stepThreeRock = document.getElementById('step-three-rock');

let boxTwoOpacityRock = 0.2;
let boxThreeOpacityRock = 0.2;

function boxTwoRevealRock(){
    if (boxTwoOpacityRock<1){
        boxTwoOpacityRock += .1;
        setTimeout(function(){boxTwoRevealRock()},100);
     }
     boxTwoRock.style.opacity = boxTwoOpacityRock;
}

function boxTwoTextRock(){
    stepTwoRock.innerHTML += ": Deposit your wETH or stETH into the wETH-stETH Balancer Pool (it does NOT need to be an even 50/50 split of each!)";
}

function checkboxTwoRock(){
    boxTwoRevealRock();
    boxTwoTextRock();
}

function boxThreeRevealRock(){
    if (boxThreeOpacityRock<1) {
        boxThreeOpacityRock += .1;
        setTimeout(function(){boxThreeRevealRock()},100);
     }
     boxThreeRock.style.opacity = boxThreeOpacityRock;
}

function boxThreeTextRock(){
    stepThreeRock.innerHTML += ": Set a schedule — every day/week/month — to harvest your BAL tokens back into ETH.";
}

function checkboxThreelRock(){
    boxThreeRevealRock();
    boxThreeTextRock();
}

const rockSuccess = document.getElementById('rock-success')

function rockSuccessMessage(){
    rockSuccess.style.display = 'flex';
}

// Checkbox Script Argent Wallet

const boxOneArg = document.getElementById('box-one-arg');
const boxTwoArg = document.getElementById('box-two-arg');
const boxThreeArg = document.getElementById('box-three-arg');
const stepTwoArg = document.getElementById('step-two-arg');
const stepThreeArg = document.getElementById('step-three-arg');

let boxTwoOpacityArg = 0.2;
let boxThreeOpacityArg = 0.2;

function boxTwoRevealArg(){
    if (boxTwoOpacityArg<1){
        boxTwoOpacityArg += .1;
        setTimeout(function(){boxTwoRevealArg()},100);
     }
     boxTwoArg.style.opacity = boxTwoOpacityArg;
}

function boxTwoTextArg(){
    stepTwoArg.innerHTML += ": Deposit your ETH and stETH into the <a href=\"https://curve.fi/steth\">Curve stETH pool</a>.";
}

function checkboxTwoArg(){
    boxTwoRevealArg();
    boxTwoTextArg();
}

function boxThreeRevealArg(){
    if (boxThreeOpacityArg<1) {
        boxThreeOpacityArg += .1;
        setTimeout(function(){boxThreeRevealArg()},100);
     }
     boxThreeArg.style.opacity = boxThreeOpacityArg;
}

function boxThreeTextArg(){
    stepThreeArg.innerHTML += ": Deposit your crvSTETH LP tokens into <a href=\https://yearn.finance/#/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325\">Yearn's stETH pool</a> for a boosted APY on your stETH-ETH position. ";
}

function checkboxThreeArg(){
    boxThreeRevealArg();
    boxThreeTextArg();
}

const argSuccess = document.getElementById('arg-success')

function argSuccessMessage(){
    argSuccess.style.display = 'flex';
}

// Checkbox Script FTX Earn

const boxOneFtx = document.getElementById('box-one-ftx');
const boxTwoFtx = document.getElementById('box-two-ftx');
const boxThreeFtx = document.getElementById('box-three-ftx');
const stepTwoFtx = document.getElementById('step-two-ftx');
const stepThreeFtx = document.getElementById('step-three-ftx');

let boxTwoOpacityFtx = 0.2;
let boxThreeOpacityFtx = 0.2;

function boxTwoRevealFtx(){
    if (boxTwoOpacityFtx<1){
        boxTwoOpacityFtx += .1;
        setTimeout(function(){boxTwoRevealFtx()},100);
     }
     boxTwoFtx.style.opacity = boxTwoOpacityFtx;
}

function boxTwoTextFtx(){
    stepTwoFtx.innerHTML += ": Deposit your ETH and stETH into the <a href=\"https://curve.fi/steth\">Curve stETH pool</a>.";
}

function checkboxTwoFtx(){
    boxTwoRevealFtx();
    boxTwoTextFtx();
}

function boxThreeRevealFtx(){
    if (boxThreeOpacityFtx<1) {
        boxThreeOpacityFtx += .1;
        setTimeout(function(){boxThreeRevealFtx()},100);
     }
     boxThreeFtx.style.opacity = boxThreeOpacityFtx;
}

function boxThreeTextFtx(){
    stepThreeFtx.innerHTML += ": Deposit your crvSTETH LP tokens into <a href=\https://yearn.finance/#/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325\">Yearn's stETH pool</a> for a boosted APY on your stETH-ETH position. ";
}

function checkboxThreeFtx(){
    boxThreeRevealFtx();
    boxThreeTextFtx();
}

const ftxSuccess = document.getElementById('ftx-success')

function ftxSuccessMessage(){
    ftxSuccess.style.display = 'flex';
}

// Yield Generator - Lido Strategy

const boxOneLidoYg = document.getElementById('box-one-lido-yg');
const boxTwoLidoYg = document.getElementById('box-two-lido-yg');
const boxThreeLidoYg = document.getElementById('box-three-lido-yg');
const stepTwoLidoYg = document.getElementById('step-two-lido-yg');
const stepThreeLidoYg = document.getElementById('step-three-lido-yg');

let boxTwoOpacityLidoYg = 0.2;
let boxThreeOpacityLidoYg = 0.2;

function boxTwoRevealLidoYg(){
    if (boxTwoOpacityLidoYg<1){
        boxTwoOpacityLidoYg += .1;
        setTimeout(function(){boxTwoRevealLidoYg()},100);
     }
     boxTwoLidoYg.style.opacity = boxTwoOpacityLidoYg;
}

function boxTwoTextLidoYg(){
    stepTwoLidoYg.innerHTML += ": Deposit your wETH or stETH into the wETH-stETH Balancer Pool (it does NOT need to be an even 50/50 split of each!)";
}

function checkboxTwoLidoYg(){
    boxTwoRevealLidoYg();
    boxTwoTextLidoYg();
}

function boxThreeRevealLidoYg(){
    if (boxThreeOpacityLidoYg<1) {
        boxThreeOpacityLidoYg += .1;
        setTimeout(function(){boxThreeRevealLidoYg()},100);
     }
     boxThreeLidoYg.style.opacity = boxThreeOpacityLidoYg;
}

function boxThreeTextLidoYg(){
    stepThreeLidoYg.innerHTML += ": Set a schedule — every day/week/month — to harvest your BAL tokens back into ETH.";
}

function checkboxThreeLidoYg(){
    boxThreeRevealLidoYg();
    boxThreeTextLidoYg();
}

const lidoSuccessYg = document.getElementById('lido-success-yg')

function lidoSuccessMessageYg(){
    lidoSuccessYg.style.display = 'flex';
}

// Yield Generator - Rocket Strategy

const boxOneRockYg = document.getElementById('box-one-rock-yg');
const boxTwoRockYg = document.getElementById('box-two-rock-yg');
const boxThreeRockYg = document.getElementById('box-three-rock-yg');
const stepTwoRockYg = document.getElementById('step-two-rock-yg');
const stepThreeRockYg = document.getElementById('step-three-rock-yg');

let boxTwoOpacityRockYg = 0.2;
let boxThreeOpacityRockYg = 0.2;

function boxTwoRevealRockYg(){
    if (boxTwoOpacityRockYg<1){
        boxTwoOpacityRockYg += .1;
        setTimeout(function(){boxTwoRevealRockYg()},100);
     }
     boxTwoRockYg.style.opacity = boxTwoOpacityRockYg;
}

function boxTwoTextRockYg(){
    stepTwoRockYg.innerHTML += ": Deposit your wETH or stETH into the wETH-stETH Balancer Pool (it does NOT need to be an even 50/50 split of each!)";
}

function checkboxTwoRockYg(){
    boxTwoRevealRockYg();
    boxTwoTextRockYg();
}

function boxThreeRevealRockYg(){
    if (boxThreeOpacityRockYg<1) {
        boxThreeOpacityRockYg += .1;
        setTimeout(function(){boxThreeRevealRockYg()},100);
     }
     boxThreeRockYg.style.opacity = boxThreeOpacityRockYg;
}

function boxThreeTextRockYg(){
    stepThreeRockYg.innerHTML += ": Set a schedule — every day/week/month — to harvest your BAL tokens back into ETH.";
}

function checkboxThreeRockYg(){
    boxThreeRevealRockYg();
    boxThreeTextRockYg();
}

const rockSuccessYg = document.getElementById('rock-success-yg')

function rockSuccessMessageYg(){
    rockSuccessYg.style.display = 'flex';
}

// Yield Generator - Argent Strategy

const boxOneArgYg = document.getElementById('box-one-arg-yg');
const boxTwoArgYg = document.getElementById('box-two-arg-yg');
const boxThreeArgYg = document.getElementById('box-three-arg-yg');
const stepTwoArgYg = document.getElementById('step-two-arg-yg');
const stepThreeArgYg = document.getElementById('step-three-arg-yg');

let boxTwoOpacityArgYg = 0.2;
let boxThreeOpacityArgYg = 0.2;

function boxTwoRevealArgYg(){
    if (boxTwoOpacityArgYg<1){
        boxTwoOpacityArgYg += .1;
        setTimeout(function(){boxTwoRevealArgYg()},100);
     }
     boxTwoArgYg.style.opacity = boxTwoOpacityArgYg;
}

function boxTwoTextArgYg(){
    stepTwoArgYg.innerHTML += ": Deposit your wETH or stETH into the wETH-stETH Balancer Pool (it does NOT need to be an even 50/50 split of each!)";
}

function checkboxTwoArgYg(){
    boxTwoRevealArgYg();
    boxTwoTextArgYg();
}

function boxThreeRevealArgYg(){
    if (boxThreeOpacityArgYg<1) {
        boxThreeOpacityArgYg += .1;
        setTimeout(function(){boxThreeRevealArgYg()},100);
     }
     boxThreeArgYg.style.opacity = boxThreeOpacityArgYg;
}

function boxThreeTextArgYg(){
    stepThreeArgYg.innerHTML += ": Set a schedule — every day/week/month — to harvest your BAL tokens back into ETH.";
}

function checkboxThreeArgYg(){
    boxThreeRevealArgYg();
    boxThreeTextArgYg();
}

const argSuccessYg = document.getElementById('arg-success-yg')

function argSuccessMessageYg(){
    argSuccessYg.style.display = 'flex';
}

// Yield Generator - FTX Earn

const boxOneFtxYg = document.getElementById('box-one-ftx-yg');
const boxTwoFtxYg = document.getElementById('box-two-ftx-yg');
const boxThreeFtxYg = document.getElementById('box-three-ftx-yg');
const stepTwoFtxYg = document.getElementById('step-two-ftx-yg');
const stepThreeFtxYg = document.getElementById('step-three-ftx-yg');

let boxTwoOpacityFtxYg = 0.2;
let boxThreeOpacityFtxYg = 0.2;

function boxTwoRevealFtxYg(){
    if (boxTwoOpacityFtxYg<1){
        boxTwoOpacityFtxYg += .1;
        setTimeout(function(){boxTwoRevealFtxYg()},100);
     }
     boxTwoFtxYg.style.opacity = boxTwoOpacityFtxYg;
}

function boxTwoTextFtxYg(){
    stepTwoFtxYg.innerHTML += ": Deposit your wETH or stETH into the wETH-stETH Balancer Pool (it does NOT need to be an even 50/50 split of each!)";
}

function checkboxTwoFtxYg(){
    boxTwoRevealFtxYg();
    boxTwoTextFtxYg();
}

function boxThreeRevealFtxYg(){
    if (boxThreeOpacityFtxYg<1) {
        boxThreeOpacityFtxYg += .1;
        setTimeout(function(){boxThreeRevealFtxYg()},100);
     }
     boxThreeFtxYg.style.opacity = boxThreeOpacityFtxYg;
}

function boxThreeTextFtxYg(){
    stepThreeFtxYg.innerHTML += ": Set a schedule — every day/week/month — to harvest your BAL tokens back into ETH.";
}

function checkboxThreeFtxYg(){
    boxThreeRevealFtxYg();
    boxThreeTextFtxYg();
}

const ftxSuccessYg = document.getElementById('ftx-success-yg')

function ftxSuccessMessageYg(){
    ftxSuccessYg.style.display = 'flex';
}

// Yield Randomizer Button

const rocketEth = document.getElementById('rocket-eth');
const lidoEth = document.getElementById('lido-eth');
const argEth = document.getElementById('arg-eth');
const ftxEth = document.getElementById('ftx-eth');

const btnText = document.getElementById('yield-button');
let randYieldArray = [rocketEth, lidoEth, argEth, ftxEth]
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
        argEth.style.display = 'none';
        ftxEth.style.display = 'none';
    }else if(randYield === 1){
        randYieldArray[randYield].style.display = 'flex';
        rocketEth.style.display = 'none';
        argEth.style.display = 'none';
        ftxEth.style.display = 'none';
    }else if(randYield === 2){
        randYieldArray[randYield].style.display = 'flex';
        rocketEth.style.display = 'none';
        lidoEth.style.display = 'none';
        ftxEth.style.display = 'none';
    }else{
        randYieldArray[randYield].style.display = 'flex';
        rocketEth.style.display = 'none';
        lidoEth.style.display = 'none';
        argEth.style.display = 'none';
    }
}

function yieldRandomizer(){
    toggleText();
    toggleYield();
}
