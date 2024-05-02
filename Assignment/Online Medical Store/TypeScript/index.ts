


let MedicineIdAutoIncrement = 10;

// let tableBody = document.querySelector("#medicineTable tbody") as HTMLTableSectionElement;
//Lists
let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();
class User{
    UserEmail:string;
    UserPassword:string;
    UserConfirmPassword:string;
    UserPhone:number;
    
    constructor(paramUserEmail:string, paramUserPassword:string, paramUserConfirmPassword:string, paramUserPhone:number){
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserConfirmPassword = paramUserConfirmPassword;
        this.UserPhone = paramUserPhone;
    }
}



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

//Show Medicine List

function renderMedicineTable(){
     let medicineDetailsTable = document.getElementById('medicineDetailsTable') as HTMLDivElement;
     let tableHTML = "<h3>Medicine Details</h3>"
     tableHTML+="<table border='1'> ";
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

let UserArrayList : Array<User> = new Array<User>;

function newUserPage()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    homepage.style.display="none";
    newUserPage.style.display="block";
}

function SignUp()
{
    let newUserEmail = (document.getElementById('newUserEmail') as HTMLInputElement).value;
    let newUserPassword = (document.getElementById('newUserPassword') as HTMLInputElement).value;
    let newUserConfirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
    let newUserPhone = (document.getElementById('newUserPhone') as HTMLInputElement).value;

    UserArrayList.push(new User(newUserEmail, newUserPassword, newUserConfirmPassword, +newUserPhone))
}