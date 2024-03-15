let profile={
    img:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name:"Ravi",
    age:25
}
let img1=document.getElementById("imgid").src=profile.img
let name1=document.getElementById("nameid").innerHTML=`NAME: ${profile.name}`
let age1=document.getElementById("ageid").textContent=`AGE:${profile.age}`
