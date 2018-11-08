//---------------------------------------Zadanie 1.----------------------------------------------------------------
var cities=["Minsk", "Brest","Moskow","Praha","Brno","Plzn","Most","Vitebsk","Mogilev","Grodno","Warshava"];
var names=["Vlad","Vitalii","Valdemar","Vladimir","Tolik","Kirill","Sasha","Sergij","Kesha","Grisha","Vika"];
var obj=[];
for(var i=0;i<names.length;i++){
	obj.push({
		name:names[(Math.ceil(Math.random()*names.length))-1],
		age:Math.round(Math.random()*70)+1,
		city:cities[(Math.ceil(Math.random()*cities.length))-1],
		man:function(){
		return	console.log(this.name,this.city,this.age);
		}
		
	})
}
obj.sort(function(a,b){
	return b.age-a.age;
})
for(var i=0;i<obj.length;i++){
	obj[i].man();
}


//----------------------------------------Zadanie 2.---------------------------------------------
//------------------------------------------a.------------------------------------------------

var sred=function(...arr){
		var sum=0;
		for (var i = 0; i <arr.length ; i++){
			sum+=1/arr[i];
			}
		return arr.length/sum;
	}
//------------------------------------------b.--------------------------------------------------
var med=function(...arr){
	if (arr.length%2>0) {
		console.log(arr[Math.floor(arr.length/2)]);
		}
	else {
		console.log((arr[arr.length/2]+arr[arr.length/2-1])/2)
		}
}
//------------------------------------------c.--------------------------------------------------
var disp=function(...arr){
	var s=0,s2=0;
	for(var i=0;i<arr.length;i++){
		s+=arr[i];
		s2+=arr[i]*arr[i];
	}
	return s2/arr.length-s/arr.length;

}
//------------------------------------------d.--------------------------------------------------
var simv=function(str){
	var a=[];
	for(var i=0;i<str.length;i++){
		a.push(str.charCodeAt(i));
	}
	return a;
}

//------------------------------------------e.--------------------------------------------------
var pol=function(...k){
	return function(x){
		var s=0;
		for(var i=0;i<k.length;i++){
			s+=k[i]*Math.pow(x,k.length-i-1);
		}
		return s;
	}
}