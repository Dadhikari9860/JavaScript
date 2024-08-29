function one (){
    const username ="dinesh"
    function two(){//closure
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username="dinesh"
if(username==="dinesh"){
    const website=" youtube"
    // console.log(username + website);
    
}
}

// +++++++++ interesting +++++++++
console.log(addone(5))
function addone(num){
return num + 1
}


const addTwo = function (num){
    return num + 2
}
addTwo(5)
