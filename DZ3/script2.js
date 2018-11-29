var Dom={
	Kvartira:[{
		sqare:44,
		floor:1,
		Chelovek:[{
			name:"Alex",
			age:"Masha"
		}]
	},
	{
		sqare:89,
		floor:1,
		Chelovek:[{
			name:"Petr",
			age:55
		},
		{
			name:"Natasha",
			age:58
		}]
	},
	{
		sqare:130,
		floor:2,
		Chelovek:[{
			name:"Sasha",
			age:44
		}]
	},
	{
		sqare:120,
		floor:2,
		Chelovek:[{
			name:"Jora",
			age:44
		}]
	},
	{
		sqare:110,
		floor:3,
		Chelovek:[{
			name:"Ivan",
			age:42
		},
		{
			name:"Masha",
			age:33,
		}]
	},
	{
		sqare:95,
		floor:3,
		Chelovek:[{
			name:"Lena",
			age:28
		},
		{
			name:"Vania",
			age:12
		}]
	},
	{
		sqare:76,
		floor:3,
		Chelovek:[{
			name:"Pavel",
			age:17
		}]
	}],
	Welcome:function(){
		var n=Number(prompt("Vvedite nomer kvartiri"));
		if(Dom.Kvartira[n-1]<Dom.Kvartira.length){
			alert("nepravinii Nomer kvartiri")
		}
		else Dom.Kvartira[n-1].Chelovek.push({
			name:prompt("Inter name"),
			age:Number(prompt("Inter age"))
		})
	},
	Ivect:function(){
		var n=prompt("Vvedite nomer kvartiri");
		if(Dom.Kvartira[n-1]==undefined){
			alert("nepravinii Nomer kvartiri")
		}
		else{
			var ivectname=prompt("Inter name")
			var back=0;
			Dom.Kvartira[n-1].Chelovek.forEach(function(elem,i){
				if (elem.name==ivectname){
					Dom.Kvartira[n-1].Chelovek.splice(i,1);
					back++;
				}
			})
			if(back==0){
				alert("Net takogo cheloveka");
			}
		}
	},
	IvectAll:function(){
		Dom.Kvartira[prompt("Vvedite nomer kvartiri")-1].Chelovek.length=0;
	},
	Kamynalka:function(){
		//let Dom2=Object.assign({},Dom);
		let Dom2 = JSON.parse(JSON.stringify(Dom));
		let k=0;
		Dom2.Kvartira.forEach(function(elem,i){
			let n=0;
			elem.Chelovek.forEach(function(chel,j){
				if(chel.age<18){
					Dom2.Kvartira[i].Chelovek.splice(j-n,1);
					n++;
				}
			})
			if(elem.Chelovek.length==0){
				Dom2.Kvartira.splice(i-k,1);
				k++;
			}
		})
		let summa=Number(prompt("Vvedite symmy"));
		let allsqare=Dom2.Kvartira.reduce(function(sum,el){
			return sum+el.sqare;
		},0)
		Dom2.Kvartira.forEach(function(elem){
			elem.kamynalka=(summa/allsqare*elem.sqare).toFixed(2);
			elem.Chelovek.forEach(function(chel){
				chel.kamynalka=(elem.kamynalka/elem.Chelovek.length).toFixed(2);
				console.log(chel.name,"k oplate",chel.kamynalka);
			})
		})
		
	}
}
