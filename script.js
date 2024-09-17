const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const massege = document.getElementById('result');

button.addEventListener("click", () =>{
    const result = [...input.value.replace(/[^a-zA-Z0-9]/g, "")].reverse().join("").toLocaleLowerCase();
    const result1 = [...input.value.replace(/[^a-zA-Z0-9]/g, "")].join("").toLocaleLowerCase();
    
    if(input.value === ""){
        alert("Please input a value");
        return;
    }
    
    if(result == result1){
        console.log("true")
        massege.innerText = `(${input.value}) is a palindrome`
    }else{
        console.log(false)
        massege.innerText = `(${input.value}) is not a palindrome`
    }
})