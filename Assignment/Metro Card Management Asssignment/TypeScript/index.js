"use strict";
let UserIdAutoIncrement = 1000;
let TravelIdAutoIncrement = 2000;
let TicketIdAutoIncremen = 3000;
let CurrentUser;
class PersonalDetails {
    constructor(paramUserName, paramUserPhone) {
        this.UserName = paramUserName;
        this.UserPhone = paramUserPhone;
    }
}
class UserInfo extends PersonalDetails {
    constructor(paramUserName, paramUserPhone, paramEmail, paramPassword) {
        super(paramUserName, paramUserPhone);
        this.CardNumber = "CMRL" + (++UserIdAutoIncrement);
        this.UserEmail = paramEmail;
        this.UserPassword = paramPassword;
        this.UserBalance = 100000;
    }
    WalletRecharge(amount) {
        this.UserBalance += amount;
    }
    DeductBalance(amount) {
        this.UserBalance -= amount;
    }
}
class TravelHistory {
    constructor(paramCardNumber, paramFromLocation, paramToLocation, paramTravelDate, paramTravelCost) {
        this.TravelId = "TID" + (++TravelIdAutoIncrement);
        this.CardNumber = paramCardNumber;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TravelDate = paramTravelDate;
        this.TravelCost = paramTravelCost;
    }
}
class TicketFair {
    constructor(paramFrom, paramTo, paramPrice) {
        this.TicketId = "MR" + (++TicketIdAutoIncremen);
        this.FromLocation = paramFrom;
        this.ToLocation = paramTo;
        this.TicketPrice = paramPrice;
    }
}
// Lists
let UserList = [];
let person1 = new PersonalDetails("Selvabala", "9025976622");
UserList.push(new UserInfo(person1.UserName, person1.UserPhone, "selva", "selva"));
UserList.push(new UserInfo("Avi", "9626", "avi", 'avi'));
let TravelList = [];
TravelList.push(new TravelHistory("CMRL1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelList.push(new TravelHistory("CMRL1001", "Alandur", "Alandur", new Date(2023, 10, 10), 55));
let TicketFairList = [];
TicketFairList.push(new TicketFair("Airport", "Egmore", 55));
TicketFairList.push(new TicketFair("Airport", "Koyambedu", 25));
TicketFairList.push(new TicketFair("Alandur", "Alandur", 25));
TicketFairList.push(new TicketFair("Koyambedu", "Egmore", 32));
function homePage() {
    let signUp = document.getElementById('signUp');
    let homepage = document.getElementById('homepage');
    homepage.style.display = "block";
    signUp.style.display = "none";
}
function welcomePage() {
    let greet = document.getElementById("greet");
    greet.innerHTML = `Welcome ${CurrentUser.UserName}`;
    let welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "block";
    let signInpage = document.getElementById("signIn");
    signInpage.style.display = "none";
}
let newUserPage = () => {
    let homepage = document.getElementById("homepage");
    let signUp = document.getElementById("signUp");
    homepage.style.display = "none";
    signUp.style.display = "block";
};
let signUp = () => {
    let homepage = document.getElementById("homepage");
    let signUp = document.getElementById("signUp");
    homepage.style.display = "block";
    signUp.style.display = "none";
    let name = document.getElementById("userName");
    let newUserEmail = document.getElementById('newUserEmail').value;
    let newUserPassword = document.getElementById('newUserPassword').value;
    let newUserConfirmPassword = document.getElementById('confirm-password').value;
    let newUserPhone = document.getElementById('newUserPhone').value;
    if (checkNewUserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone()) {
        UserList.push(new UserInfo(name.value, newUserPhone, newUserEmail, newUserPassword));
        alert("Registration Successful");
        homePage();
    }
    else {
        checkNewUserName();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkPhone();
        alert("Please enter all details");
        newUserPage();
    }
};
let existingUserPage = () => {
    let homepage = document.getElementById("homepage");
    let signIn = document.getElementById("signIn");
    homepage.style.display = "none";
    signIn.style.display = "block";
};
let loginIn = () => {
    let signIn = document.getElementById("signIn");
    signIn.style.display = "none";
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
        homePage();
    }
};
function showBalance() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "block";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
    checkBalance.innerHTML += `Your Balance is ${CurrentUser.UserBalance}`;
}
function showRecharge() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "block";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
}
function Recharge() {
    let rechargeForm = document.getElementById("rechargeForm");
    let amount = document.getElementById("amount").value;
    CurrentUser.WalletRecharge(parseInt(amount));
    rechargeForm.reset();
    alert("Amount added");
    showRecharge();
    return false;
}
function showtravelHistory() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "block";
    travel.style.display = "none";
    exit.style.display = "none";
    let travelBodyTable = document.getElementById("travelBodyTable");
    travelBodyTable.innerHTML = "";
    TravelList.forEach(travel => {
        if (travel.CardNumber == CurrentUser.CardNumber) {
            travelBodyTable.innerHTML +=
                `
                <tr>
                    <td>${travel.TravelId}</td>
                    <td>${travel.CardNumber}</td>
                    <td>${travel.FromLocation}</td>
                    <td>${travel.ToLocation}</td>
                    <td>${travel.TravelDate.toLocaleDateString()}</td>
                    <td>${travel.TravelCost}</td>
                </tr>
                `;
        }
    });
}
function showTravel() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "block";
    exit.style.display = "none";
    let ticketFairTable = document.getElementById("ticketFairTable");
    ticketFairTable.innerHTML = "";
    TicketFairList.forEach(ticket => {
        ticketFairTable.innerHTML +=
            `
        <tr>
        <td>${ticket.TicketId}</td>
        <td>${ticket.FromLocation}</td>
        <td>${ticket.ToLocation}</td>
        <td>${ticket.TicketPrice}</td>
        <td> <button onclick="return Travel('${ticket.TicketId}')"> Buy </button>  </td>
        </tr>
        `;
    });
}
function Travel(id) {
    TicketFairList.forEach(ticket => {
        if (ticket.TicketId == id) {
            if (CurrentUser.UserBalance >= ticket.TicketPrice) {
                TravelList.push(new TravelHistory(CurrentUser.CardNumber, ticket.FromLocation, ticket.ToLocation, new Date(), ticket.TicketPrice));
                CurrentUser.DeductBalance(ticket.TicketPrice);
                alert("Ticket Booked.");
                return false;
            }
            else {
                alert("Insufficinet Balance");
                return false;
            }
        }
    });
}
function showExit() {
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "block";
}
function logOut() {
    let homepage = document.getElementById('homepage');
    let welcomePage = document.getElementById("welcomePage");
    let checkBalance = document.getElementById("checkBalance");
    let recharge = document.getElementById("recharge");
    let viewTravelHistory = document.getElementById("viewTravelHistory");
    let travel = document.getElementById("travel");
    let exit = document.getElementById("exit");
    checkBalance.style.display = "none";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    exit.style.display = "none";
    welcomePage.style.display = "none";
    homepage.style.display = "block";
}
//Validating Inputs for new User Registration
let checkNewUserName = () => {
    let userName = document.getElementById("userName").value;
    let regx_UserName = /^[a-zA-Z]{2,50}$/;
    if (userName == "") {
        document.getElementsByClassName("invalid")[0].style.visibility = "visible";
        document.getElementsByClassName("valid")[0].style.visibility = "hidden";
        return false;
    }
    else {
        if (userName.length > 50) {
            document.getElementsByClassName("userNamelength")[0].style.visibility = "visible";
            document.getElementsByClassName("invalid")[0].style.visibility = "visible";
            document.getElementsByClassName("valid")[0].style.visibility = "hidden";
            return false;
        }
        else {
            if (regx_UserName.test(userName)) {
                document.getElementsByClassName("valid")[0].style.visibility = "visible";
                document.getElementsByClassName("specialChar")[0].style.visibility = "hidden";
                document.getElementsByClassName("userNamelength")[0].style.visibility = "hidden";
                document.getElementsByClassName("invalid")[0].style.visibility = "hidden";
                return true;
            }
            else {
                document.getElementsByClassName("specialChar")[0].style.visibility = "visible";
                document.getElementsByClassName("invalid")[0].style.visibility = "visible";
                document.getElementsByClassName("valid")[0].style.visibility = "hidden";
                return false;
            }
        }
    }
};
function checkEmail() {
    let email = document.getElementById("newUserEmail").value;
    let regx_email = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
    if (email == "") {
        document.getElementsByClassName("invalid")[1].style.visibility = "visible";
        document.getElementsByClassName("valid")[1].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_email.test(email)) {
            document.getElementsByClassName("valid")[1].style.visibility = "visible";
            document.getElementsByClassName("invalid")[1].style.visibility = "hidden";
            return true;
        }
        else {
            document.getElementsByClassName("invalid")[1].style.visibility = "visible";
            document.getElementsByClassName("valid")[1].style.visibility = "hidden";
            return false;
        }
    }
}
let checkPassword = () => {
    let newUserPassword = document.getElementById("newUserPassword").value;
    let regx_newUserPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (newUserPassword == "") {
        document.getElementsByClassName("invalid")[2].style.visibility = "visible";
        document.getElementsByClassName("valid")[2].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_newUserPassword.test(newUserPassword)) {
            document.getElementsByClassName("valid")[2].style.visibility = "visible";
            document.getElementsByClassName("invalid")[2].style.visibility = "hidden";
            return true;
        }
        else {
            document.getElementsByClassName("invalid")[2].style.visibility = "visible";
            document.getElementsByClassName("valid")[2].style.visibility = "hidden";
            return false;
        }
    }
};
let checkConfirmPassword = () => {
    let confirmPassword = document.getElementById("confirm-password").value;
    let newUserPassword = document.getElementById("newUserPassword").value;
    if (confirmPassword == newUserPassword) {
        document.getElementsByClassName("valid")[3].style.visibility = "visible";
        document.getElementsByClassName("invalid")[3].style.visibility = "hidden";
        return true;
    }
    else {
        document.getElementsByClassName("invalid")[3].style.visibility = "visible";
        document.getElementsByClassName("valid")[3].style.visibility = "hidden";
        return false;
    }
};
let checkPhone = () => {
    let newUserPhone = document.getElementById("newUserPhone").value;
    let regx_newUserPhone = /^[0-9]{10,10}$/;
    if (newUserPhone == "") {
        document.getElementsByClassName("invalid")[4].style.visibility = "visible";
        document.getElementsByClassName("valid")[4].style.visibility = "hidden";
        return false;
    }
    else {
        if (regx_newUserPhone.test(newUserPhone)) {
            document.getElementsByClassName("valid")[4].style.visibility = "visible";
            document.getElementsByClassName("invalid")[4].style.visibility = "hidden";
            return true;
        }
        else {
            document.getElementsByClassName("invalid")[4].style.visibility = "visible";
            document.getElementsByClassName("valid")[4].style.visibility = "hidden";
            return false;
        }
    }
};
