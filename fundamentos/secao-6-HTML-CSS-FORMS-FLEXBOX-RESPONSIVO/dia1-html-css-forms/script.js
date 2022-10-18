window.onload(function(){
    let submitButton = document.querySelector('submit')
    submitButton.addEventListener('click', function (event){
        event.target.preventDefault()
    })
    function buttonReset (){
        let crateButton = document.createElement('input')
        crateButton.innerHTML = 'reset'
        getButton = document.getElementById('button-maker') 
        getButton.appendChild(crateButton)
    
    }buttonReset()
   
})


