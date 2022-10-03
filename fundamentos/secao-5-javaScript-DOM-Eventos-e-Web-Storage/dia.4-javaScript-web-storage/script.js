window.onload = function (){
    let select = document.querySelector('select')
    select.addEventListener('change', function (){
        let selected = select.selectedOptions[0]
        document.body.style.backgroundColor = selected.value
        
    })

    let textcolor = document.getElementById('textColor')
    textcolor.addEventListener('change', function (){
        let selected = textcolor.selectedOptions[0]
        let colorText = document.getElementById('body-color')
        colorText.style.color = selected.value
    })
}






















