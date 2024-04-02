const form = document.querySelector("form"),
    nextBtn1 = form.querySelector(".nextBtn1"),
    nextBtn2 = form.querySelector(".nextBtn2"),
    nextBtn3 = form.querySelector(".nextBtn3"),
    nextBtn4 = form.querySelector(".nextBtn4"),
    nextBtn5 = form.querySelector(".nextBtn5"),
    nextBtn6 = form.querySelector(".nextBtn6"),

    backBtn1 = form.querySelector(".backBtn1"),
    backBtn2 = form.querySelector(".backBtn2"),
    backBtn3 = form.querySelector(".backBtn3"),
    backBtn4 = form.querySelector(".backBtn4"),
    backBtn5 = form.querySelector(".backBtn5"),
    backBtn6 = form.querySelector(".backBtn6");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var progress = document.getElementById("progress");
var currentProgress;
var s2;
var s3;
var s4;
var s5;
var s6;

var pTwo = document.getElementById('pTwo');//step 1
var pThree = document.getElementById('pThree');//step 2
var pFour = document.getElementById('pFour');//step 3
var pFive = document.getElementById('pFive');//step 4
var pSix = document.getElementById('pSix');//step 5


//second page
const q1 = document.getElementById("province");
const q2 = document.getElementById("email");
const q3 = document.getElementById("req_Name");
const q4 = document.getElementById("req_Agency_Name");
const q5 = document.getElementById("office_Address");
const q6 = document.getElementById("sex");
const q7 = document.getElementById("official_Email");
const q8 = document.getElementById("mobile_Number");
//third page
const q9 = document.getElementById("cert_Type");
const q10 = document.getElementById("UACS_Code");
const q11 = document.getElementById("agency_Name");
const q12 = document.getElementById("bank_Branches");
const q13 = document.getElementById("NCO_Name");
const q14 = document.getElementById("NCO_Code");
//fourth page
const q15 = document.getElementById("covered_Date1");
const q16 = document.getElementById("covered_Date2");
const q17 = document.getElementById("totalAmount");
const q18 = document.getElementById("dep_Bank");

var provError = document.getElementById('provError');
var emailError = document.getElementById('emailError');
var req_NameError = document.getElementById('req_NameError');
var req_agency_NameError = document.getElementById('req_agency_NameError');
var office_AddressError = document.getElementById('office_AddressError');
var sexError = document.getElementById('sexError');
var official_emailError = document.getElementById('official_emailError');
var mobile_numError = document.getElementById('mobile_numError');

var cert_TypeError = document.getElementById('cert_TypeError');
var UACS_CodeError = document.getElementById('UACS_CodeError');
var agency_NameError = document.getElementById('agency_NameError');
var bank_BranchesError = document.getElementById('bank_BranchesError');
var NCO_NameError = document.getElementById('NCO_NameError');
var NCO_CodeError = document.getElementById('NCO_CodeError');

var dateError = document.getElementById('dateError');
var depositoryError = document.getElementById('depositoryError');
var gfError = document.getElementById('gfError');
var sagfError = document.getElementById('sagfError');
var tfError = document.getElementById('tfError');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setMinDateForDate2() {
    var fromDate = document.getElementById('covered_Date1').value;
    document.getElementById('covered_Date2').min = fromDate;
}

window.addEventListener("load",()=>{
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");
    const fileNamesSpan = document.getElementById("val21"); // Add this line

    input.addEventListener("change",(e)=>{
        let fileName = e.target.files[0].name;
        let filetype = e.target.value.split(".").pop();
        fileshow(fileName, filetype);
        
        // Collect all file names and types
        let allFileNames = Array.from(input.files).map(file => file.name).join(", ");
        let allFileTypes = Array.from(input.files).map(file => file.name.split(".").pop()).join(", ");

        // Set the collected file names and types to the target span
        fileNamesSpan.innerHTML = `File Names: ${allFileNames} <br> File Types: ${allFileTypes}`;
    })

    const fileshow=(fileName, filetype) => {
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML=filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML=fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click",()=>{
            filewrapper.removeChild(showfileboxElem);
            updateFileNamesSpan(input);  // Update the span when a file is removed

        })
    }
    const updateFileNamesSpan = (input) => {
        // Collect all file names and types
        let allFileNames = Array.from(input.files).map(file => file.name).join(", ");
        let allFileTypes = Array.from(input.files).map(file => file.name.split(".").pop()).join(", ");

        // Set the collected file names and types to the target span
        fileNamesSpan.innerHTML = `File Names: ${allFileNames} <br> File Types: ${allFileTypes}`;
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function calculateSum(){
    var add1 = parseFloat(document.getElementById('gf_amount').value) || 0;
    var add2 = parseFloat(document.getElementById('sagf_amount').value) || 0;
    var add3 = parseFloat(document.getElementById('tf_amount').value) || 0;

    var r1 = document.getElementById('gf_num');
    var r2 = document.getElementById('sagf_other');
    var r31 = document.getElementById('tf_num1');
    var r32 = document.getElementById('tf_num2');

    var sum = add1 + add2 + add3;

    document.getElementById('totalAmount').value = sum;

    if(r1.checked){
        if(add1 == 0){
            document.getElementById('gf_amount').style.borderColor = incorrectColor;
            gfError.innerHTML = 'Please fill an amount';
            gfbg.style.borderColor = orange;
            return false;
        }else{
            document.getElementById('gf_amount').style.borderColor = correctColor;
            document.getElementById('amnt1').innerHTML = add1;
            gfbg.style.borderColor = correctColor;
            gfError.innerHTML = '';
        }
    }
    if(r2.checked){
        if(add2 == 0){
            document.getElementById('sagf_amount').style.borderColor = incorrectColor;
            sagfError.innerHTML = 'Please fill an amount';
            sagfbg.style.borderColor = orange;
            return false;
        }else{
            document.getElementById('sagf_amount').style.borderColor = correctColor;
            sagfError.innerHTML = '';
            sagfbg.style.borderColor = correctColor;
            document.getElementById('amnt2').innerHTML = add2;
        }
    }
    if(r31.checked || r32.checked){
        if(add3 == 0){
            document.getElementById('tf_amount').style.borderColor = incorrectColor;
            tfError.innerHTML = 'Please fill an amount';
            tfbg.style.borderColor = orange;
            return false;
        }else{
            document.getElementById('tf_amount').style.borderColor = correctColor;
            tfError.innerHTML = '';
            tfbg.style.borderColor = correctColor;
            document.getElementById('amnt3').innerHTML = add3;
        }
    }
    return true;
}

// function onFunctions() {
//     var checkBox = document.getElementById("agreement");
//     var steps = document.getElementById("stepView");

//     if (checkBox.checked === true){
//       nextBtn1.style.display = "flex";
//       steps.style.opacity = '1';
//       s2 = true;
//     } else {
//       nextBtn1.style.display = "none";
//       steps.style.opacity = '0';
//       s2 = false;
//     }
    
// }



function getValue() {
    document.getElementById("val1").innerHTML = q1.value;
    document.getElementById("val2").innerHTML = q2.value;
    document.getElementById("val3").innerHTML = q3.value;
    document.getElementById("val4").innerHTML = q4.value;
    document.getElementById("val5").innerHTML = q5.value;
    document.getElementById("val6").innerHTML = q6.value;
    document.getElementById("val7").innerHTML = q7.value;
    document.getElementById("val8").innerHTML = q8.value;
    document.getElementById("val9").innerHTML = q9.value;
    document.getElementById("val10").innerHTML = q10.value;
    document.getElementById("val11").innerHTML = q11.value;
    document.getElementById("val12").innerHTML = q12.value;
    document.getElementById("val13").innerHTML = q13.value;
    document.getElementById("val14").innerHTML = q14.value;
    document.getElementById("val15").innerHTML = q15.value + "     to     " + q16.value;
    document.getElementById("val16").innerHTML = q17.value;
    document.getElementById("val17").innerHTML = q18.value;
    
    const q19 = document.querySelector('input[name="generalFunds"]:checked');
    const q20 = document.querySelector('input[name="sagFunds"]:checked');
    const q21 = document.querySelector('input[name="trustFunds"]:checked');
    

    if (q19) {
        document.getElementById("val18").innerHTML = q19.value;
    } 
    if (q20) {
        if(q20.value==="Not Applicable"){
            document.getElementById("val19").innerHTML = q20.value;
        }else{
            document.getElementById("val19").innerHTML = document.getElementById("sagf_otherFill").value;
        }
    }
    if (q21) {
        document.getElementById("val20").innerHTML = q21.value;
    } 
}

nextBtn1.addEventListener("click", ()=> {
    form.classList.add('secActive');
    progress.style.maxWidth = "calc((60vw/6)*2)";

});
nextBtn2.addEventListener("click", ()=> {
    
    form.classList.add('thirdActive');
    progress.style.maxWidth = "calc((60vw/6)*3)";
    s2 = true;
})
backBtn1.addEventListener("click", () => { form.classList.remove('secActive');  progress.style.maxWidth = "calc((60vw/6)*1)";});

nextBtn3.addEventListener("click", ()=> {
    
    form.classList.add('fourthActive');
    progress.style.maxWidth = "calc((60vw/6)*4)";
    s3 = true;
})

backBtn2.addEventListener("click", () => { form.classList.remove('thirdActive'); 
progress.style.maxWidth = "calc((60vw/6)*2)";});

nextBtn4.addEventListener("click", ()=> {
    
    form.classList.add('fifthActive');
    progress.style.maxWidth = "calc((60vw/6)*5)";
    s4 = true;
    
})
backBtn3.addEventListener("click", () => { form.classList.remove('fourthActive'); 
progress.style.maxWidth = "calc((60vw/6)*3)";});

nextBtn5.addEventListener("click", ()=> {
    form.classList.add('sixthActive');
    progress.style.maxWidth = "calc((60vw/6)*6)";
    s5 = true;
    s6 = true;
    
})
backBtn4.addEventListener("click", () => { form.classList.remove('fifthActive'); 
progress.style.maxWidth = "calc((60vw/6)*4)";});

backBtn5.addEventListener("click", () => { form.classList.remove('sixthActive'); 
progress.style.maxWidth = "calc((60vw/6)*5)";});

pTwo.addEventListener("click", ()=>{
    if(s2){
        form.classList.add('secActive');
        form.classList.remove('thirdActive');
        form.classList.remove('fourthActive');
        form.classList.remove('fifthActive');
        form.classList.remove('sixthActive');
        progress.style.maxWidth = "calc((60vw/6)*2)";
    }
});
pThree.addEventListener("click", ()=>{
    if(s3){
        form.classList.add('secActive');
        form.classList.add('thirdActive');
        form.classList.remove('fourthActive');
        form.classList.remove('fifthActive');
        form.classList.remove('sixthActive');
        progress.style.maxWidth = "calc((60vw/6)*3)";
    }
});
pFour.addEventListener("click", ()=>{
    if(s4){
        form.classList.add('secActive');
        form.classList.add('thirdActive');
        form.classList.add('fourthActive');
        form.classList.remove('fifthActive');
        form.classList.remove('sixthActive');
        progress.style.maxWidth = "calc((60vw/6)*4)";
    }
});
pFive.addEventListener("click", ()=>{
    if(s5){
        form.classList.add('secActive');
        form.classList.add('thirdActive');
        form.classList.add('fourthActive');
        form.classList.add('fifthActive');
        form.classList.remove('sixthActive');
        progress.style.maxWidth = "calc((60vw/6)*5)";
    }
});
pSix.addEventListener("click", ()=>{
    if(s6){
        form.classList.add('secActive');
        form.classList.add('thirdActive');
        form.classList.add('fourthActive');
        form.classList.add('fifthActive');
        form.classList.add('sixthActive');
        progress.style.maxWidth = "calc((60vw/6)*6)";
    }
});

