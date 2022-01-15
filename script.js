let aks=document.getElementById("displays"); 
var aksh=document.getElementById("results");

function calk(values)
{ 
aks.value+=values;
}



function equals()
{
let ak=aks.value;
try
{
let ans=eval(ak);
aksh.value=ans;
}
catch(err)
{
alert('akshay says. "'+ak+'" Is Invalid, Please Try Again...');
} 
}

function deleteDis() {
aks.value=aks.value.slice(0,-1);

}
function clearDis()
{
aks.value="";
aksh.value="";
}
