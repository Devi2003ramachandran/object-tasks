let recipe={
    title:"Tomato Pasta",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]

}
let title1=document.getElementById("pastaid").innerHTML=recipe.title;
let img1=document.getElementById("imgid").src=recipe.image;

for( let i of recipe.ingredients){
    let ul1=document.getElementById("liid")
    let list1=document.createElement("li");
    list1.textContent=i;
    ul1.appendChild(list1)
}