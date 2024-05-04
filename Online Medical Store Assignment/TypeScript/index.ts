
let UserIdAutoIncrement =1000;
let MedicineIdAutoIncrement = 0;



// let tableBody = document.querySelector("#medicineTable tbody") as HTMLTableSectionElement;
//Lists
let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

//User Details Class
class UserInfo{
    UserId :string;
    UserName :string;
    UserEmail: string;
    UserPassword : string;
    UserPhone: string;
    UserBalance : number;

    constructor(paramName: string,  paramEmail:string, paramPassword:string, paramPhone:string)
    {
        this.UserId ="UID" +(++UserIdAutoIncrement);
        this.UserName =paramName;
        this.UserEmail = paramEmail;
        this.UserPassword = paramPassword;
        this.UserPhone = paramPhone;
        this.UserBalance = 0;
    }
}

//UserList creation
let UserList :UserInfo []= [];
UserList.push(new UserInfo("Selva","selva","selva","123"));
UserList.push(new UserInfo("avi","avi",'avi',"123"));

class MedicineInfo{
    MedicineId: string;
    MedicineName: string;
    MedicinePrice: number;
    MedicineQuantity: number;
    MedicineExpireDate: Date;
    constructor(paramMedicineName:string, paramMedicinePrice:number, paramMedicineQuantity:number,
        paramMedicineExpireDate:Date)
    {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.MedicinePrice = paramMedicinePrice;
        this.MedicineQuantity = paramMedicineQuantity;
        this.MedicineExpireDate = paramMedicineExpireDate;
    }
}
//Adding Default data
MedicineList.push(new MedicineInfo("Paracetomol", 10,50, new Date(2024,5,12)));
MedicineList.push(new MedicineInfo("Colpal", 25,100, new Date(2024,5,22)));




function newUserPage()
{
    let signup = document.getElementById('signup') as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;

    homepage.style.display="none";
    signup.style.display="block";

}

function signUp()
{
    let name = document.getElementById("userName") as HTMLInputElement;
    let newUserEmail = (document.getElementById('newUserEmail') as HTMLInputElement).value;
    let newUserPassword = (document.getElementById('newUserPassword') as HTMLInputElement).value;
    let newUserConfirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
    let newUserPhone = (document.getElementById('newUserPhone') as HTMLInputElement).value;

    UserList.push(new UserInfo(newUserEmail, newUserPassword, newUserConfirmPassword, newUserPhone))
    alert("Registration Successful");
    homePage();
}

function existingUserPage()
{
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let signup = document.getElementById('signup') as HTMLDivElement;

    signinpage.style.display="block";
    homepage.style.display="none";
    signup.style.display="none";
}

function loginIn()
{
    welcomePage();
}

function welcomePage()
{
    
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "block";
    let signinpage = document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";

}

function homePage()
{
    let signup = document.getElementById('signup') as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    homepage.style.display="block";
    signup.style.display="none";
}

//Show Medicine List

function renderMedicineTable(){
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    medicineDetails.style.display="block";
    purchase.style.display = "none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";


     let medicineDetailsTable = document.getElementById('medicineDetailsTable') as HTMLDivElement;
     let tableHTML="<table border='1'> ";
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
function purchase()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    purchase.style.display = "block";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";
}

function orderHistory()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    orderHistory.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";
}
function cancel()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    cancel.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    topUp.style.display="none";
    showBalance.style.display="none";
}
function topUp()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    topUp.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    showBalance.style.display="none";
}
function showBalance()
{
    let medicineDetails = document.getElementById("medicineDetail") as HTMLDivElement;
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    let orderHistory = document.getElementById("orderHistory") as HTMLDivElement;
    let cancel = document.getElementById("cancel") as HTMLDivElement;
    let topUp = document.getElementById("topUp") as HTMLDivElement;
    let showBalance = document.getElementById("showBalance") as HTMLDivElement;
    showBalance.style.display="block";
    purchase.style.display = "none";
    medicineDetails.style.display="none";
    orderHistory.style.display="none";
    cancel.style.display="none";
    topUp.style.display="none";
    
}

function logOut()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "none";
    homepage.style.display="block";
}