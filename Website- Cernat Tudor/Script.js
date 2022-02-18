var x, y, z, i, j, k, l, m, buttons;
x = document.getElementsByClassName("tab");
y = document.getElementsByClassName("window");
z = document.getElementsByClassName("section1")
for(i=0; i<x.length; i++){
    x[i].style.display = "none";
}
for(k=0; k<y.length; k++){
    y[k].style.display = "none";
}
function openTab(evt, className){
    for(j=0; j<x.length; j++){
        x[j].style.display = "none";
    }
    document.getElementById(className).style.display="block";
}
function openWindow(evt, classId){
    for(l=0; l<y.length; l++){
        y[l].style.display = "none";
    }
    for(j=0; j<x.length; j++){
        x[j].style.display = "none";
    }
    document.getElementById(classId).style.display="block";   
}
function goHome(evt, classId){
    for(l=0; l<y.length; l++){
        y[l].style.display = "none";
    }
    for(j=0; j<x.length; j++){
        x[j].style.display = "none";
    }
    document.getElementById(classId).style.display="block";   
    document.getElementById("Despre").style.display="block";  
}
function openSection(evt, classId){
    for(m=0; m<z.length;m++){
        z[m].style.display="none"
    }
    document.getElementById(classId).style.display="block";
}