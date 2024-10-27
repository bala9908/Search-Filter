let list=[
  {
    Id:1,
    name:"Angular",
    image:"image-blog-openlogic-what-is-angularjs-1.webp",
    discription:`Angular is a popular, open-source JavaScript framework by Google for building web applications. It uses TypeScript, offering a modular structure, two-way data binding, and a powerful CLI for efficient development.`,
    fees:3500
  },
  {
    Id:2,
    name:"React",
    image:"download.jpg",
    discription:`Angular is a popular, open-source JavaScript framework by Google for building web applications. It uses TypeScript, offering a modular structure, two-way data binding, and a powerful CLI for efficient development.`,
    fees:2000
  },
  {
    Id:3,
    name:"Javascript",
    image:"js.jpg",
    discription:`Angular is a popular, open-source JavaScript framework by Google for building web applications. It uses TypeScript, offering a modular structure, two-way data binding, and a powerful CLI for efficient development.`,
    fees:1700
  },
  {
    Id:4,
    name:"Python",
    image:"python.jpg",
    discription:`Python is a versatile, high-level programming language known for its readability and simplicity. It's widely used in web development, data analysis, AI, automation, and more, supporting various programming paradigms.`,
    fees:1800
  },
  {
    Id:5,
    name:"Html",
    image:"html.jpg",
    discription:`HTML (HyperText Markup Language) is a standard language used to create web pages. It structures web content with tags, enabling text, images, links, and multimedia to display in browsers.`,
    fees:900
  },
  {
    Id:6,
    name:"Css",
    image:"css.jpg",
    discription:`CSS (Cascading Style Sheets) is a language used to style and layout HTML elements on web pages. It controls colors, fonts, spacing, animations, and responsive designs for enhanced user experiences.`,
    fees:800
  },
  {
    Id:7,
    name:"Java",
    image:"java.jpg",
    discription:`Java is a versatile, object-oriented programming language used for developing web, mobile, and desktop applications. Known for platform independence, strong memory management, and a rich API, it's widely adopted globally.`,
    fees:5000
  },
  {
    Id:8,
    name:"Photoshop",
    image:"photo-shop.jpg",
    discription:`Photoshop is a powerful image editing software used for photo manipulation, graphic design, and digital art. It offers advanced tools for retouching, color correction, layering, and creating professional visuals.`,
    fees:4000
  }
]

// function add(data=list){
//   let p=""
// for(let i=0;i<data.length;i++){
//     p+=`<tr>
//     <td>${list[i].Id}</td>
//     <td>${list[i].name}</td>
//     <td><img src=${list[i].image}/></td>
//     <td>${list[i].discription}</td>
//     <td>${list[i].fees}</td>
//    </tr>`
// }
// document.getElementById("table").innerHTML=p
// }
// add(); //it add list items in table dynamically





// function increase(){
// list.sort((a,b)=>{
//   return a.fees-b.fees;  
// })
// add()
// }

// function decrease(t){
//   list.sort((a,b)=>{
//     return b.fees-a.fees;
//   })
//   add()
// }

// function filter(){
//   const filter_list=list.filter((i)=>{
//     return i.fees>1000;
//   })
//   let a=filter_list.sort((a,b)=>{
//     return a.fees-b.fees;
//   })
//   console.log(filter_list);
//   add(filter_list)
//   add(a)
 
// }



function add(data = list) { // Accepts a list (filtered or full) to display
  let p = "";
  for (let i = 0; i < data.length; i++) {
    p += `<tr>
      <td>${data[i].Id}</td>
      <td>${data[i].name}</td>
      <td><img src=${data[i].image} /></td>
      <td>${data[i].discription}</td>
      <td>${data[i].fees}</td>
    </tr>`;
  }
  document.getElementById("table").innerHTML = p;
}

add(); // Display the full list initially
console.log([...list])
function increase(data = list) {
  const sortedList = [...data].sort((a, b) => a.fees - b.fees); // Sort in ascending order
  add(sortedList); // Display sorted list
}

function decrease(data = list) {
  const sortedList = [...data].sort((a, b) => b.fees - a.fees); // Sort in descending order
  add(sortedList); // Display sorted list
}

function filter() {
  const filteredList = list.filter((i) => i.fees > 1000); // Filter by fees > 1000
  increase(filteredList); // Sort in ascending order initially
}

function below(){
  const below_filter=list.filter((a)=>{
    return a.fees<1000;
  })
  increase(below_filter)
}