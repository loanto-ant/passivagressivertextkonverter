function convert(){
    let output=document.getElementById("output");
    let input=document.getElementById("input").value
    output.innerText="";
    let txt=input;
    txt=txt.toLowerCase();

    let buchstaben=txt.split("");
    
    buchstaben.forEach((element,index) => {
        let random=Math.random();
        if(random>0.5){
            buchstaben[index]=element.toUpperCase()
        }
        output.innerText+=buchstaben[index];
    });
}
function copy(){
    const copyText=document.getElementById("output").innerText;
    navigator.clipboard.writeText(copyText);
}