function Done()
{
    clear();

    /*if ((document.getElementById("name").value == "")
     || (document.getElementById("salary").value == "")
     || (document.getElementById("month").value == ""))*/
    if (document.getElementById("name").value == "")
    {
        var name = 1
        alertError(name);
    }
    else if(document.getElementById("salary").value == "")
    {
        var salary = 2
        alertError(salary);

    }
    else if((document.getElementById("month").value == "")
        ||(document.getElementById("month").value < 1)
        ||(document.getElementById("month").value > 12))
    {
        var month = 3
        alertError(month);
    }
    else
    {
        var salary = document.getElementById("salary").value
        var month = document.getElementById("month").value
        var vacation = 'no';

        if(document.getElementById("vacation").checked == 1)
        {
            vacation = 'yes';
        }

        var bonus = parseFloat(calcBonus(salary,month,vacation).toFixed(2));

        var total = parseFloat(calcTotal(salary,month,bonus).toFixed(2));

        document.getElementById("bonus").value = bonus;
        document.getElementById("total").value = total;

        alertOk();

    }

}

function alertError(msg)
{
    if(msg == 1)
    {
        alert('Invalid name!');
        /*document.getElementById("name").style.backgroundColor = "red";*/
        document.getElementById("name").className = "alert";
        document.getElementById("name").focus();
        return false;
    }
    else if(msg == 2)
    {
        alert('Invalid Salary!');
        /*document.getElementById("name").style.backgroundColor = "red";*/
        document.getElementById("salary").className = "alert";
        document.getElementById("salary").focus();
        return false;
    }
    else if(msg == 3)
    {
        alert('Invalid Month!');
        /*document.getElementById("name").style.backgroundColor = "red";*/
        document.getElementById("month").className = "alert";
        document.getElementById("month").focus();
        return false;
    }
}

function alertOk()
{
    alert('Hello' + ' ' + document.getElementById("name").value + ' Finished!');
    /*document.getElementById("name").style.backgroundcolor = "transparent";*/
    return true;
}

function clear()
{
    document.getElementById("name").className =     document.getElementById("name").className.replace( /(?:^|\s)alert(?!\S)/g , '' );
    document.getElementById("salary").className =     document.getElementById("salary").className.replace( /(?:^|\s)alert(?!\S)/g , '' );
    document.getElementById("month").className =     document.getElementById("month").className.replace( /(?:^|\s)alert(?!\S)/g , '' );
}

function calcBonus(salary,month,vacation)
{
    var bonus = 0;

    if(vacation == 'yes')
    {
        bonus = ((salary * (month - 1) ) * 0.275);
    }

    if(vacation == 'no')
    {
        bonus = ((salary * month) * 0.275);
    }
    return bonus;
}

function calcTotal(salary,month,bonus)
{
    return ((salary * month) + bonus);
}