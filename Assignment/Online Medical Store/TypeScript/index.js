"use strict";
let MedicineIdAutoIncrement = 10;
// let tableBody = document.querySelector("#medicineTable tbody") as HTMLTableSectionElement;
//Lists
let MedicineList = new Array();
class User {
    constructor(paramUserEmail, paramUserPassword, paramUserConfirmPassword, paramUserPhone) {
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserConfirmPassword = paramUserConfirmPassword;
        this.UserPhone = paramUserPhone;
    }
}
class MedicineInfo {
    constructor(paramMedicineName, paramMedicinePrice, paramMedicineQuantity, paramMedicineExpireDate) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.MedicinePrice = paramMedicinePrice;
        this.MedicineQuantity = paramMedicineQuantity;
        this.MedicineExpireDate = paramMedicineExpireDate;
    }
}
//Adding Default data
MedicineList.push(new MedicineInfo("Paracetomol", 10, 50, new Date(2024, 5, 12)));
MedicineList.push(new MedicineInfo("Colpal", 25, 100, new Date(2024, 5, 22)));
//Show Medicine List
function renderMedicineTable() {
    let medicineDetailsTable = document.getElementById('medicineDetailsTable');
    let tableHTML = "<h3>Medicine Details</h3>";
    tableHTML += "<table border='1'> ";
    tableHTML += "<tr><th>Medicine Name</th><th>Price</th><th>Quantity</th><th>Expiry date</th></tr>";
    for (let i = 0; i < MedicineList.length; i++) {
        if (MedicineList[i].MedicineExpireDate > new Date()) {
            tableHTML += `<tr><td>${MedicineList[i].MedicineName}</td>
            <td>${MedicineList[i].MedicinePrice}</td>
            <td>${MedicineList[i].MedicineQuantity}</td>
            <td>${MedicineList[i].MedicineExpireDate.toLocaleDateString('en-GB')}</td></tr>`;
        }
    }
    tableHTML += "</table>";
    medicineDetailsTable.innerHTML = tableHTML;
}
let UserArrayList = new Array;
function newUserPage() {
    let homepage = document.getElementById('homepage');
    let newUserPage = document.getElementById('newUserPage');
    homepage.style.display = "none";
    newUserPage.style.display = "block";
}
function SignUp() {
    let newUserEmail = document.getElementById('newUserEmail').value;
    let newUserPassword = document.getElementById('newUserPassword').value;
    let newUserConfirmPassword = document.getElementById('confirm-password').value;
    let newUserPhone = document.getElementById('newUserPhone').value;
    UserArrayList.push(new User(newUserEmail, newUserPassword, newUserConfirmPassword, +newUserPhone));
}
