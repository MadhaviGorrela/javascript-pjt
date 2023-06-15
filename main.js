//operators//
//arithmetic //
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

