//--------------1--------------//
function thrbigger (num1, num2 )
{
 if (num1<num2)
 {
   console.log("the small value is", num1);
 }
 else
  console.log("the small value is", num2);
}

thrbigger(7,8);

//--------------2--------------//

function longthan3(str1,str2, str3,str4)
{
  var count=0;
  if (str1.length>3)
  {
    count++;
  }
  if (str2.length>3)
  {
    count++;
  }
  if (str3.length>3)
  {
    count++;
  }
  if (str4.length>3)
  {
    count++;
  }
  console.log(count+" words lenght more than ");
}
longthan3("Hello","Hi","Shallom","Marhba")
//--------------3--------------//
function myFunction() {
    var x = document.getElementById("myText").value;
    var flag=0;
    flag=x.indexOf("a");
   if(flag!=0)
   {
    var z= x.replace("a","A");
    document.getElementById("demo").innerHTML = z;
   }
    else
    document.getElementById("demo").innerHTML = x;
  }
//--------------4--------------//
function number(value)
{
  console.log("the number "+ value +" is ")
if (value>0)
{
  console.log("Positive");
}
else
{
  console.log("negative");
}
console.log("and");
if (value%2==0)
{
  console.log("Even");
}
else
{
  console.log("Odd");
}

}

number(8);

//--------------5--------------//
 
function sameLetter(word)
{
  var firstletter= word.charAt(1);
  var lastletter= word.charAt(word.length-1);
  if (firstletter=lastletter)
  {
    console.log(word.slice(1,word.length-1));
  }
  else
  {
    console.log(word);
  }


}
console.log("the new word is :");
sameLetter("adffa");
//--------------6--------------//
  function strcon(str)
  {
    var flag=-2;
    var newstr;
    flag=str.indexOf("*");
    newstr = str;
    while(flag!=-1)
    {
      newstr = newstr.slice(0,flag)+newstr.slice(flag+1,newstr.length);
      flag=newstr.indexOf("*");
    }
   
    console.log(newstr);
    // @
    
    var index1=0;
    index1=str.indexOf("@");
    if (index1!=0)
    {
     newstr="*"+str+"*";
     console.log(newstr);
    }
    // NIS

var index2=0;
index2=str.indexOf("₪")
if (index2!=0)
{

  console.log(" new shekel ");
}
else
{
  console.log(newstr);

}
    
  }
strcon("abca*bc")
 
  