const hours = document.getElementById("hours")
const minute = document.getElementById("minute")
const seconds = document.getElementById("seconds")



function clock (){
   let h = new Date().getHours()
   let m = new Date().getMinutes()
   let s = new Date().getSeconds()


    hours.textContent = h
    minute.textContent = m
    seconds.textContent = s
    setTimeout(()=>{
        clock()
    }, 1000)
}   


clock()