const anchorEearn = document.getElementById('anchor-earn');
const tombFinance = document.getElementById('tomb-finance');
const stader = document.getElementById('stader');
const btnText = document.getElementById('yield-button');
let randYieldArray = [anchorEearn, tombFinance, stader]
let txtArray = ['Keep Clicking For More Good Yields', 'More Yield Strategies Await', 'Yield on Yield Is A Click Away'];


function toggleText(){
    let randText = Math.floor(Math.random() * txtArray.length);
    btnText.innerHTML = txtArray[randText];
}

function toggleYield(){
    let randYield = Math.floor(Math.random() * randYieldArray.length);
    if (randYield === 0){
        randYieldArray[randYield].style.display = 'flex';
        tombFinance.style.display = 'none';
        stader.style.display = 'none';
    }else if(randYield === 1){
        randYieldArray[randYield].style.display = 'flex';
        anchorEearn.style.display = 'none';
        stader.style.display = 'none';
    }else{
        randYieldArray[randYield].style.display = 'flex';
        anchorEearn.style.display = 'none';
        tombFinance.style.display = 'none';
    }
}

function yieldRandomizer(){
    toggleText();
    toggleYield();
}