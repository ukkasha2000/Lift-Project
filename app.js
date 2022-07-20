let btn0 = document.querySelector('#button-0');
let btn1 = document.querySelector('#button-1');
let btn2 = document.querySelector('#button-2');
let btn3 = document.querySelector('#button-3');
let btn4 = document.querySelector('#button-4');
let lift = document.querySelector('#lift');
let para = document.getElementById('para');
let currentFloor = 4, Floorsarray = [], floorToGo = 0, temp, check,interval;

// align = function(){
//     console.log(Floorsarray, {floorToGo}, {currentFloor});
//     // if(Floorsarray.length>1){
//         // Descending Order
//         if(currentFloor>floorToGo){
//             for(let x=0;x<Floorsarray.length-1;x++){
//                 for(let y=x+1;y<Floorsarray.length;y++){
//                     if(Floorsarray[x]<Floorsarray[y] && Floorsarray[y]<currentFloor){
//                         temp=Floorsarray[x];
//                         Floorsarray[x]=Floorsarray[y];
//                         Floorsarray[y]=temp;
//                         // floorToGo=temp;
//                     }
//                 }
//             }
//             console.log(Floorsarray);
//         }
//         // Ascending Order
//         else if(currentFloor<floorToGo){
//             for(let k=0;k<Floorsarray.length-1;k++){
//                 for(let l=x+1;l<Floorsarray.length;l++){
//                     if(Floorsarray[k]>Floorsarray[l] && Floorsarray[l]>currentFloor){
//                         temp=Floorsarray[k];
//                         Floorsarray[k]=Floorsarray[l];
//                         Floorsarray[l]=temp;
//                         // floorToGo=temp;
//                     }
//                 }
//                 console.log(Floorsarray);
//             }
//         }
//     // }
// }
let changeButtonColor = function(f){
    if(f==0){
        btn0.style.backgroundColor = 'red';
    }
    else if(f==1){
        btn1.style.backgroundColor = 'red';
    }
    else if(f==2){
        btn2.style.backgroundColor = 'red';
    }
    else if(f==3){
        btn3.style.backgroundColor = 'red';
    }
    else if(f==4){
        btn4.style.backgroundColor = 'red';
    }
}
let buttonClick = function (floor) {

    if (floor != currentFloor) {
        check = true;
        for (let i = 0; i < Floorsarray.length; i++) {
            if (Floorsarray[i] === floor) {
                check = false;
            }
        }
        if (check == true) {
            changeButtonColor(floor);
            Floorsarray.push(floor);
            if(Floorsarray.length>1){
                // align();
            }
            para.textContent='Floor To Serve:'+ Floorsarray;
        }
    }
    
    //  if (Floorsarray.length == 1) {
        liftMoving();
    //  }
    //   if(Floorsarray.length>1){
    //     interval= setInterval(liftMoving(),500);
    //  }
}


let liftMoving = function () {
    // if(floorToGo<currentFloor)
    // {
    //     liftStatus="down";

    // }
    // else if(floorToGo>currentFloor)
    // {
    //     liftStatus="up";
    // }
    
    
    clearTimeout(interval);
      
     floorToGo = Floorsarray[0];
     
    if (currentFloor == 4 && floorToGo == 0 ||
        currentFloor == 3 && floorToGo == 0 ||
        currentFloor == 2 && floorToGo == 0 ||
        currentFloor == 1 && floorToGo == 0) {
        lift.style.top = '770px';
        lift.style.transition = '4s';

         
        // if(Floorsarray.length==1){   
            
        // }
        btn1.disabled = false; btn2.disabled = false; btn3.disabled = false; btn4.disabled = false;
        let setColor = function () {
            btn0.style.backgroundColor = '#EFEFEF';
            btn0.disabled = true;
            currentFloor = 0;
            Floorsarray.shift();para.textContent='Floor To Serve:'+ Floorsarray;
            if(Floorsarray.length!=0){
                liftMoving();
            }
        }
        interval = setTimeout(setColor, 4000);
    }
    else if (currentFloor == 4 && floorToGo == 1 ||
        currentFloor == 3 && floorToGo == 1 ||
        currentFloor == 2 && floorToGo == 1 ||
        currentFloor == 0 && floorToGo == 1) {
        lift.style.top = '580px';
        lift.style.transition = '4s';
        // interval =setInterval(liftMoving(),500);
        btn0.disabled = false; btn2.disabled = false; btn3.disabled = false; btn4.disabled = false;
        let setColor = function () {
            btn1.style.backgroundColor = '#EFEFEF';
            btn1.disabled = true;
            currentFloor = 1;
            Floorsarray.shift();para.textContent='Floor To Serve:'+ Floorsarray;
            if(Floorsarray.length!=0){
                liftMoving();
            }
        }
        interval = setTimeout(setColor, 4000);
    }
    else if (currentFloor == 4 && floorToGo == 2 ||
        currentFloor == 3 && floorToGo == 2 ||
        currentFloor == 1 && floorToGo == 2 ||
        currentFloor == 0 && floorToGo == 2) {
        lift.style.top = '390px';
        lift.style.transition = '4s';
        // interval =setInterval(liftMoving(),500);
        btn2.disabled = false; btn1.disabled = false; btn3.disabled = false; btn4.disabled = false;
        let setColor = function () {
            btn2.style.backgroundColor = '#EFEFEF';
            btn2.disabled = true;
            currentFloor = 2;
            Floorsarray.shift();para.textContent='Floor To Serve:'+ Floorsarray;
            if(Floorsarray.length!=0){
                liftMoving();
            }
        }
        interval = setTimeout(setColor, 4000);
    }
    else if (currentFloor == 4 && floorToGo == 3 ||
        currentFloor == 2 && floorToGo == 3 ||
        currentFloor == 1 && floorToGo == 3 ||
        currentFloor == 0 && floorToGo == 3) {
        lift.style.top = '200px';
        lift.style.transition = '4s';
        // interval =setInterval(liftMoving(),500);
        btn0.disabled = false; btn1.disabled = false; btn2.disabled = false; btn4.disabled = false;
        let setColor = function () {
            btn3.style.backgroundColor = '#EFEFEF';
            btn3.disabled = true;
            currentFloor = 3;
            Floorsarray.shift();para.textContent='Floor To Serve:'+ Floorsarray;
            if(Floorsarray.length!=0){
                liftMoving();
            }
        }
        interval = setTimeout(setColor, 4000);
    }
    else if (currentFloor == 3 && floorToGo == 4 ||
        currentFloor == 2 && floorToGo == 4 ||
        currentFloor == 1 && floorToGo == 4 ||
        currentFloor == 0 && floorToGo == 4) {
        lift.style.top = '10px';
        lift.style.transition = '4s';
        // interval =setInterval(liftMoving(),500);
        btn0.disabled = false; btn1.disabled = false; btn2.disabled = false; btn3.disabled = false;
        let setColor = function () {
            btn4.style.backgroundColor = '#EFEFEF';
            btn4.disabled = true;
            currentFloor = 4;
            Floorsarray.shift();para.textContent='Floor To Serve:'+ Floorsarray;
            if(Floorsarray.length!=0){
                liftMoving();
            }
        }
        interval = setTimeout(setColor, 4000);
    }
   
}