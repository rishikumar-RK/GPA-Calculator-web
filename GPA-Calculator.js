function result(){
	var i;
	var totalGrade=0;
	var totalCredit=0;
	var res=0;
	var cre=new Array();
	var gra=new Array();
	try{
		for(i=1;i<=9;i++){
			cre[i]=document.getElementById("credit"+i).value;
			gra[i]=document.getElementById("grade"+i).value;
			if(cre[i]>0 && gra[i]==0){
				throw new Error("Enter the grade for Subject"+i);
			}
			else if(cre[i]==0 && gra[i]>0){
				throw new Error("Enter the credit for Subject"+i);
			}
			else{
				totalGrade+=cre[i]*gra[i];
				totalCredit+=cre[i]*1;
			}
		}
		res=totalGrade/totalCredit;
		document.getElementById("result").innerHTML=res.toFixed(2);
	}
	catch(e){
		alert(e.message);
	}
}