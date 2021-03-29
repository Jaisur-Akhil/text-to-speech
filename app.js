const say = require('say');

const hi = ("Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree RaamJai Shree Raam Jai Shree Raam Jai Shree RaamJai Shree Raam Jai Shree Raam Jai Shree Raam " )

// say.speak(hi)

// say.speak("Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree RaamJai Shree Raam Jai Shree Raam Jai Shree RaamJai Shree Raam Jai Shree Raam Jai Shree Raam " ,'Cellos',1)

say.speak('hey homie i am great ! ! ', 'Good News',1.0,(error)=>{
    if(error){
        console.log(error.message);
    }
    console.log('Message Spoken Successfully')
})

// say.export(" Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree Raam Jai Shree RaamJai Shree Raam Jai Shree Raam Jai Shree RaamJai Shree Raam Jai Shree Raam Jai Shree Raam  I'am Amazing person , Call your mom shes waiting for dinner",'Cellos',0.75,'JaiShreeRam.mp3',(err)=>{
//     if(error){
//         console.log(error.message);
//     }
//     console.log('Message Recorded Successfully')
// })