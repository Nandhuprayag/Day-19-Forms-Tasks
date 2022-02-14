var data=[]

var con=document.createElement('div');
con.setAttribute('class','container')

var row=document.createElement('div');
row.setAttribute('class','row');
con.appendChild(row);

var col=document.createElement('div');
col.setAttribute('class','col-sm-12');
row.appendChild(col);

var boxpart=document.createElement('div');
boxpart.setAttribute('class','box-part');
col.appendChild(boxpart);

var row2=document.createElement('div');
row2.setAttribute('class','row');
boxpart.appendChild(row2)

var box=document.createElement('div')
box.setAttribute('class','col-6');
row2.appendChild(box);

var form=document.createElement('form');
box.appendChild(form);

var label=document.createElement('label');
label.innerText="First Name";
form.appendChild(label);

var space=document.createElement('br');
form.appendChild(space);

var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','value1');
form.appendChild(input);

var space2=document.createElement('br');
form.append(space2);
//Creating the Label 2
var label2=document.createElement('label');
label2.innerHTML='Last Name';
form.appendChild(label2);

//Creating the Space 3 
var space3=document.createElement('br');
form.append(space3);

//Creating the Input 2
var input2=document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('id','value2');
form.appendChild(input2);

//Creating the Address line1
var Address1=document.createElement('label')
Address1.innerHTML='Address Line 1:';
form.appendChild(Address1)

//Creating the space
var s5=document.createElement('br');
form.appendChild(s5);

//Creating the input3
var input3=document.createElement('input')
input3.setAttribute('id','value3');
form.appendChild(input3);

//Creating the Address line2
var Address2=document.createElement('label')
Address2.innerHTML='Address Line 2:';
form.appendChild(Address2)

//Creating the space
var s7=document.createElement('br');
form.appendChild(s7);

//Creating the input4
var input4=document.createElement('input')
input4.setAttribute('id','value4');
form.appendChild(input4);

//Creating the space
var s9=document.createElement('br');
form.appendChild(s9);

//Creating the PIN
var PIN=document.createElement('label')
PIN.innerHTML='PIN:';
form.appendChild(PIN);

//Creating the space
var s9=document.createElement('br');
form.appendChild(s9);

//Creating the input5
var input5=document.createElement('input')
input5.setAttribute('id','value5');
form.appendChild(input5);

//Creating the GENDER
var GENDER=document.createElement('label')
GENDER.innerHTML='Gender:';
form.appendChild(GENDER);

//Creating the space
var s11=document.createElement('br');
form.appendChild(s11);

//Creating the input6
var input6=document.createElement('input');
input6.setAttribute('id','value6');input6.setAttribute('type','radio');
form.append(input6);

//Creating a male Label
var male=document.createElement('label');male.innerHTML='Male';
male.setAttribute('class','radio');male.setAttribute('type','radio');male.setAttribute('id','value6')
form.append(male);

//Creating the input7
var input7=document.createElement('input');
input7.setAttribute('id','value7');input7.setAttribute('type','radio');input7.setAttribute('class','text')
form.append(input7);

//Creating a Female Label
var Female=document.createElement('label');Female.innerHTML='Female';
Female.setAttribute('class','radio');
form.append(Female);

//Creating the Paragraph 
var p=document.createElement('p');
p.innerHTML='Choice of Food: (must choose at least 2 out of 5 options)';
form.append(p)

//Creating the check bOx
var ch1=document.createElement('input');
ch1.setAttribute('id','value8');ch1.setAttribute('type','checkbox');
form.appendChild(ch1)

//Creating SOuthindian label
var f1=document.createElement('label');
f1.setAttribute('class','checkbox');f1.innerHTML='South Indian'
form.append(f1)


//Creating the space
var s12=document.createElement('br');
form.appendChild(s12);

//Creating the check bOx2
var ch2=document.createElement('input');
ch2.setAttribute('id','value9');ch2.setAttribute('type','checkbox');
form.appendChild(ch2)

//Creating Northindian label
var f2=document.createElement('label');
f2.setAttribute('class','checkbox');f2.innerHTML='North Indian'
form.append(f2)

//Creating the space
var s13=document.createElement('br');
form.appendChild(s13);

//Creating the check bOx3
var ch3=document.createElement('input');
ch3.setAttribute('id','value10');ch3.setAttribute('type','checkbox');
form.appendChild(ch3)

//Creating chinese label
var f3=document.createElement('label');
f3.setAttribute('class','checkbox');f3.innerHTML='Chinese'
form.append(f3)

//Creating the space
var s14=document.createElement('br');
form.appendChild(s14);

//Creating the check bOx4
var ch4=document.createElement('input');
ch4.setAttribute('id','value11');ch4.setAttribute('type','checkbox');
form.appendChild(ch4)

//Creating japanese label
var f4=document.createElement('label');
f4.setAttribute('class','checkbox');f4.innerHTML='Japanese'
form.append(f4)

//Creating the space
var s15=document.createElement('br');
form.appendChild(s15);

//Creating the check bOx5
var ch5=document.createElement('input');
ch5.setAttribute('id','value12');ch5.setAttribute('type','checkbox');
form.appendChild(ch5)

//Creating Seafood label
var f5=document.createElement('label');
f5.setAttribute('class','checkbox');f5.innerHTML='Sea Food'
form.append(f5)

//Creating the space
var s16=document.createElement('br');
form.appendChild(s16);

//creating state label
var state=document.createElement('label');
state.innerHTML='State:';
form.append(state);

//Creating the space
var s16=document.createElement('br');
form.appendChild(s16);


//Creating the Input8
var input8=document.createElement('input')
input8.setAttribute('id','value13');input8.setAttribute('class','text');
form.append(input8)

//Creating the space
var s16=document.createElement('br');
form.appendChild(s16);

//Creating the Country label
var Country=document.createElement('label')
Country.innerHTML="Country:";
form.append(Country);

//Creating the space
var s16=document.createElement('br');
form.appendChild(s16);


//Creating the Input9
var Input9=document.createElement('input')
Input9.setAttribute('id','value14');Input9.setAttribute('class','text');
form.append(Input9);
//Creating the Row 3
var row3=document.createElement('div');
row3.setAttribute('class','row');
boxpart.appendChild(row3);
//Creating the Col
var col1=document.createElement('div');
col1.setAttribute('class','col-12');
row3.appendChild(col1);



var button=document.createElement('button');
button.innerHTML="Submit";
button.addEventListener('click',getData);
col1.appendChild(button);



var box2=document.createElement('div');
box2.setAttribute('class','col-6');
row2.appendChild(box2);

var table=document.createElement('table');
table.setAttribute('class','table');
box2.appendChild(table);

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
table.appendChild(thead);

var tr1=document.createElement('tr');
thead.appendChild(tr1)

var th1=createbox('th','First Name')
th1.setAttribute('id','in1')

var th2=createbox('th','Last Name');
var th3=createbox('th','Address')
var th4=createbox('th','Pincode')
var th5=createbox('th','Gender');var th6=createbox('th','Food');
var th7=createbox('th','State');var th8=createbox('th','Country');

tr1.append(th1,th2,th3,th4,th5,th6,th7,th8)








function createbox(elename,value)
{
    var element=document.createElement(elename);
    element.innerText=value;
    return element;
}

function getData()
{
    data.push({'firstName':document.getElementById('value1').value,'lastname':document.getElementById('value2').value,'AddressLine1':document.getElementById('value3').value,'Pin':document.getElementById('value5').value
     ,'gender':document.getElementById('value6').value,'food':document.getElementById('value10').value , 'state':document.getElementById('value13').value,'country':document.getElementById('value14').value})
    console.log(data)

    for(let i=0;i<data.length;i++)
    {
       if(!document.getElementById('f'+i) && !document.getElementById('l'+i) && !document.getElementById('A1'+i) 
       && !document.getElementById('p'+i) && !document.getElementById('g'+i) && !document.getElementById('food'+i) && !document.getElementById('s'+i) && !document.getElementById('c'+i))
       {
        
        var tbody=document.createElement('tbody');
        table.append(tbody)
        
        
        var tr2=document.createElement('tr');
        var td1=document.createElement('td');
        td1.setAttribute('id','f'+i);
        

        var td2=document.createElement('td');
        td2.setAttribute('id','l'+i);

        var td3=document.createElement('td');
        td3.setAttribute('id','A1'+i);

        var td4=document.createElement('td');
        td4.setAttribute('id', 'p'+i);

        var td5=document.createElement('td')
        td5.setAttribute('id','g'+i)
        
       var td6=document.createElement('td');
       td6.setAttribute('id','food'+i);

        var td7=document.createElement('td');
        td7.setAttribute('id','s'+i);

        var td8=document.createElement('td');
        td8.setAttribute('id','c'+i)

        tr2.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.appendChild(tr2);


            document.getElementById('f'+i).innerHTML=data[i].firstName;
            document.getElementById('l'+i).innerHTML=data[i].lastname;
            document.getElementById('A1'+i).innerHTML=data[i].AddressLine1;
            document.getElementById('p'+i).innerHTML=data[i].Pin;
            document.getElementById('g'+i).innerHTML=data[i].gender;
            document.getElementById('food'+i).innerHTML=data[i].food;
            document.getElementById('s'+i).innerHTML=data[i].state
            document.getElementById('c'+i).innerHTML=data[i].country;
        } 
        
    }
}




document.body.append(con)

// var div=document.createElement('div')


// var table=document.createElement('table');
// table.setAttribute('class','table table-dark');
// div.append(table)

// var thead=document.createElement('thead');
// table.append(thead);

// var tr=document.createElement('tr');
// thead.append(tr)

// var th1=createname('th','first name')
// var  th2=createname('th','Lastname')
// tr.append(th1,th2);

// var div2=document.createElement('div');

// var button= document.createElement('button');
// button.innerHTML="Submit";div2.addEventListener('click',foo)
// div2.append(button)


// function foo()
// {
//     var tbody=document.createElement('tbody')
//     table.append(tbody)

//     var tr1=document.createElement('tr')
//     tbody.append(tr1)

// }


// function createname(elename,value){
//     var element=document.createElement(elename)
//     element.innerHTML=value
//     return element
// }


// document.body.append(div,div2)