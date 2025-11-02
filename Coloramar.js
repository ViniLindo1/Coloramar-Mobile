let count = 1
document.getElementById("radio1").checked = true;
setInterval( function(){
    proximg();
}, 3000)

function proximg(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true
}
