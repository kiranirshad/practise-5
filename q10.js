function print() {
    let numb1=parseInt(document.querySelector("#numb1").value);
    let numb2=parseInt(document.querySelector("#numb2").value);
    let numb3=parseInt(document.querySelector("#numb3").value);
    for (let i=numb1; i<=numb2; i=i+numb3) {
        console.log(i);
    }
}