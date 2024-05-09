ready = document.querySelector('.submit')


ready.addEventListener('click',function(){
    let name = document.getElementById('fname').value
    let all_quest = document.getElementById('lname').value
    let correct = document.getElementById('kname').value
    document.querySelector('.name').innerHTML = name
    document.querySelector('.one').innerHTML = all_quest
    document.querySelector('.two').innerHTML = all_quest
    document.querySelector('.tree').innerHTML = correct
    let percent = (+correct / +all_quest * 100)
    percent = percent.toFixed(2)
    document.querySelector('.four').innerHTML = percent + '%.'
    document.querySelector('.five').innerHTML = correct
    document.querySelector('.six').innerHTML = all_quest
    document.querySelector('.seven').innerHTML = percent + '%.'
    let pie = document.querySelectorAll('.pie')
    for(i=0;i<2;i++){
        pie[i].style.background = `conic-gradient(rgb(1, 211, 1) ${+percent}%,red 0%)`
    }       
    if(+percent >= 85){
        document.querySelector('.eight').innerHTML = 5
    }else
    if(+percent >= 65 && +percent < 85 ){
        document.querySelector('.eight').innerHTML = 4
    }else
    if(+percent >= 50 && +percent < 65 ){
        document.querySelector('.eight').innerHTML = 3
    }
    else{
        document.querySelector('.eight').innerHTML = 2
    }
})


