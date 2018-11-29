var arr=[];
var filtered=[];
for(var i=0; i<30000; i++){
	arr.push({
	x:Math.round(Math.random()*20-10),   
	y:Math.round(Math.random()*20-10),
	z:Math.round(Math.random()*20-10),
	})
}
var neotr=[];
neotr = arr.filter(function(a){
	return a.x>=0 && a.y>=0 && a.z>=0 &&a.x<=1 && (Math.sqrt(a.x**2+a.y**2+a.z**2))<=3;
})
neotr.sort(function(a,b){
	return (a.x+a.y+a.z)-(b.x+b.y+b.z);
})
neotr.splice(0,(neotr.length/2));
var vek=neotr.reduce((obj,next)=>{
      return   {
      x:obj.x+next.x,
      y:obj.y+next.y,
      z:obj.z+next.z
      }
    })
console.log(vek);

var comp=[{
	name:"Masha",
	zp:12,
	otd:"byhgalteri",
	age:19
},
{
	name:"Evlampiy",
	zp:15,	
	otd:"logistik",
	age:20	
},
{
	name:"Sania",
	zp:13,	
	otd:"logistik",
	age:22
},
{
  name:"Vitia",
  zp:9,
  otd:"byhgalteri",
  age:22
},
{
  name:"Serega",
  zp:43,
  otd:"sealers",
  age:44
},
{
  name:"Dinis",
  zp:11,
  otd:"sealers",
  age:32
},
{
  name:"Kirill",
  zp:23,
  otd:"logistik",
  age:28
}];
var otdels=[comp[0].otd],summax=0;
comp.forEach(function(elem){
  if(otdels.indexOf(elem.otd)>=0)
  return
  else{
    otdels.push(elem.otd)
  }
})

otdels.forEach(function(elem){
  var deportresult=[];
  console.log("Departament",elem);
  comp.forEach(function(chel){
    if(elem==chel.otd){
      deportresult.push(chel);
    }
  })
  deportresult.sort(function(a,b){
    return b.zp-a.zp
  })
  console.log("Max Salary:",deportresult[0].zp,"Name:",deportresult[0].name);
  console.log("Average salary",deportresult.reduce(function(sum,chel){
    return sum+chel.zp;
  },0)/deportresult.length);
  console.log("Average age",(deportresult.reduce(function(sum,chel){
    return sum+chel.age;
    },0)/deportresult.length).toFixed(1));
    summax+=deportresult[0].zp
})
console.log("Average max salary",summax/otdels.length);


