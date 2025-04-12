// let version = Date.now();
// let link = document.createElement("link")
// link.rel = "stylesheet"
// link.href = `./style.css?ver=${version}`
// document.head.appendChild(link)
// console.log(link)



// jQuery(document).ready(function($){
//     $("#btn-c").click(function(){
//     alert("Hello")
//     })
// })

 
// jQuery(document).ready(function($){
//     $("#btn1").click(function(){
//         alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click(function(){
//         alert("HTML: " + $("#test").html());
//     });
//     $("#btn3").click(function(){
//         alert("CSS: " + $("#test").css());
//     });
// })

// jQuery(document).ready(function(){
//     $("#form-btn").click(function(e){
//         e.preventDefault()
//        let value =  $(".form-input").val();
//        console.log(value)
//        $(".result").prepend(`<li>${value}</li>`);
//        $(".form-input").val('')
//     })
// })

// jQuery(document).ready(function(){
//     $(".btn").click(function(){
//         $(".pink-box").remove();
//     })
// })

jQuery(document).ready(function(){
    $(".btn2").click(function(){ 
        $(".heading").css({
            "color" : "blue",
            "font-size" : "40px",
            "text-transform" : "uppercase",
            "background-color" : "yellow"
        })

        let w = $(".heading").width()
        let h = $(".heading").height()

        $(".result").text(`Width: ${w}px, Height: ${h}px`)
    })
})

// jQuery(document).ready(function($){
//     // $(".heading").css("color","blue")
//     // $(".heading").css("font-size","40px")
//     $(".heading").css({
//         "color" : "blue",
//         "font-size" : "40px",
//         "text-transform" : "uppercase",
//         "background-color" : "yellow"
//     })
// })


// "my name is tushar. my age is 28 years."
// 'He said, "he will not come."'
// "this is john's book"

// let sentence = "He said, \"he will not come.\" this is john's book";
let name = "Tushar";
let age =30;
let mobile =98766543210;
let address = "Habra";

let sentence = `He said, "he will not come." this is ${name}'s book. my name is tushar. my age is ${age + 1} years. I am from ${address} and my mobile no is ${mobile}`;
console.log(sentence)



// let a = Number(prompt("enter a number"));
// let b = Number(prompt("enter a number"));
// let add = a + b;
// let sub = a - b;
// let multi = a * b;
// let division = a / b;

// console.log(`the total is ${add}`)
// console.log(`the subtraction is ${sub}`)
// console.log(`the total of ${a} + ${b} is ${add}`)

// $(".result").text(`the total of ${a} + ${b} is ${add}`);
// $(".resulttwo").text(`the substraction of ${a} - ${b} is ${sub}`);
// $(".resultthree").text(`the multification of ${a} * ${b} is ${multi}`);
// $(".resultfour").text(`the division of ${a} / ${b} is ${division}`)


// let num1 = prompt("enter a number");
// console.log(num1)
