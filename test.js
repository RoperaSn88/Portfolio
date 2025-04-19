const assessmentButton=document.getElementById("testbutton");
const userNameInput=document.getElementById("userName");
const resultDivided=document.getElementById("resultArea");
const tweetDivided=document.getElementById("tweetArea");

assessmentButton.addEventListener(
    'click',
    ()=>{
        const userNamee=userNameInput.value;
        console.log(userNamee)
        if(userNamee.Length==0){
            return;
        }
        while(resultDivided.firstChild){
            resultDivided.removeChild(resultDivided.firstChild)
        }
        assessment(userNamee);
        const heading=document.createElement('h3')
        heading.innerText="診断結果";
        resultDivided.appendChild(heading);
        const para=document.createElement("p");
        para.innerText="わあああ" + userNamee;
        resultDivided.appendChild(para);
        while(resultDivided.firstChild){
            resultDivided.removeChild(resultDivided.firstChild)
        }
    }
);
/**
*@param {string} userName 
*/
function assessment(userName){
    let sum=0;
    for (let i=0;i<userName.length;i++){
        sum=sum+userName.charCodeAt(i);
        console.log(userName[i]+":"+userName.charCodeAt(i)+",17で割ったあまり："+userName.charCodeAt(i)%17);
    }
    
}