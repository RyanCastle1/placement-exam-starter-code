
let yourName= 'Ryan Castle';
const gingerBreadTotal = document.getElementById('qty-gb');
const chocChipTotal = document.getElementById('qty-cc');
const sugarTotal = document.getElementById('qty-sugar');
const cookieTotal = document.getElementById('qty-total');

let gb = 0;
let cc = 0;     
let sugar = 0;

let Totals = (gb+cc+sugar);


document.getElementById('credit').textContent= 'created by $(yourName)';
document.getElementById('minus-gb').addEventListener('click', function() {
    
    if ( gb >= 0 ) {
        gb--;
        gingerBreadTotal.textContent = gb;
        Totals= (gb+cc+sugar);
        cookieTotal.textContent = parseInt(cookieTotal);
        console.log(gb);
    }
});
document.getElementById('add-gb').addEventListener('click', function() {
if (gb >= 0) {
    gb++;
    gingerBreadTotal.textContent = gb;
    Totals = (gb+cc+sugar);
    cookieTotal.textContent = parseInt(cookieTotal);
    console.log(gb);
}
});
document.getElementById('minus-cc').addEventListener('click', function() {
    
    if ( cc >= 0 ) {
        cc--;
        chocChipTotal.textContent = cc;
        Totals = (gb+cc+sugar);
        cookieTotals.textContent = parseInt(cookieTotal);
        console.log(cc);
    }
});
document.getElementById('add-cc').addEventListener('click', function() {
    if ( cc >= 0) {
    cc++;
    chocChipTotal.Content = cc;
    Totals = (gb+cc+sugar);
    cookieTotal.Content = parseInt(cookieTotal);
    console.log(cc);
    }
});
document.getElementById('minus-sugar').addEventListener('click', function() {
if ( sugar >= 0 ) {
        sugar--;
        sugarCookietotal.Content = sugar;
        Totals = (gb+cc+sugar);
        cookieTotal.textContent = parseInt(cookieTotal);
        console.log(sugar);
}
});
document.getElementById('add-sugar').addEventListener('click', function() {
    if ( sugar >= 0) {
    sugar++;
    sugarCookietotal.Content = sugar;
    Totals = (gb+cc+sugar);
    cookieTotal.textContent = parseInt(cookieTotal);
    console.log(sugar);
    }
});
