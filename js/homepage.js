function check(){
    var x=document.getElementById("password").value;
    var y=document.getElementById("name").value;
    var z=document.getElementById("email").value;
    var p=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    var length1= x.length
    var msg=document.getElementById("usermsg")
    var msg1=document.getElementById("usermsg1")
    var msg2=document.getElementById("usermsg2")

    if(y=="")
    {
        msg1.innerText="Please input your name!";
        return false
    }else{
        msg1.innerText=""
    }

    if(z==""||p.test(z)==false)
    {
        msg2.innerText="Please input a valid e-mail!";
        return false
    }else{
        msg2.innerText=""
    }
    if(length1<8||x=="")
    {
        msg.innerText="Please input a valid password!";
        return false
    }else{
        msg.innerText=""
    }
}

function checkname(){
    var y=document.getElementById("name").value;
    var msg1=document.getElementById("usermsg1")
    if(y=="")
    {
        msg1.innerText="Please input your name!";
    }else{
        msg1.innerText=""
    }
}

function checkemail(){
    var z=document.getElementById("email").value;
    var msg2=document.getElementById("usermsg2")
    var p=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    if(z==""||p.test(z)==false)
    {
        msg2.innerText="Please input a valid e-mail!";
    }else{
        msg2.innerText=""
    }
}

function checkpassword(){
    var x=document.getElementById("password").value;
    var msg=document.getElementById("usermsg")   
    var length1= x.length
    if(length1<8||x=="")
    {
        msg.innerText="Please input a valid password!";
    }else{
        msg.innerText=""
    }
}

function myStart(){
    var a=document.getElementById("password").value;
    var b=document.getElementById("name").value;
    var c=document.getElementById("email").value;
    if (a=""||b==""||c=="")
    {
        alert("Please login first.");
        return false;
    }
};

