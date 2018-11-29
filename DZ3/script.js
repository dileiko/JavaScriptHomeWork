var Byhgalteria={
	rabotnik:[{
		name:"Alex",
		age:33,
		department:"pervichka",
		salary:33,
		experience:3,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Maria",
		age:56,
		department:"glavbyh",
		salary:70,
		experience:10,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Petr",
		age:36,
		department:"pervichka",
		salary:23,
		experience:4,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Sergey",
		age:26,
		department:"investicii",
		salary:45,
		experience:6,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Nastia",
		age:30,
		department:"investicii",
		salary:26,
		experience:4,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Lena",
		age:23,
		department:"pervichka",
		salary:19,
		experience:2,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Sasha",
		age:23,
		department:"pervichka",
		salary:17,
		experience:1,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Vladimir",
		age:30,
		department:"glavbyh",
		salary:120,
		experience:11,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		

	},
	{
		name:"Oleg",
		age:37,
		department:"investicii",
		salary:45,
		experience:7,
		Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}
		
//-------------------------a.-------------------
	}],
	//vziat' na raboty
	TohireMan:function(){
		Byhgalteria.rabotnik.push({name:prompt("enter name"),age:Number(prompt("enter age")),department:prompt("enter departaemt"),salary:Number(prompt("enter salary")),experience:Number(prompt("enter experience")),Print:function(){
			console.log("Name:",this.name,",","age:",this.age,",","department:", this.department,",","salary:", this.salary,",","experience:", this.experience);
		}});
	},
	//yvolit'
	Dismiss:function(){
		var miss=prompt("who is brainwashed?");
		Byhgalteria.rabotnik.forEach(function(item,i,arr){
			if(Byhgalteria.rabotnik[i].name==miss){
				Byhgalteria.rabotnik.splice(i,1);
			}
		})
	},
//-------------------------b.---------------------
	Maxsolary:function(){
		Byhgalteria.rabotnik.sort(function(a,b){
			return a.salary-b.salary
		})
		Byhgalteria.rabotnik.forEach(function(rab){
			console.log(rab.name,rab.salary);
		})
		var summ=Byhgalteria.rabotnik.reduce(function(summ,arr){
			return summ+arr.salary;
		},0)
		console.log("Salary amount",summ);
	},
//--------------------------c.----------------------------
	MinMaxSr:function(){
		Byhgalteria.rabotnik.sort(function(a,b){
			return a.salary-b.salary
		})
		var summ=Byhgalteria.rabotnik.reduce(function(summ,arr){
			return summ+arr.salary;
		},0)
		console.log("Minimum",Byhgalteria.rabotnik[0].name,Byhgalteria.rabotnik[0].salary);
		console.log("Maximum",Byhgalteria.rabotnik[(Byhgalteria.rabotnik.length-1)].name,Byhgalteria.rabotnik[(Byhgalteria.rabotnik.length-1)].salary);
		console.log("Srednee",(summ/Byhgalteria.rabotnik.length).toFixed(2));
	},
//------------------------d.-------------------------------
	DepartaemtProp:function(){
		var dep=[Byhgalteria.rabotnik[0].department];
		Byhgalteria.rabotnik.forEach(function(item){
			if(dep.indexOf(item.department)>=0)
			return
			else dep.push(item.department);
			
		})
		dep.forEach(function(elem){
			var rabdep=Byhgalteria.rabotnik.filter(function(elem2){
				return elem2.department==elem;
			})
			console.log(elem.toUpperCase());
			var summ=rabdep.reduce(function(a,b){
				return a+b.salary
			},0)
			var summage=rabdep.reduce(function(a,b){
				return a+b.age
			},0)
			rabdep.sort(function(a,b){
				return a.experience-b.experience
			})
			console.log("Symmarnaiy zarplata",summ);
			console.log("Sredniaja zarplata",(summ/rabdep.length).toFixed(2));
			console.log("Sotrydnikov",rabdep.length);
			console.log("Sredniy vozrast",(summage/(rabdep.length)).toFixed(2));
			console.log("Samyi opitniy");
			console.log(rabdep[rabdep.length-1].Print());
			})
		
	}

}


