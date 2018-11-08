const ab=new XMLHttpRequest;
ab.open("GET","data.txt",true);
ab.onload=function(str){
	let a=this.responseText.split(' ');
	console.log(a);
}
