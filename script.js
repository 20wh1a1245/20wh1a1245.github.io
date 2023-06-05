var data1 = {image : "./childhood.jpg", name : "Meenakshi Supriya Elluri", designation : "Learner"};
var data2 = {image : "./latest.jpg", name : "Meenakshi Supriya", designation : "Intern"};
var isData1 = true;
var displayData;
var changeMyPic = function()
{
    if(isData1)
    {
        displayData = data2;
        isData1 = false;
    }
    else
    {
        displayData = data1;
        isData1 = true;
    }
    document.getElementById("myChildImg").src = displayData.image;
    document.getElementById("myFirstName").innerHTML = displayData.name;
    document.getElementById("myDesignation").innerHTML = displayData.designation;
}