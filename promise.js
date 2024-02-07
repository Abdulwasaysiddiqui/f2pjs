setTimeout(function(){
    console.log("HELLO WORLD")
},4000)

setInterval(function(){
    document.write("WOW")
},2000)

// PROMISE
let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("THIS IS FIRST PROMISE")
    },2000)
})

let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"ALI" , password : "12345"})
    },2000)
})
promiseTwo.then(function(user){
    console.log(user)
})

let promiseThree  = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "CAMEL" , email : "camel@gmail.com"})
    },2000)
})
promiseThree.then(function(elec){
    return elec.email
}).then(function(userEmail){
    console.log(userEmail)
})


let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "Majid" , password : "789"})
        }else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    },4000)
})
promiseFour.then(function(apple){
    return apple.name
}).then(function(myName){
    console.log(myName)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("PROMISE HAS BEEN RESOLVE OR REJECTED!")
})


let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({party : "annual party" , email : "annuaparty@gmail.com"})
        }else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    },4000)
})
// ASYNCHRONISED STEP
async function consumedPromiseFive(){
    try{
        let resp = await promiseFive;
        console.log(resp);
    }
    catch(error){
        console.log(error)
    }
}
consumedPromiseFive()

//API WITH ASYNC
async function 