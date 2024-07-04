

function ComputeBMI(){

    let Height = document.querySelector("#Height").value;

    let Weight = document.querySelector("#Weight").value;
    console.log(Height);

    let result = document.querySelector("#result")
    if (Height === "" || isNaN(Height)) result.innerHTML = "Provide a valid Height!";
    else if (Weight === "" || isNaN(Weight)) result.innerHTML = "Provide a valid Weight!";
 
    else{
        let BMI = (Weight / (Height * Height) )
        
        
        if (BMI < 18.6) result.innerHTML =
        `Under Weight : <span>${BMI}</span>`;

    else if (BMI >= 18.6 && BMI < 24.9) 
        result.innerHTML = 
            `Normal : <span>${BMI}</span>`;

    else result.innerHTML =
        `Over Weight : <span>${BMI}</span>`;
    }
        
}