var upperLimit,lowerLimit,i,text="";
function evennumbers()
{
    upperLimit=parseInt(document.getElementById('upper').value);
    lowerLimit=parseInt(document.getElementById('lower').value);
    if(upperLimit>lowerLimit)
    {
        for ( i = upperLimit; i >lowerLimit ; i--)
        { 
           if(i%2==0)
           {
               //console.log("even number is"+i);
               text += "The even number is " + i+ "\n";
               
               
               
           }
        }
           document.getElementById('Result').innerHTML=text;
          
           
       
        
    }
    else
    {
        //console.log("please enter correct limits");
        document.getElementById('Result').innerHTML="Please enter correct limits";

    }
}
function oddnumbers()
{
    upperLimit=parseInt(document.getElementById('upper').value);
    lowerLimit=parseInt(document.getElementById('lower').value);
    if(upperLimit>lowerLimit)
    {
        for ( i = upperLimit; i >lowerLimit ; i--)
        { 
           if(i%2!=0)
           {
           //console.log("odd number is"+i);
           text += "The odd number is " + i+ "\n";
           }
        }
           
        document.getElementById('Result').innerHTML=text; 
    
        
    }
    else
    {
        //console.log("please enter correct limits");
        document.getElementById('Result').innerHTML="Please enter correct limits";
    }
    
}
