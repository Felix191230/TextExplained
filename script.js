async function explainText(){

const text=document.getElementById("inputText").value;

if(text.trim()===""){
document.getElementById("result").innerText="Please paste some text first.";
return;
}

document.getElementById("result").innerText="Explaining...";

const response=await fetch("/api/explain",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
text:text
})
});

const data=await response.json();

document.getElementById("result").innerText=data.result;

}
