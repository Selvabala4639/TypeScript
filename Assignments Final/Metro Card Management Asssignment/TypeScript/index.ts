let UserIdAutoIncrement =1000;
let TravelIdAutoIncrement = 2000;
let TicketIdAutoIncremen = 3000;
let CurrentUser:UserInfo;

class PersonalDetails{
    UserName: string;
    UserPhone: string;
    constructor(paramUserName: string, paramUserPhone:string){
        this.UserName = paramUserName;
        this.UserPhone = paramUserPhone;
    }
}

interface IBalance{
    UserBalance:number;
    WalletRecharge(amount:number):void;
    DeductBalance(amount:number):void;
}

class UserInfo extends PersonalDetails implements IBalance
{
    CardNumber :string;
    UserEmail: string;
    UserPassword : string;
    UserBalance : number;

    constructor(paramUserName:string, paramUserPhone:string, paramEmail:string, paramPassword:string, )
    {
        super (paramUserName,paramUserPhone);
        this.CardNumber ="CMRL" +(++UserIdAutoIncrement);
        this.UserEmail = paramEmail;
        this.UserPassword = paramPassword;
        this.UserBalance = 100000;
    }

    WalletRecharge(amount: number)
    {
        this.UserBalance+=amount;
    }

    DeductBalance(amount: number): void {
        this.UserBalance-=amount;
    }
}

class TravelHistory{
    TravelId :String;
    CardNumber :String;
    FromLocation :String;
    ToLocation :String;
    TravelDate :Date;
    TravelCost :number;
    constructor(paramCardNumber:string, paramFromLocation: string, paramToLocation:string, paramTravelDate: Date, paramTravelCost:number)
    {
        this.TravelId = "TID" +(++TravelIdAutoIncrement);
        this.CardNumber = paramCardNumber;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TravelDate = paramTravelDate;
        this.TravelCost = paramTravelCost
    }
}

class TicketFair{
    TicketId :string;
    FromLocation: string;
    ToLocation : string;
    TicketPrice : number;
    constructor(paramFrom:string, paramTo :string, paramPrice:number)
    {
        this.TicketId = "MR" +(++TicketIdAutoIncremen);
        this.FromLocation = paramFrom;
        this.ToLocation = paramTo;
        this.TicketPrice = paramPrice;
    }
}

// Lists
let UserList :UserInfo []= [];
let person1 = new PersonalDetails("Selvabala","9025976622");
UserList.push(new UserInfo(person1.UserName,person1.UserPhone,"selva","selva"));
UserList.push(new UserInfo("Avi","9626","avi",'avi'));

let TravelList :TravelHistory [] =[];
TravelList.push(new TravelHistory("CMRL1001", 	"Airport"	,"Egmore",new Date(2023,10,10) ,55))
TravelList.push(new TravelHistory("CMRL1001", 	"Alandur"	,"Alandur",new Date(2023,10,10) ,55))


let TicketFairList :TicketFair [] =[];
TicketFairList.push(new TicketFair("Airport",	"Egmore",	55))
TicketFairList.push(new TicketFair(	"Airport",	"Koyambedu"	,25))
TicketFairList.push(new TicketFair(	"Alandur"	,"Alandur"	,25))
TicketFairList.push(new TicketFair("Koyambedu"	,"Egmore",	32))

function homePage()
{
    let signUp = document.getElementById('signUp') as HTMLDivElement;
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    homepage.style.display="block";
    signUp.style.display="none";
}

function welcomePage()
{
    let greet = document.getElementById("greet") as HTMLDivElement;
    greet.innerHTML= `Welcome ${CurrentUser.UserName}`;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    welcomePage.style.display = "block";
    let signInpage = document.getElementById("signIn") as HTMLDivElement;
    signInpage.style.display="none";
}

let newUserPage = ()=>
{
    let homepage = (document.getElementById("homepage")as HTMLDivElement);
    let signUp  = (document.getElementById("signUp")as HTMLDivElement);
    homepage.style.display= "none";
    signUp.style.display= "block";
}

let signUp = () =>
{
    let homepage = (document.getElementById("homepage")as HTMLDivElement);
    let signUp  = (document.getElementById("signUp")as HTMLDivElement);
    homepage.style.display= "block";
    signUp.style.display= "none";
    let name = document.getElementById("userName") as HTMLInputElement;
    let newUserEmail = (document.getElementById('newUserEmail') as HTMLInputElement).value;
    let newUserPassword = (document.getElementById('newUserPassword') as HTMLInputElement).value;
    let newUserConfirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
    let newUserPhone = (document.getElementById('newUserPhone') as HTMLInputElement).value;

    if(checkNewUserName() && checkEmail() && checkPassword() && checkConfirmPassword() && checkPhone())
    {
        UserList.push(new UserInfo(name.value, newUserPhone, newUserEmail, newUserPassword))
        alert("Registration Successful");
        homePage();
    }
    else
    {
        checkNewUserName();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkPhone();
        alert("Please enter all details");
        newUserPage();
    }
}

let existingUserPage = () =>
{
    let homepage = (document.getElementById("homepage")as HTMLDivElement);
    let signIn  = (document.getElementById("signIn")as HTMLDivElement);
    homepage.style.display= "none";
    signIn.style.display= "block";
}

let loginIn = () =>
{
    let signIn  = (document.getElementById("signIn")as HTMLDivElement);
    signIn.style.display= "none";
    
    let existingUserMail = (document.getElementById("existing-user-email") as HTMLInputElement).value;
    let existingUserPassword = (document.getElementById("existing-user-password") as HTMLInputElement).value;
    let validUser = false;
    UserList.forEach(user => {
        if(user.UserEmail == existingUserMail && user.UserPassword==existingUserPassword)
            {
                validUser = true;
                CurrentUser = user;
                welcomePage();
                return false;
            }
    });
    if(!validUser)
        {
            alert("Ivalid User Name or Passord");
            homePage();
        }
}

function showBalance()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="block";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="none";
    
    checkBalance.innerHTML+= `Your Balance is ${CurrentUser.UserBalance}`;
}

function showRecharge()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="block";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="none";

}

function Recharge()
{
    let rechargeForm = document.getElementById("rechargeForm")as HTMLFormElement;
    let amount = (document.getElementById("amount")as HTMLInputElement).value;
    CurrentUser.WalletRecharge(parseInt(amount));
    rechargeForm.reset();
    alert("Amount added");
    showRecharge();
    return false;
}

function showtravelHistory()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory= (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="block";
    travel.style.display="none";
    exit.style.display="none";

    let travelBodyTable = document.getElementById("travelBodyTable")as HTMLDivElement;
    travelBodyTable.innerHTML="";
    TravelList.forEach(travel =>
        {
            if(travel.CardNumber == CurrentUser.CardNumber)
            {
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
                `
            }
        });
}

function showTravel()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="block";
    exit.style.display="none";
    let ticketFairTable = (document.getElementById("ticketFairTable")as HTMLDivElement);
    ticketFairTable.innerHTML="";
    TicketFairList.forEach(ticket =>{
        ticketFairTable.innerHTML += 
        `
        <tr>
        <td>${ticket.TicketId}</td>
        <td>${ticket.FromLocation}</td>
        <td>${ticket.ToLocation}</td>
        <td>${ticket.TicketPrice}</td>
        <td> <button onclick="return Travel('${ticket.TicketId}')"> Buy </button>  </td>
        </tr>
        `
    });
}

function Travel(id:string)
{
    TicketFairList.forEach(ticket =>
        {
           if(ticket.TicketId==id)
            {
                if(CurrentUser.UserBalance>=ticket.TicketPrice)
                    {
                        TravelList.push(new TravelHistory(CurrentUser.CardNumber,ticket.FromLocation,ticket.ToLocation,new Date(),ticket.TicketPrice));
                        CurrentUser.DeductBalance(ticket.TicketPrice);
                        alert("Ticket Booked.");
                        return false;
                    }
                    else
                    {
                        alert("Insufficinet Balance");
                        return false;
                    }
            } 
            
        });
}

function showExit()
{
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="block";
}



function logOut()
{
    let homepage = document.getElementById('homepage') as HTMLDivElement;
    let welcomePage = document.getElementById("welcomePage") as HTMLDivElement;
    
    let checkBalance = (document.getElementById("checkBalance")as HTMLDivElement);
    let recharge = (document.getElementById("recharge")as HTMLDivElement);
    let viewTravelHistory = (document.getElementById("viewTravelHistory")as HTMLDivElement);
    let travel = (document.getElementById("travel")as HTMLDivElement);
    let exit = (document.getElementById("exit")as HTMLDivElement);

    checkBalance.style.display="none";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display="none";
    exit.style.display="none";
    welcomePage.style.display = "none";
    homepage.style.display="block";
}
//Validating Inputs for new User Registration
let checkNewUserName = () =>{
    let userName = (document.getElementById("userName")as HTMLInputElement).value;
    let  regx_UserName = /^[a-zA-Z]{2,50}$/;
    if(userName=="")
        {
            (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }
        else
        {
            if(userName.length>50)
            {
                (document.getElementsByClassName("userNamelength")[0] as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="hidden";
                return false;
            }
            else
            {
                if(regx_UserName.test(userName))
                {   
                    (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="visible";
                    (document.getElementsByClassName("specialChar")[0]as HTMLSpanElement).style.visibility="hidden";
                    (document.getElementsByClassName("userNamelength")[0] as HTMLLabelElement).style.visibility="hidden";
                    (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="hidden";
                    return true;
                }
                else{
                    (document.getElementsByClassName("specialChar")[0]as HTMLSpanElement).style.visibility="visible";
                    (document.getElementsByClassName("invalid")[0]as HTMLLabelElement).style.visibility="visible";
                    (document.getElementsByClassName("valid")[0]as HTMLLabelElement).style.visibility="hidden";
                    return false;
                }
            }
            
        }
}


function checkEmail()
{
    let email = (document.getElementById("newUserEmail") as HTMLInputElement).value;
    let regx_email = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
    if(email=="")
    {
        (document.getElementsByClassName("invalid")[1]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[1]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_email.test(email))
        {
            (document.getElementsByClassName("valid")[1]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("invalid")[1]as HTMLLabelElement).style.visibility="hidden";
            return true;
        }
        else{
            (document.getElementsByClassName("invalid")[1]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[1]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }
    }
}


let checkPassword = () =>{
    let newUserPassword = (document.getElementById("newUserPassword")as HTMLInputElement).value;
    let regx_newUserPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(newUserPassword=="")
    {
        (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
    else
    {
        if(regx_newUserPassword.test(newUserPassword))
        {
            (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="hidden";
            return true;
        }
        else
        {
            (document.getElementsByClassName("invalid")[2]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[2]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }
    }
}


let checkConfirmPassword = () =>{
    let confirmPassword = (document.getElementById("confirm-password")as HTMLInputElement).value;
    let newUserPassword = (document.getElementById("newUserPassword")as HTMLInputElement).value;
    if(confirmPassword==newUserPassword)
    {
        (document.getElementsByClassName("valid")[3]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("invalid")[3]as HTMLLabelElement).style.visibility="hidden";
        return true;
    }
    else
    {
        (document.getElementsByClassName("invalid")[3]as HTMLLabelElement).style.visibility="visible";
        (document.getElementsByClassName("valid")[3]as HTMLLabelElement).style.visibility="hidden";
        return false;
    }
}

let checkPhone = () =>
{
    let newUserPhone = (document.getElementById("newUserPhone")as HTMLInputElement).value;
    let regx_newUserPhone = /^[0-9]{10,10}$/;
    if(newUserPhone=="")
        {
            (document.getElementsByClassName("invalid")[4]as HTMLLabelElement).style.visibility="visible";
            (document.getElementsByClassName("valid")[4]as HTMLLabelElement).style.visibility="hidden";
            return false;
        }

    else
    {
        if(regx_newUserPhone.test(newUserPhone))
            {
                (document.getElementsByClassName("valid")[4]as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("invalid")[4]as HTMLLabelElement).style.visibility="hidden";
                return true;
            }
            else
            {
                (document.getElementsByClassName("invalid")[4]as HTMLLabelElement).style.visibility="visible";
                (document.getElementsByClassName("valid")[4]as HTMLLabelElement).style.visibility="hidden";
                return false;
            }
    }
}