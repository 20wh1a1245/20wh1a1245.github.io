var data1 = {image : "images/childhood.jpg", name : "Meenakshi Supriya Elluri", designation : "Learner"};
var data2 = {image : "images/latest.jpg", name : "Meenakshi Supriya", designation : "Intern"};
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
}