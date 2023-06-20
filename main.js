//operators//
//arithmetic //
 
 document.querySelector(".opt1").innerHTML = "Arithmetic operator";

 let ac= 4;
 let bc = 5;
 console.log(ac + bc);
 document.querySelector(".art").innerHTML =ac + bc;

 let ab= 4;
 let ba = 5;
 console.log(ab - ba);
 document.querySelector(".art1").innerHTML =ab - ba;

 let ad= 4;
 let bd = 5;
 console.log(ad * bd);
 document.querySelector(".art2").innerHTML =ad * bd;

 let ae= 4;
 let be = 5;
 console.log(ae / be);
 document.querySelector(".art3").innerHTML =ae / be;

 let af= 4;
 let bf = 5;
 console.log(af % bf);
 document.querySelector(".art4").innerHTML =af % bf;
 let ca = af**bf;
 console.log(ca);
 document.querySelector(".art5").innerHTML=ca;
 //assignment//
  document.querySelector(".opt2").innerHTML = "Assignment operator";
 let pq = 6;
 pq += 4;
 console.log(pq);
 document.querySelector(".agn").innerHTML=pq;

 let pr = 6;
 pr -= 4;
 console.log(pr);
 document.querySelector(".agn1").innerHTML=pr;

 let ps = 6;
 pr *= 4;
 console.log(ps);
 document.querySelector(".agn2").innerHTML=ps;

 let pt = 6;
 pt /= 4;
 console.log(pt);
 document.querySelector(".agn3").innerHTML=pt;
// datatypes//
// number//
document.querySelector(".dt").innerHTML = "Data Types";
  const p = 20;
  const q = 30;
  console.log(p + q);
  document.querySelector(".num").innerHTML = p+ q;

  const i = 10;
  const j = 5;
  console.log(i - j);
  document.querySelector(".num1").innerHTML = i - j;
// string //
  const x = 20;
  const y = "web";
  console.log(x + y);
  document.querySelector(".str").innerHTML= x + y;

  const a = 20;
  const b = "10";
  console.log(a + b);
  document.querySelector(".str1").innerHTML= a + b;

  const c = 20;
  const d = "10";
  console.log(c - d);
  document.querySelector(".str2").innerHTML= c - d;

  const e = 20;
  const f = "20";
  console.log(e == f);
  document.querySelector(".str3").innerHTML= e == f;

  const g = 20;
  const h = "20";
  console.log(g === h);
  document.querySelector(".str4").innerHTML= g === h;
  // object //
  const k = {name:"sai", age:20 , designation:"developer"};
  console.log(k);
  document.querySelector(".obj").innerHTML= k.name + " " + k.age + " " + k.designation;
  console.log(k.name);
  document.querySelector(".obj1").innerHTML= k.name;
  console.log(k.age);
  document.querySelector(".obj2").innerHTML= k.age;
  console.log(k.designation);
  document.querySelector(".obj3").innerHTML= k.designation; 
  // null//
  const l = "";
  console.log(l);
  document.querySelector(".null").innerHTML=l;
  // undefined//
  let m;
  console.log(m);
  document.querySelector(".undef").innerHTML=m;
  //boolean//
  const n = true;
  console.log(n);
  document.querySelector(".bool").innerHTML=n;

  const o = 2;
  const r = 4;
  console.log(o<r);
  document.querySelector(".bool1").innerHTML=o<r;

  const s = 2;
  const t = 4;
  console.log(s>t);
  document.querySelector(".bool2").innerHTML=s>t;
   // functions//
   document.querySelector(".func").innerHTML = "Functions";
   function myfunction(){
    const u = 11;
    console.log(u);
    document.querySelector(".fun").innerHTML=u;
   };
   myfunction();
   
   
  //button //
  //const Btn = document.querySelector(".btn");
  //const headtag = document.querySelector(".heads");
 // Btn.addEventListener("click", function myFunction(){
  // return headtag.classList.toggle("head-active");
  //});
  //myFunction();

  const headTag = document.querySelector(".heads");
  function myFunction(){
    return headTag.classList.toggle("head-active");
  };

  //const Btns = document.querySelector(".btns");
 // const imgs = document.querySelector(".img");
 // Btns.addEventListener("click", function function1(){
   // return imgs.classList.toggle("img-active");
 // });
  //function1();
   
  const imgs = document.querySelector(".img");
  function function1(){
    return imgs.classList.toggle("img-active");
  };
  function1();

  //Escape character//
  document.querySelector(".esc").innerHTML = "Escape character";
  console.log("Are you a student");
  document.querySelector(".esc1").innerHTML = "Are you a student";
  console.log("Are you a \"student\"");
  document.querySelector(".esc2").innerHTML = "Are you a \"student\"";
  console.log(`Are "you" a student`);
  document.querySelector(".esc3").innerHTML = `Are "you" a student`;
  //ARRAYS//
  document.querySelector(".arr").innerHTML = "Array methods";

  const array = ["web", "digital", "mobile", "developer", "app", "ios"];
  console.log(array.length);
  document.querySelector(".arr1").innerHTML = array.length;

  const array1 = array[array.length-3];
  console.log(array1);
  document.querySelector(".arr2").innerHTML = array1;

  const array2 = array.length-3;
  console.log(array2);
  document.querySelector(".arr3").innerHTML = array2;

   array[5] = "graphics";
   console.log(array);
   document.querySelector(".arr4").innerHTML = array;

   const abcd = array.push("marketing");
   console.log(array);
   document.querySelector(".arr5").innerHTML = array;

   const text = array.pop("");
   console.log(array);
   document.querySelector(".arr6").innerHTML = array;
   
   const sai = array.shift("");
   console.log(array);
   document.querySelector(".arr7").innerHTML = array;

   const anu = array.unshift("gaming");
   console.log(array);
   document.querySelector(".arr8").innerHTML = array;

   const arrays = ["432", "765", "987", "654", "321"];
   console.log(Math.max.apply(null, arrays));
   document.querySelector(".max").innerHTML = Math.max.apply(null, arrays);
   
   console.log(Math.min.apply(null, arrays));
   document.querySelector(".min").innerHTML = Math.min.apply(null, arrays);

   const arrays1 = ["web", "digital", "mobile", "developer", "app", "ios"];
   const  madhu = arrays1.slice(3,6);
   console.log(madhu);
   document.querySelector(".sli").innerHTML = madhu;
   const suma = arrays1.slice(4);
   console.log(suma);
   document.querySelector(".sli1").innerHTML = suma;

   //map functoin//
   document.querySelector(".map").innerHTML = "Map Function";
   const objArray = [{id:1, name:"sai", age:15},
                      {id:2, name:"madhu", age:14},
                       {id:3, name:"devi", age:16},
                        {id:4, name:"suma", age:17}];
   const map = objArray.map(function mapfunction(item){
    return item.age*2;
    });
   console.log(map);
   document.querySelector(".map1").innerHTML = map;
   const map1 = objArray.map(function mapFunction(item){
    return item.id + " " + item.name + " " + item.age;
   });
   console.log(map1);
   document.querySelector(".map2").innerHTML = map1;
   const map2 = objArray.filter(function Mapfunction(item){
    return item.age>15;
   });
   console.log(map2);
   document.querySelector(".map3").innerHTML = map2;

   objArray.forEach(function MapFunction(item){
    console.log(item.age);
   });

   const findData = objArray.find(function mapfunction1(item){
    return item.age<20;
   });
   console.log(findData);

   const reduceData = objArray.reduce(function mapfunction2(name, item){
    return item.age+name;
   }, 0);
   console.log(reduceData);


