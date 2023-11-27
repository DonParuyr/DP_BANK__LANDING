
const closeBtn = document.querySelectorAll('.close__btn');
// const closeSpace = document.querySelectorAll('');
closeBtn.forEach( closeButton => {
    closeButton.addEventListener('click', function(){
        document.getElementById('notify__debitCard').style.display = 'none';
        document.getElementById('notify__creditCard').style.display = 'none';
        document.getElementById('notify__credit').style.display = 'none';
        document.getElementById('notify__premium').style.display = 'none';
        document.getElementById('notify__deposits').style.display = 'none';
        document.getElementById('notify__investments').style.display = 'none';
        document.getElementById('notify__insurance').style.display = 'none';
        document.getElementById('notify__simCard').style.display = 'none';
        document.getElementById('notify__travel').style.display = 'none';
        document.getElementById('notify__business').style.display = 'none';
    })
})

const btnServicesArray = document.querySelectorAll('#btn__services li');

btnServicesArray.forEach( btn => {
    btn.addEventListener('click', function() {
        handlerButton(btn);
        // document.getElementById('notify').style.display = 'flex';
    })
})
function handlerButton(value){
    // console.log(value.textContent);
    switch (value.textContent){
        case 'Debit Card':
            document.getElementById('notify__debitCard').style.display = 'flex';
            break;
        case 'Credit Card':
            document.getElementById('notify__creditCard').style.display = 'flex';
            break;
        case 'Credit':
            document.getElementById('notify__credit').style.display = 'flex';
            break;
        case 'Premium':
            document.getElementById('notify__premium').style.display = 'flex';
            break;
        case 'Deposits':
            document.getElementById('notify__deposits').style.display = 'flex';
            break;
        case 'Investments':
            document.getElementById('notify__investments').style.display = 'flex';
            break;
        case 'Insurance':
            document.getElementById('notify__insurance').style.display = 'flex';
            break;
        case 'Sim-Card':
            document.getElementById('notify__simCard').style.display = 'flex';
            break;
        case 'Travel':
            document.getElementById('notify__travel').style.display = 'flex';
            break;
        case 'Business':
            document.getElementById('notify__business').style.display = 'flex';
            break;
    }
}