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

        localStorage.setItem('textColor', selected.value);
     
    })

    // let fontFamily = document.querySelector('fontFamily')
    // fontFamily.addEventListener('change', function(){
        

    // })

    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function(){
        let text = document.getElementById('text');
        text.style.fontSize = `${inputFontSize.value}px`;
        
        
        localStorage.setItem('fontSize',`${inputFontSize.value}px`);
    })

    let inputLineHeigth = document.querySelector('input[name="line-heigth"]')
    inputLineHeigth.addEventListener('change', function() {
        let line = document.getElementById('text');
        let lineValue = line.style.lineHeight = `${inputLineHeigth.value}px`;

        localStorage.setItem('lineHeigth',lineValue);
    })


    let savedBackground = localStorage.getItem('backgroundColor');
    document.body.style.backgroundColor = savedBackground; 
    
    let savedColorText = localStorage.getItem('textColor');
    let colorText = document.getElementById('text')
    colorText.style.color = savedColorText;
    
    let savedFontSize = localStorage.getItem('fontSize');
    let text = document.getElementById('text')
    text.style.fontSize = savedFontSize;

    let savedLineHeigth = localStorage.getItem('lineHeight')
    let lineHeight = document.getElementById('text');
    lineHeight.style.lineHeight = savedLineHeigth;
    
}






















