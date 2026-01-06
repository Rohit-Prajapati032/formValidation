const signOutBtn = document.querySelector("#signOutBtn");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser){
    window.location.href = 'login.html';
}
window.addEventListener('load', ()=>{
const userName = document.querySelector('#userName');
userName.innerHTML = '';
const user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user);
userName.innerHTML = `👤 ${user.name}`;
})

signOutBtn.addEventListener('click', ()=>{
    localStorage.removeItem("currentUser");
    window.location.replace("login.html");
});
