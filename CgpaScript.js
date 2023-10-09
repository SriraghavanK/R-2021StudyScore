function me(id){
    if (id == 9){
        for (let i = 1; i < id; i++){
            document.getElementById("sem"+i).classList.add("d-none");
        }
    }else{
        for (let i = 1; i <= id; i++){
            document.getElementById("sem"+i).classList.remove("d-none");
        }
        for (let i = id+1; i < 9; i++){
            document.getElementById("sem"+i).classList.add("d-none");
        }
    }   
};
let total = 0;
let val = 0;
function Cgpa(){
    let id = document.getElementById("nsem").value;
    for(let i = 1; i <= id; i++){
        val = parseFloat(document.getElementById("sem"+i+"g").value);
        total += val;
    }
    total = total/id;
    document.getElementById("cresult").innerHTML = total;
    total = 0;
    for(i = 1; i <= id; i++){
        document.getElementById("sem"+i+"g").value = "";
    }
};
document.getElementById("nsem").addEventListener("change", function(){
    document.getElementById("cresult").innerHTML = "";
    let val = document.getElementById("nsem").value;
    if(val == 1){
        me(1);
    } else if(val == 2){
        me(2);
    } else if(val == 3){
        me(3);
    } else if(val == 4){
        me(4);
    } else if(val == 5){
        me(5);
    } else if(val == 6){
        me(6);
    } else if(val == 7){
        me(7);
    } else if(val == 8){
        me(8);
    }
    else{
        me(9);
    }
});