
var listofEmp = [emp1 = {
    name   : "Susan Smith",
    work   : "WEB DEVELOPER",
    review : " dolor sit amet consectetur adipisicing elit. Praesentium ipsam fugit quo cupiditate iste ut et quae modi sit explicabo laboriosam eveniet corporis doloremque odit reprehenderit reiciendis repudiandae, assumenda laborum." ,
    Image : "images/img1.png"
},
emp2 = {
    name   : "Jessica joli",
    work   : "FREELANCER",
    review : " sit amet consectetur adipisicing elit. Fugit, corporis. Eveniet dolore officia alias molestias, itaque pariatur aperiam ipsum minima tempora laboriosam rem. Eligendi, earum quidem quaerat fuga minus veritatis." ,
    Image : "images/img2.png"
},emp3= {
    name   : "Alex francis",
    work   : "CONTENT WRITTER",
    review : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam vitae iure neque cumque illo ullam? Laboriosam nostrum minima iusto at aut eum maxime culpa dolorum asperiores, neque voluptates porro!" ,
    Image : "images/img3.png"
},emp4 = {
    name   : "Robert anderson",
    work   : "FULLSTACK ENGINNER",
    review : " Qui magnam mollitia impedit veniam neque laudantium cumque, minima maxime accusamus voluptatum explicabo accusantium tempore quia nostrum pariatur consectetur sed quisquam asperiores!" ,
    Image : "images/img4.png"
}
];

var sameno = 0 ;

var showReview = ()=> {


var randomemp;

    


    do{
        randomemp = Math.floor(Math.random ()* listofEmp.length)

    }while(randomemp == sameno)
    
  





var showRandomEmp 


showRandomEmp = listofEmp[randomemp];
// console.log(showRandomEmp);
    
 

    document.querySelector(".name").innerHTML = showRandomEmp.name;
    document.querySelector(".post").innerHTML = showRandomEmp.work;
    document.querySelector(".para").innerHTML = showRandomEmp.review;
    document.querySelector("#imgsrc").src     = showRandomEmp.Image;

    
    sameno = randomemp;
    return listofEmp;
}

 var list = showReview();



 var count = 0 ;
var rightBracketFired = ()=>{
    

    
    console.log("Right side Current Count value - " + count);

    var passIndex = list[count];

    document.querySelector(".name").innerHTML = passIndex.name;
    document.querySelector(".post").innerHTML = passIndex.work;
    document.querySelector(".para").innerHTML = passIndex.review;
    document.querySelector("#imgsrc").src     = passIndex.Image;

    count++
    console.log("Right side After increement - "+count);
        if(count > 3){
            count = 0;
            console.log("i got fired");
        }
 
}









var leftBracketFired = ()=>{
    
    
    
    console.log("left Side Count value - " + count);

    var passIndex = list[count];

    document.querySelector(".name").innerHTML = passIndex.name;
    document.querySelector(".post").innerHTML = passIndex.work;
    document.querySelector(".para").innerHTML = passIndex.review;
    document.querySelector("#imgsrc").src     = passIndex.Image;

    count--
    console.log("left side count value after Decreement"+count);
        if(count < 0){
            count = 3;
            console.log("i got fired");
        }
 
}