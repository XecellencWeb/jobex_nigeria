export const signUser = (user:any)=>{
  localStorage.setItem('jobbex_user',JSON.stringify(user))
}

export const signedUser = ()=>
     JSON.parse(localStorage.getItem('jobbex_user')||'null')


export const logOutFunc = ()=>localStorage.removeItem('jobbex_user')