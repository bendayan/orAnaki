{
var s1="a a",s2="ab",s3="ab c",s4="ab cd";
 var lenS1=s1.length;
 var lenS2=s2.length;
 var lenS3=s3.length;
 var lenS4=s4.length;
 var max,min;
if(lenS1==0||lenS2==0||lenS3==0||lenS4==0)
alert("emptyVar");
if(s1.indexOf(" ")!=-1){
    s1 = s1.replace(" ","_");
}
if(s2.indexOf(" ")!=-1)
     s2 = s2.replace(" ","_");

 if(s3.indexOf(" ")!=-1)
    s3 = s3.replace(" ","_");
 
 if(s4.indexOf(" ")!=-1)
     s4 = s4.replace(" ","_");

     
 if(lenS1>lenS2&&lenS1>lenS3&&lenS1>lenS4)
        max=s1;
    else if(lenS2>lenS1&&lenS2>lenS3&&lenS2>lenS4)
        max=s2;
  
     else if(lenS3>lenS1&&lenS3>lenS2&&lenS3>lenS4)
        max=s3; 
    else
       max=s4;
    
    alert("max string length: "+max);

if(s1.charAt(0)>='a'&&s1.charAt(0)<='z'){
    var ch1=s1.charAt(0);
    ch1=ch1.toUpperCase();
   s1= s1.replace(s1.charAt(0),ch1);
}

if(s2.charAt(0)>='a'&&s2.charAt(0)<='z'){
    var ch2=s2.charAt(0);
    ch2=ch2.toUpperCase();
   s2= s2.replace(s2.charAt(0),ch2);

}
if(s3.charAt(0)>='a'&&s3.charAt(0)<='z'){
    var ch3=s3.charAt(0);
    ch3=ch3.toUpperCase();
   s3= s3.replace(s3.charAt(0),ch3);

}
if(s4.charAt(0)>='a'&&s4.charAt(0)<='z'){
    var ch4=s4.charAt(0);
    ch4=ch4.toUpperCase();
   s4= s4.replace(s4.charAt(0),ch4);

}

if(lenS1<lenS2&&lenS1<lenS3&&lenS1<lenS4&&lenS1!=0)
min=s1;
else if(lenS2<lenS1&&lenS2<lenS3&&lenS2<lenS4&&lenS2!=0)
min=s2;

else if(lenS3<lenS1&&lenS3<lenS2&&lenS3<lenS4&&lenS3!=0)
min=s3; 
else if(lenS4!=0)
min=s4;
var lastCharMaxStr=max.charAt(max.length-1);
min+=lastCharMaxStr;
max=max.replace(max.charAt(max.length-1)," ");


document.getElementById("s1").innerHTML=s1;
document.getElementById("s2").innerHTML=s2;
document.getElementById("s3").innerHTML=s3;
document.getElementById("s4").innerHTML=s4;

document.getElementById("m").innerHTML=max;
document.getElementById("n").innerHTML=min;

}
