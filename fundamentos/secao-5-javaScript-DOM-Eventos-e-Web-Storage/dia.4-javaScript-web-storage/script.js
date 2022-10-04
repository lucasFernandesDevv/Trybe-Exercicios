window.onload = function (){
    let select = document.querySelector('select')
    select.addEventListener('change', function (){
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
        
        localStorage.setItem('backgroundColor', selected.value);
    })

    let textcolor = document.getElementById('textColor')
    textcolor.addEventListener('change', function (){
        let selected = textcolor.selectedOptions[0];
        let colorText = document.getElementById('text');
        colorText.style.color = selected.value;

        localStorage.setItem('textColor', colorText.value);
     
    })

    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function(){
        let text = document.getElementById('text');
        text.style.fontSize = `${inputFontSize.value}px`;
        
        
        localStorage.setItem('fontSize',`${inputFontSize.value}px`);
    })

    let savedBackground = localStorage.getItem('backgroundColor');
    document.body.style.backgroundColor = savedBackground; 
    
    let savedColorText = localStorage.getItem('textColor');
    let colorText = document.querySelector('p');
    colorText.style.color = savedColorText;
    
    let savedFontSize = localStorage.getItem('fontSize');
    let text = document.querySelector('p');
    text.style.fontSize = savedFontSize;
    
}






















