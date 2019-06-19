// // console.log("Hello World!");

// // const variable = 1000;

// // let a;

// // var b = "hello";

// // console.log(typeof undefinedVariable);

// // console.log(typeof a);//xac dinh gia tri cua a
// // console.log(typeof b);
 
// // a = "abe";
// // b=1000;

// // console.log(b,a);

// // var obj = {
// //     a: 5,
// //     b: "Hello"
// // };

// // console.log(obj.a);
// // console.log(obj["b"]);

// // obj.a="10"

// // console.log(obj);

// // obj.c = "1000";
// // delete(obj.a);

// // console.log(obj);
// // //Array
// // const arr = [1,true,null,"abc"]

// // console.log(arr.length)
// // console.log(arr.push("a"))
// // console.log(arr)


// // console.log((123.22222).toFixed(1))
// // console.log(a.toUpperCase())

// // console.log(new Date().getDate())

// // //RegExp
// // // filter check string xem minh co can dung khong

// // console.log(new RegExp(/([A-Z])\w+/.test('Asadasdasd')));

// // // //Tao loi
// // // const error = new Error("Loi Roi !!!")

// // // error.name = "tom beo";

// // // throw error;


// //Funtion Scope - var

// var a = "Hello";
// function alibaba(){
//     var b;
//     console.log(a,b);
// }
// alibaba();

// //Block - let

// let c = 20;

// if (true) {
//     let d = 100;
//     console.log(c,d);
// }
// //var khong gioi hoan trong funtion if va for
// //let bi gioi han


function countDown(count){
    for(let i = count;i>=0;i--){
        setTimeout(function(){
            console.log(i);
        },(count-i)*1000);
     
    }
}

//countDown(5)

// console.log("Begin1")

// setTimeout(function(){
//     console.log("Begin2")
// },1000)
// console.log("Begin3")


function alarm(aa){
    setTimeout(function(){
        console.log("Day Me M Di!!!")
    },1000);
}
function alarm2(aa){
    setTimeout(function(){
        console.log("O Khong Day A!!")
    },3000);
}

alarm2(alarm)