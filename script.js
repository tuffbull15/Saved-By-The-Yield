// Lido stETHStrategy

const lidoTwoReveal = document.querySelector('.lido-two-reveal');
const lidoThreeReveal = document.querySelector('.lido-three-reveal');
const boxOneLido = document.getElementById('box-one-lido');
const boxTwoLido = document.getElementById('box-two-lido');
const boxThreeLido = document.getElementById('box-three-lido');
const stepTwoLido = document.getElementById('step-two-lido');
const stepThreeLido = document.getElementById('step-three-lido');
const lidoCheckboxThree = document.querySelector('.lido-checkbox-three');
const lidoSuccess = document.querySelector('.lido-success')

let boxTwoOpacityLido = 0.2;
let boxThreeOpacityLido = 0.2;

function boxTwoRevealLido(){
    if (boxTwoOpacityLido<1){
        boxTwoOpacityLido += .1;
        setTimeout(function(){boxTwoRevealLido()},50);
     }
     boxTwoLido.style.opacity = boxTwoOpacityLido;
}

function boxTwoTextLido(){
    stepTwoLido.innerHTML += ": Head over <a target=\_blank\; href=\https://matcha.xyz/\>Matcha.xyz</a> and find your desired trading pair, like <a href=\https://matcha.xyz/markets/1/0xae7ab96520de3a18e5e111b5eaab095312d7fe84/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\ target=\_blank\>ETH-stETH</a>.";
}

lidoTwoReveal.addEventListener('click', function (){
    boxTwoRevealLido();
    boxTwoTextLido();
}, {once:true});

function boxThreeRevealLido(){
    if (boxThreeOpacityLido<1) {
        boxThreeOpacityLido += .1;
        setTimeout(function(){boxThreeRevealLido()},50);
     }
     boxThreeLido.style.opacity = boxThreeOpacityLido;
}

function boxThreeTextLido(){
    stepThreeLido.innerHTML += ": Swap your stablecoin or eth for stETH. (At the moment, I recommend using a dex versus staking directly with Lido because you often will find a better rate on a dex than staking with Lido directly).";
}

lidoThreeReveal.addEventListener('click', function (){
    boxThreeRevealLido();
    boxThreeTextLido();
}, {once:true});

lidoCheckboxThree.addEventListener('click', function() {
    lidoSuccess.style.display = 'flex';
})

// Checkbox Script Rocket Strategy

const rocketTwoReveal = document.querySelector('.rocket-two-reveal');
const rocketThreeReveal = document.querySelector('.rocket-three-reveal');
const boxOneRock = document.getElementById('box-one-rock');
const boxTwoRock = document.getElementById('box-two-rock');
const boxThreeRock = document.getElementById('box-three-rock');
const stepTwoRock = document.getElementById('step-two-rock');
const stepThreeRock = document.getElementById('step-three-rock');
const rocketCheckboxThree = document.querySelector('.rocket-checkbox-three');
const rockSuccess = document.querySelector('.rock-success')

let boxTwoOpacityRock = 0.2;
let boxThreeOpacityRock = 0.2;

function boxTwoRevealRock(){
    if (boxTwoOpacityRock<1){
        boxTwoOpacityRock += .1;
        setTimeout(function(){boxTwoRevealRock()},50);
     }
     boxTwoRock.style.opacity = boxTwoOpacityRock;
}

function boxTwoTextRock(){
    stepTwoRock.innerHTML += ": Head over to <a target=\_blank\; href=\https://matcha.xyz/\>Matcha</a> and pull up the ETH-rETH trading pair or your favorite stablecoin-rETH trading pair.";
}

rocketTwoReveal.addEventListener('click', function (){
    boxTwoRevealRock();
    boxTwoTextRock();
}, {once:true});

function boxThreeRevealRock(){
    if (boxThreeOpacityRock<1) {
        boxThreeOpacityRock += .1;
        setTimeout(function(){boxThreeRevealRock()},50);
     }
     boxThreeRock.style.opacity = boxThreeOpacityRock;
}

function boxThreeTextRock(){
    stepThreeRock.innerHTML += ": Swap away. With Matcha, you're guaranteed the best price every time.";
}

rocketThreeReveal.addEventListener('click', function (){
    boxThreeRevealRock();
    boxThreeTextRock();
}, {once:true});

rocketCheckboxThree.addEventListener('click', function() {
    rockSuccess.style.display = 'flex';
})

// Checkbox Script Argent Wallet

const argentTwoReveal = document.querySelector('.argent-two-reveal');
const argentThreeReveal = document.querySelector('.argent-three-reveal');
const boxOneArg = document.getElementById('box-one-arg');
const boxTwoArg = document.getElementById('box-two-arg');
const boxThreeArg = document.getElementById('box-three-arg');
const stepTwoArg = document.getElementById('step-two-arg');
const stepThreeArg = document.getElementById('step-three-arg');
const argentCheckboxThree = document.querySelector('.argent-checkbox-three');
const argentSuccess = document.querySelector('.argent-success')

let boxTwoOpacityArg = 0.2;
let boxThreeOpacityArg = 0.2;

function boxTwoRevealArg(){
    if (boxTwoOpacityArg<1){
        boxTwoOpacityArg += .1;
        setTimeout(function(){boxTwoRevealArg()},50);
     }
     boxTwoArg.style.opacity = boxTwoOpacityArg;
}

function boxTwoTextArg(){
    stepTwoArg.innerHTML += ": Hit the \"Receive\" button and buy crypto directly with fiat using Moonpay or Ramp. ";
}

argentTwoReveal.addEventListener('click', function (){
    boxTwoRevealArg();
    boxTwoTextArg();
}, {once:true});

function boxThreeRevealArg(){
    if (boxThreeOpacityArg<1) {
        boxThreeOpacityArg += .1;
        setTimeout(function(){boxThreeRevealArg()},50);
     }
     boxThreeArg.style.opacity = boxThreeOpacityArg;
}

function boxThreeTextArg(){
    stepThreeArg.innerHTML += ":  Click on the \"Invest\" tab and select the \"Yield Optimized\" strategy. Your ETH will be deposited into Yearn's vaults and in return you will receive yvsteCRV tokens as proof of your deposit. ";
}

argentThreeReveal.addEventListener('click', function (){
    boxThreeRevealArg();
    boxThreeTextArg();
}, {once:true});

argentCheckboxThree.addEventListener('click', function() {
    argentSuccess.style.display = 'flex';
})

// Checkbox Script FTX Earn

const ftxTwoReveal = document.querySelector('.ftx-two-reveal');
const ftxThreeReveal = document.querySelector('.ftx-three-reveal');
const boxOneFtx = document.getElementById('box-one-ftx');
const boxTwoFtx = document.getElementById('box-two-ftx');
const boxThreeFtx = document.getElementById('box-three-ftx');
const stepTwoFtx = document.getElementById('step-two-ftx');
const stepThreeFtx = document.getElementById('step-three-ftx');
const ftxCheckboxThree = document.querySelector('.ftx-checkbox-three');
const ftxSuccess = document.querySelector('.ftx-success')

let boxTwoOpacityFtx = 0.2;
let boxThreeOpacityFtx = 0.2;

function boxTwoRevealFtx(){
    if (boxTwoOpacityFtx<1){
        boxTwoOpacityFtx += .1;
        setTimeout(function(){boxTwoRevealFtx()},50);
     }
     boxTwoFtx.style.opacity = boxTwoOpacityFtx;
}

function boxTwoTextFtx(){
    stepTwoFtx.innerHTML += ": Click the settings gear icon in the top right, go to your profile, and enable yield on your assets. ";
}

ftxTwoReveal.addEventListener('click', function (){
    boxTwoRevealFtx();
    boxTwoTextFtx();
}, {once:true});

function boxThreeRevealFtx(){
    if (boxThreeOpacityFtx<1) {
        boxThreeOpacityFtx += .1;
        setTimeout(function(){boxThreeRevealFtx()},50);
     }
     boxThreeFtx.style.opacity = boxThreeOpacityFtx;
}

function boxThreeTextFtx(){
    stepThreeFtx.innerHTML += ": Deposit ETH into your wallet or deposit fiat into your account and use it to buy ETH directly on FTX.";
}

ftxThreeReveal.addEventListener('click', function (){
    boxThreeRevealFtx();
    boxThreeTextFtx();
}, {once:true});

ftxCheckboxThree.addEventListener('click', function() {
    ftxSuccess.style.display = 'flex';
})

// Yield Generator - Lido Strategy

const lidoTwoRevealYg = document.querySelector('.lido-two-reveal-yg');
const lidoThreeRevealYg = document.querySelector('.lido-three-reveal-yg');
const boxOneLidoYg = document.getElementById('box-one-lido-yg');
const boxTwoLidoYg = document.getElementById('box-two-lido-yg');
const boxThreeLidoYg = document.getElementById('box-three-lido-yg');
const stepTwoLidoYg = document.getElementById('step-two-lido-yg');
const stepThreeLidoYg = document.getElementById('step-three-lido-yg');
const lidoCheckboxThreeYg = document.querySelector('.lido-checkbox-three-yg');
const lidoSuccessYg = document.querySelector('.lido-success-yg')

let boxTwoOpacityLidoYg = 0.2;
let boxThreeOpacityLidoYg = 0.2;

function boxTwoRevealLidoYg(){
    if (boxTwoOpacityLidoYg<1){
        boxTwoOpacityLidoYg += .1;
        setTimeout(function(){boxTwoRevealLidoYg()},50);
     }
     boxTwoLidoYg.style.opacity = boxTwoOpacityLidoYg;
}

function boxTwoTextLidoYg(){
    stepTwoLidoYg.innerHTML += ": Head over <a target=\_blank\; href=\https://matcha.xyz/\>Matcha.xyz</a> and find your desired trading pair, like <a href=\https://matcha.xyz/markets/1/0xae7ab96520de3a18e5e111b5eaab095312d7fe84/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\ target=\_blank\>ETH-stETH</a>.";
}

lidoTwoRevealYg.addEventListener('click', function (){
    boxTwoRevealLidoYg();
    boxTwoTextLidoYg();
}, {once:true});

function boxThreeRevealLidoYg(){
    if (boxThreeOpacityLidoYg<1) {
        boxThreeOpacityLidoYg += .1;
        setTimeout(function(){boxThreeRevealLidoYg()},50);
     }
     boxThreeLidoYg.style.opacity = boxThreeOpacityLidoYg;
}

function boxThreeTextLidoYg(){
    stepThreeLidoYg.innerHTML += ": Swap away. With Matcha, you're guaranteed the best price every time.";
}

lidoThreeRevealYg.addEventListener('click', function (){
    boxThreeRevealLidoYg();
    boxThreeTextLidoYg();
}, {once:true});

lidoCheckboxThreeYg.addEventListener('click', function() {
    lidoSuccessYg.style.display = 'flex';
})

// Yield Generator - Rocket Strategy

const rocketTwoRevealYg = document.querySelector('.rocket-two-reveal-yg');
const rocketThreeRevealYg = document.querySelector('.rocket-three-reveal-yg');
const boxOneRockYg = document.getElementById('box-one-rock-yg');
const boxTwoRockYg = document.getElementById('box-two-rock-yg');
const boxThreeRockYg = document.getElementById('box-three-rock-yg');
const stepTwoRockYg = document.getElementById('step-two-rock-yg');
const stepThreeRockYg = document.getElementById('step-three-rock-yg');
const rocketCheckboxThreeYg = document.querySelector('.rocket-checkbox-three-yg');
const rocketSuccessYg = document.querySelector('.rocket-success-yg')

let boxTwoOpacityRockYg = 0.2;
let boxThreeOpacityRockYg = 0.2;

function boxTwoRevealRockYg(){
    if (boxTwoOpacityRockYg<1){
        boxTwoOpacityRockYg += .1;
        setTimeout(function(){boxTwoRevealRockYg()},50);
     }
     boxTwoRockYg.style.opacity = boxTwoOpacityRockYg;
}

function boxTwoTextRockYg(){
    stepTwoRockYg.innerHTML += ": Head over to <a target=\_blank\; href=\https://matcha.xyz/\>Matcha</a> and pull up the ETH-rETH trading pair or your favorite stablecoin-rETH trading pair.";
}

rocketTwoRevealYg.addEventListener('click', function (){
    boxTwoRevealRockYg();
    boxTwoTextRockYg();
}, {once:true});

function boxThreeRevealRockYg(){
    if (boxThreeOpacityRockYg<1) {
        boxThreeOpacityRockYg += .1;
        setTimeout(function(){boxThreeRevealRockYg()},50);
     }
     boxThreeRockYg.style.opacity = boxThreeOpacityRockYg;
}

function boxThreeTextRockYg(){
    stepThreeRockYg.innerHTML += ": Swap away. With Matcha, you're guaranteed the best price every time.";
}

rocketThreeRevealYg.addEventListener('click', function (){
    boxThreeRevealRockYg();
    boxThreeTextRockYg();
}, {once:true});

rocketCheckboxThreeYg.addEventListener('click', function() {
    rocketSuccessYg.style.display = 'flex';
})

// Yield Generator - Argent Strategy

const argentTwoRevealYg = document.querySelector('.argent-two-reveal-yg');
const argentThreeRevealYg = document.querySelector('.argent-three-reveal-yg');
const boxOneArgYg = document.getElementById('box-one-arg-yg');
const boxTwoArgYg = document.getElementById('box-two-arg-yg');
const boxThreeArgYg = document.getElementById('box-three-arg-yg');
const stepTwoArgYg = document.getElementById('step-two-arg-yg');
const stepThreeArgYg = document.getElementById('step-three-arg-yg');
const argentCheckboxThreeYg = document.querySelector('.argent-checkbox-three-yg');
const argentSuccessYg = document.querySelector('.argent-success-yg')

let boxTwoOpacityArgYg = 0.2;
let boxThreeOpacityArgYg = 0.2;

function boxTwoRevealArgYg(){
    if (boxTwoOpacityArgYg<1){
        boxTwoOpacityArgYg += .1;
        setTimeout(function(){boxTwoRevealArgYg()},50);
     }
     boxTwoArgYg.style.opacity = boxTwoOpacityArgYg;
}

function boxTwoTextArgYg(){
    stepTwoArgYg.innerHTML += ": Hit the \"Receive\" button and buy crypto directly with fiat using Moonpay or Ramp. ";
}

argentTwoRevealYg.addEventListener('click', function (){
    boxTwoRevealArgYg();
    boxTwoTextArgYg();
}, {once:true});

function boxThreeRevealArgYg(){
    if (boxThreeOpacityArgYg<1) {
        boxThreeOpacityArgYg += .1;
        setTimeout(function(){boxThreeRevealArgYg()},50);
     }
     boxThreeArgYg.style.opacity = boxThreeOpacityArgYg;
}

function boxThreeTextArgYg(){
    stepThreeArgYg.innerHTML += ":  Click on the \"Invest\" tab and select the \"Yield Optimized\" strategy. Your ETH will be deposited into Yearn's vaults and in return you will receive yvsteCRV tokens as proof of your deposit. ";
}

argentThreeRevealYg.addEventListener('click', function (){
    boxThreeRevealArgYg();
    boxThreeTextArgYg();
}, {once:true});

argentCheckboxThreeYg.addEventListener('click', function() {
    argentSuccessYg.style.display = 'flex';
})

// Yield Generator - FTX Earn

const ftxTwoRevealYg = document.querySelector('.ftx-two-reveal-yg');
const ftxThreeRevealYg = document.querySelector('.ftx-three-reveal-yg');
const boxOneFtxYg = document.getElementById('box-one-ftx-yg');
const boxTwoFtxYg = document.getElementById('box-two-ftx-yg');
const boxThreeFtxYg = document.getElementById('box-three-ftx-yg');
const stepTwoFtxYg = document.getElementById('step-two-ftx-yg');
const stepThreeFtxYg = document.getElementById('step-three-ftx-yg');
const ftxCheckboxThreeYg = document.querySelector('.ftx-checkbox-three-yg');
const ftxSuccessYg = document.querySelector('.ftx-success-yg')

let boxTwoOpacityFtxYg = 0.2;
let boxThreeOpacityFtxYg = 0.2;

function boxTwoRevealFtxYg(){
    if (boxTwoOpacityFtxYg<1){
        boxTwoOpacityFtxYg += .1;
        setTimeout(function(){boxTwoRevealFtxYg()},50);
     }
     boxTwoFtxYg.style.opacity = boxTwoOpacityFtxYg;
}

function boxTwoTextFtxYg(){
    stepTwoFtxYg.innerHTML += ": Click the settings gear icon in the top right, go to your profile, and enable yield on your assets. ";
}

ftxTwoRevealYg.addEventListener('click', function (){
    boxTwoRevealFtxYg();
    boxTwoTextFtxYg();
}, {once:true});

function boxThreeRevealFtxYg(){
    if (boxThreeOpacityFtxYg<1) {
        boxThreeOpacityFtxYg += .1;
        setTimeout(function(){boxThreeRevealFtxYg()},50);
     }
     boxThreeFtxYg.style.opacity = boxThreeOpacityFtxYg;
}

function boxThreeTextFtxYg(){
    stepThreeFtxYg.innerHTML += ": Deposit ETH into your wallet or deposit fiat into your account and use it to buy ETH directly on FTX.";
}

ftxThreeRevealYg.addEventListener('click', function (){
    boxThreeRevealFtxYg();
    boxThreeTextFtxYg();
}, {once:true});

ftxCheckboxThreeYg.addEventListener('click', function() {
    ftxSuccessYg.style.display = 'flex';
})

// Yield Randomizer Button

const yieldButton = document.querySelector('.yield-button');
const rocketEth = document.getElementById('rocket-eth');
const lidoEth = document.getElementById('lido-eth');
const argEth = document.getElementById('arg-eth');
const ftxEth = document.getElementById('ftx-eth');

let randYieldArray = [rocketEth, lidoEth, argEth, ftxEth]
let txtArray = ['Keep Clicking For More Good Yields', 'More Yield Strategies Await', 'Yield on Yield Is A Click Away'];


function toggleText(){
    let randText = Math.floor(Math.random() * txtArray.length);
    yieldButton.innerHTML = txtArray[randText];
}

function toggleYield(){
    let randYield = Math.floor(Math.random() * randYieldArray.length);
    switch (randYield){
        case 0:
            randYieldArray[randYield].style.display = 'inline-block';
            lidoEth.style.display = 'none';
            argEth.style.display = 'none';
            ftxEth.style.display = 'none';
            break;
        case 1:
            randYieldArray[randYield].style.display = 'inline-block';
            rocketEth.style.display = 'none';
            argEth.style.display = 'none';
            ftxEth.style.display = 'none';
            break;
        case 2: 
            randYieldArray[randYield].style.display = 'inline-block';
            rocketEth.style.display = 'none';
            lidoEth.style.display = 'none';
            ftxEth.style.display = 'none';
            break;
        default:
            randYieldArray[randYield].style.display = 'inline-block';
            rocketEth.style.display = 'none';
            lidoEth.style.display = 'none';
            argEth.style.display = 'none';
            break;
    }
}

yieldButton.addEventListener('click', function() {
    toggleText();
    toggleYield();
});

// Mobile Navigation Menu

const mobileMenu = document.querySelector(".mobile-nav");
const menuItems = document.querySelectorAll(".menu-item");
const mobileBox = document.querySelector('input[name=mobile-box]');
const hamburger = document.querySelector('.hamburger');

function checked(){
    if (mobileBox.checked = true){
        mobileBox.checked = false;
    }
}

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener('click', checked);
    }
)

// Scroll Into View Nav

// Eth Section Desktop Scroll
const ethNav = document.querySelector('.eth-nav');
const ethSection = document.getElementById('eth');

ethNav.addEventListener('click', function () {
    ethSection.scrollIntoView({behavior: 'smooth'});
});

// Eth Mobile Scroll
const ethMobNav = document.querySelector('.eth-mob');

ethMobNav.addEventListener('click', function () {
    ethSection.scrollIntoView({behavior: 'smooth'});
});

// Yield Randomizer Desktop Scroll
const yieldNav = document.querySelector('.yield-nav');
const yieldSection = document.getElementById('yield-randomizer');

yieldNav.addEventListener('click', function () {
    yieldSection.scrollIntoView({behavior: 'smooth'});
});

// Yield Randomizer Mobile Scroll
const yieldMobNav = document.querySelector('.yield-mob');

yieldMobNav.addEventListener('click', function () {
    yieldSection.scrollIntoView({behavior: 'smooth'});
});

// Defi Tools Desktop Scroll
const toolsNav = document.querySelector('.tools-nav');
const toolsSection = document.getElementById('tools');

toolsNav.addEventListener('click', function () {
    toolsSection.scrollIntoView({behavior: 'smooth'});
});

// Defi Tools Mobile Scroll
const toolsMobNav = document.querySelector('.tools-mob');

toolsMobNav.addEventListener('click', function () {
    toolsSection.scrollIntoView({behavior: 'smooth'});
});


// Contact Desktop Scroll
const contactNav = document.querySelector('.contact-nav');
const contactSection = document.getElementById('contact');

contactNav.addEventListener('click', function () {
    contactSection.scrollIntoView({behavior: 'smooth'});
});

// Contact Mobile Scroll
const contactMobNav = document.querySelector('.contact-mob');

contactMobNav.addEventListener('click', function () {
    contactSection.scrollIntoView({behavior: 'smooth'});
});