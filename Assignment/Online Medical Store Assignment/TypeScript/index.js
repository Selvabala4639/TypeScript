"use strict";
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 0;
let OrderIdAutoIncrement = 0;
let selectedMedicine;
// let tableBody = document.querySelector("#medicineTable tbody") as HTMLTableSectionElement;
//Lists
let MedicineList = new Array();
//User Details Class
class UserInfo {
    constructor(paramName, paramEmail, paramPassword, paramPhone) {
        this.UserId = "UID" + (++UserIdAutoIncrement);
        this.UserName = paramName;
        this.UserEmail = paramEmail;
        this.UserPassword = paramPassword;
        this.UserPhone = paramPhone;
        this.UserBalance = 10000000;
    }
}
class OrderInfo {
    constructor(medicineID, userID, medicineName, quantity, orderdate, totalPrice, orderStatus) {
        this.OrderId = "OID" + (++OrderIdAutoIncrement);
        this.MedicineId = medicineID;
        this.UserID = userID;
        this.MedicineName = medicineName;
        this.Quantity = quantity;
        this.OrderDate = orderdate;
        this.TotalPrice = totalPrice;
        this.OrderStatus = orderStatus;
    }
}
let OrderList = [];
let CurrentUser;
//UserList creation
let UserList = [];
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
UserList.push(new UserInfo("Selva", "selva", "selva", "123"));
UserList.push(new UserInfo("Avi", "avi", 'avi', "123"));
//Adding Default data
MedicineList.push(new MedicineInfo("Paracetomol", 10, 50, new Date(2024, 5, 12)));
MedicineList.push(new MedicineInfo("Colpal", 25, 40, new Date(2024, 5, 22)));
function newUserPage() {
    let signup = document.getElementById('signup');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "none";
    signup.style.display = "block";
}
function signUp() {
    let name = document.getElementById("userName");
    let newUserEmail = document.getElementById('newUserEmail').value;
    let newUserPassword = document.getElementById('newUserPassword').value;
    let newUserConfirmPassword = document.getElementById('confirm-password').value;
    let newUserPhone = document.getElementById('newUserPhone').value;
    UserList.push(new UserInfo(newUserEmail, newUserPassword, newUserConfirmPassword, newUserPhone));
    alert("Registration Successful");
    homePage();
}
function existingUserPage() {
    let signinpage = document.getElementById("sign-in");
    let homepage = document.getElementById('homepage');
    let signup = document.getElementById('signup');
    signinpage.style.display = "block";
    homepage.style.display = "none";
    signup.style.display = "none";
}
function loginIn() {
    let existingUserMail = document.getElementById("existing-user-email").value;
    let existingUserPassword = document.getElementById("existing-user-password").value;
    let validUser = false;
    UserList.forEach(user => {
        if (user.UserEmail == existingUserMail && user.UserPassword == existingUserPassword) {
            validUser = true;
            CurrentUser = user;
            welcomePage();
            return false;
        }
    });
    if (!validUser) {
        alert("Ivalid User Name or Passord");
    }
}
function welcomePage() {
    let greet = document.getElementById("greet");
    greet.innerHTML = `Welcome ${CurrentUser.UserName}`;
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "block";
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "none";
}
function homePage() {
    let signup = document.getElementById('signup');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "block";
    signup.style.display = "none";
}
//Show Medicine List
function renderMedicineTable() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUp = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    medicineDetails.style.display = "block";
    purchase.style.display = "none";
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    topUp.style.display = "none";
    showBalance.style.display = "none";
    let medicineDetailsTable = document.getElementById('medicineDetailsTable');
    let tableHTML = "<table border='1'> ";
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
//Purchase Function
function purchase() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUp = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    purchase.style.display = "block";
    medicineDetails.style.display = "none";
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    topUp.style.display = "none";
    showBalance.style.display = "none";
    // let buyTable = (document.getElementById("buyTable") as HTMLDivElement);
    // let buyTableBody="<table border='1'> ";
    // buyTableBody += "<tr><th>Medicine Name</th><th>Price</th><th>Quantity</th><th>Expiry date</th></tr>";
    //  for (let i = 0; i < MedicineList.length; i++) {
    //     if (MedicineList[i].MedicineExpireDate > new Date()) {
    //         buyTableBody += `<tr><td>${MedicineList[i].MedicineName}</td>
    //         <td>${MedicineList[i].MedicinePrice}</td>
    //         <td>${MedicineList[i].MedicineQuantity}</td>
    //         <td>${MedicineList[i].MedicineExpireDate.toLocaleDateString('en-GB')}</td></tr>`;
    //     }
    // }
    // buyTableBody += "</table>";
    // buyTable.innerHTML = buyTableBody;
    let buyTable = document.getElementById("buyTable");
    let buyTableBody = "<table border='1'>";
    buyTableBody += "<tr> <th> Medicine Name </th> <th> Price </th> <th> Medicine Quantity </th> <th> Expire Date </th><th>Option</td> </tr>";
    MedicineList.forEach((medicine) => {
        if (medicine.MedicineExpireDate > new Date()) {
            buyTableBody += `
                <tr><td>${medicine.MedicineName}</td>
                <td>${medicine.MedicinePrice}</td>
                <td>${medicine.MedicineQuantity}</td>
                <td>${medicine.MedicineExpireDate.toLocaleDateString('en-GB')}</td>
                <td><button onclick="ShowbuyMedicine('${medicine.MedicineId}')">Buy</button>
                </tr>
                `;
        }
    });
    buyTableBody += "</table>";
    buyTable.innerHTML = buyTableBody;
}
let ShowbuyMedicine = (id) => {
    let confirmOrder = document.getElementById("confirmOrder");
    confirmOrder.style.display = "block";
    MedicineList.forEach(medicine => {
        if (medicine.MedicineId == id) {
            selectedMedicine = medicine;
        }
    });
    let selectedMedicineName = document.getElementById("selectedMedicineName");
    selectedMedicineName.innerHTML = `You Selected ${selectedMedicine.MedicineName}`;
};
function buyMedicine() {
    let confirmOrder = document.getElementById("confirmOrder");
    confirmOrder.style.display = "block";
    let buyQuantity = document.getElementById("quantity").value;
    if (parseInt(buyQuantity) <= 0) {
        alert("Please enter quantity greater than  0");
        purchase();
        return false;
    }
    else {
        if ((selectedMedicine.MedicineQuantity) < parseInt(buyQuantity)) {
            alert("Out of Stock");
        }
        else {
            let totalPrice = parseInt(buyQuantity) * selectedMedicine.MedicinePrice;
            if (totalPrice > CurrentUser.UserBalance) {
                alert("Insufficient Balance");
            }
            else {
                selectedMedicine.MedicineQuantity -= parseInt(buyQuantity);
                CurrentUser.UserBalance -= totalPrice;
                OrderList.push(new OrderInfo(selectedMedicine.MedicineId, CurrentUser.UserId, selectedMedicine.MedicineName, parseInt(buyQuantity), new Date(), totalPrice, "Ordered"));
                alert("Order Placed");
                purchase();
            }
        }
        confirmOrder.reset();
        return false;
    }
}
function orderHistory() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUp = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    orderHistory.style.display = "block";
    purchase.style.display = "none";
    medicineDetails.style.display = "none";
    cancel.style.display = "none";
    topUp.style.display = "none";
    showBalance.style.display = "none";
    let orderTable = document.getElementById("orderTable");
    orderTable.innerHTML = "";
    OrderList.forEach(order => {
        orderTable.innerHTML += `
        <tr>
            <td>${order.MedicineName}</td>
            <td>${order.Quantity}</td>
            <td>${order.OrderDate.toLocaleDateString()}</td>
            <td>${order.OrderStatus}</td>
        </tr>
        `;
    });
}
function Showcancel() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUp = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    cancel.style.display = "block";
    purchase.style.display = "none";
    medicineDetails.style.display = "none";
    orderHistory.style.display = "none";
    topUp.style.display = "none";
    showBalance.style.display = "none";
    let orderDetails = document.getElementById("cancelTable");
    orderDetails.innerHTML = "";
    OrderList.forEach(order => {
        if (order.UserID == CurrentUser.UserId && order.OrderStatus == "Ordered") {
            orderDetails.innerHTML += `
                    <tr>
                    <td> ${order.MedicineId}</td>
                    <td> ${order.Quantity}</td>
                    <td> ${order.OrderDate.toLocaleDateString()}</td>
                    <td> ${order.OrderStatus}</td>
                    <td> <button onclick = "return cancelOrder('${order.OrderId}')">Cancel </button> </td>
                    </tr>
                    `;
        }
    });
}
let cancelOrder = (id) => {
    OrderList.forEach(order => {
        if (order.OrderId == id) {
            order.OrderStatus = "Cancelled";
            CurrentUser.UserBalance += order.TotalPrice;
            MedicineList.forEach(medicine => {
                if (medicine.MedicineId == order.MedicineId) {
                    medicine.MedicineQuantity += order.Quantity;
                    alert("Successfully Cancelled");
                }
            });
        }
    });
    Showcancel();
};
function topUp() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUpOption = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    topUpOption.style.display = "block";
    purchase.style.display = "none";
    medicineDetails.style.display = "none";
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    showBalance.style.display = "none";
}
let Recharge = () => {
    let amount = document.getElementById("amount").value;
    if (parseInt(amount) <= 0) {
        alert("Recharge amount should be greater than 0");
        topUp();
    }
    else {
        CurrentUser.UserBalance += parseInt(amount);
        alert("Amount added.");
    }
};
function showBalance() {
    let medicineDetails = document.getElementById("medicineDetail");
    let purchase = document.getElementById("purchase");
    let orderHistory = document.getElementById("orderHistory");
    let cancel = document.getElementById("cancel");
    let topUp = document.getElementById("topUp");
    let showBalance = document.getElementById("showBalance");
    showBalance.style.display = "block";
    purchase.style.display = "none";
    medicineDetails.style.display = "none";
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    topUp.style.display = "none";
    // showBalance.innerHTML =`<h2>Available Balance : ${CurrentUser.UserBalance} </h2>
    // ` ;
    let currentBalance = document.getElementById("currentBalance");
    currentBalance.innerHTML = `Available Balance: ${CurrentUser.UserBalance}`;
}
function logOut() {
    let homepage = document.getElementById('homepage');
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "none";
    homepage.style.display = "block";
}
