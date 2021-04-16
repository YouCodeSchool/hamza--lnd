function setup() {
  canvas = createCanvas(800, 500);
  background(249, 249, 249);
}

class shape {
  constructor(nameshape, x, y) {
    this.nameshape = nameshape;
    this.x = x;
    this.y = y;
  }
  static draw(shape) {
    switch (shape.nameshape) {
      case "square":
        square(shape.x, shape.y, shape.w);
        break;
      case "circle":
        circle(shape.x, shape.y, shape.r);
        break;
      case "rectangle":
        rect(shape.x, shape.y, shape.w,shape.h);
        break;
    }
  }
}
class squares extends shape{
    constructor(nameshape,x,y,w){
        super(nameshape, x, y);
        this.w=w;
    }
}
class circles extends shape {
  constructor(nameshape, x, y, r) {
    super(nameshape, x, y);
    this.r = r;
  }
}
class rectangles extends shape {
  constructor(nameshape, x, y,w,h) {
    super(nameshape, x, y);
    this.h = h;
     this.w = w;
  }
}
let shapes =document.querySelector("#shape");
let select;
let x=document.querySelector("#x");
let y = document.querySelector("#y");
let w = document.querySelector("#w");
let r=document.querySelector("#r");
let h=document.querySelector("#h");

function  enabl(input) {
    input.disabled=false ;
    
}
function disabled(input) {
  input.disabled = true;
}

shapes.addEventListener('change', () => {
  select = shapes.options[shapes.selectedIndex].value;

  if(select=="square")
  {
      disabled(r);
      disabled(h);
  }
  else if(select =="rectangle"){
      enabl(h);
  }
  else{
       disabled(h);
      disabled(w);
      enabl(r);
  }
});
let drawshape=document.querySelector("#draw");
drawshape.addEventListener('click',()=>{
    if(select=="square"){
        let sqr= new squares(select,x.value,y.value,w.value);
        squares.draw(sqr);   
    }
     if (select== "circle") {
       let crql = new circles(select, x.value, y.value, r.value);
       circles.draw(crql);
     }
     if (select == "rectangle") {
       let rtg = new rectangles(select, x.value, y.value, w.value,h.value);
       rectangles.draw(rtg);
     }
    
})


