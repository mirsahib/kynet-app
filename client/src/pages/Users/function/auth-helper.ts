const isAuthenticated = ()=>{
    const user = sessionStorage.getItem("userId");
    console.log('user is authenticated', user===null);
    if(user!==null){
        return JSON.parse(user);
    }else{
        return false
    }
}
const authenticated= async(token:string)=>{
    sessionStorage.setItem('userId',JSON.stringify(token))
}


export {isAuthenticated,authenticated}