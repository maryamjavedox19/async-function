// const sing=async()=>{
//     throw new Error("there's problem")
//     return 'checking'
// }

// sing()
//  .then((data)=>{
//     console.log(`promise resolved with ${data}`)
// })

// .catch((err)=>{
//     console.log("promise rejected")
//     console.log(err)
// })

const login=async(username, password)=>{
    if(!username || !password) throw 'missing credentials'
    if(password==="abc123") return 'welcome'
    throw 'incorrect password'
}

login('abchdhh', 'abc123')
.then(msg=>{
    console.log('logged in')
    console.log(msg)
})

.catch(err=>{
    console.log("error")
    console.log(err)
})
