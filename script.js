
let yourName= 'Ryan Castle',
const; gingerBreadTotal = document.getElementById('qty-gb');
const chocChipTotal = document.getElementById('qty-cc');
const sugarCookieTotal = document.getElementById('qty-sugar');
const cookieTotal = document.getElementById('qty-total');

let gb = 0;
let cc = 0;     
let sugar = 0;

let Totals = (gb+cc+sugar);


document.getElementById('credit').Content= 'created by $(yourName)';
document.getElementById('minus-gb').addEventListener('click', function() {
    
    if ( gb ==0 ) {
        gb--;
        gingerBreadTotal.Content = gb;
        Totals = (gb+cc+sugar);
        cookieTotals.Content = parseInt(cookieTotals);
    }
});
document.getElementById('add-gb').addEventListener('click', function() {
if (gb==0) {
    gb++;
    gingerBreadTotal.Content = gb;
    Totals = (gb+cc+sugar);
    cookieTotals.Content = parseInt(cookieTotals);} 
});
document.getElementById('minus-cc').addEventListener('click', function() {
    
    if ( cc == 0 ) {
        cc--;
        chocChipTotal.Content = cc;
        Totals = (gb+cc+sugar);
        cookieTotals.Content = parseInt(cookieTotals);
    }
});
document.getElementById('add-cc').addEventListener('click', function() {
    if (cc==0) {
    cc++;
    chocChipTotal.Content = cc;
    Totals = (gb+cc+sugar);
    cookieTotals.Content = parseInt(cookieTotals);
    }
});
document.getElementById('minus-sugar').addEventListener('click', function() {
if (sugar == 0 ) {
        sugar--;
        sugarCookietotal.Content = sugar;
        Totals = (gb+cc+sugar);
        cookieTotals.text = parseInt(cookieTotals);
    }
});
document.getElementById('add-sugar').addEventListener('click', function() {
    if ('sugar' ==0) {
    sugar++;
    sugarCookietotal.Content = sugar;
    Totals = (gb+cc+sugar);
    cookieTotals.Content = parseInt(cookieTotals);
    }
});