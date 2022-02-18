var x, i, j;
x = document.getElementsByClassName("tab");
for(i = 0; i< x.length;i++){
    x[i].style.display="none";
}
function openTab(clsid){
    for(j = 0; j< x.length;j++){
        x[j].style.display="none";
    }
    document.getElementById(clsid).style.display = "block";
}