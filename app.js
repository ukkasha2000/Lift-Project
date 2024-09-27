let btn0 = document.querySelector("#button-0");
let btn1 = document.querySelector("#button-1");
let btn2 = document.querySelector("#button-2");
let btn3 = document.querySelector("#button-3");
let btn4 = document.querySelector("#button-4");
let lift = document.querySelector("#lift");

let currentFloor = 4,
  upQueue = [],
  downQueue = [],
  floorToGo = 0,
  interval,
  direction = "down";

let floorPositions = {
  0: "770px",
  1: "580px",
  2: "390px",
  3: "200px",
  4: "10px",
};

let changeButtonColor = function (f) {
  let btn = document.querySelector(`#button-${f}`);
  btn.style.backgroundColor = "red";
};

let buttonClick = function (floor) {
  if (floor !== currentFloor) {
    if (direction === "down" && floor < currentFloor) {
      if (!downQueue.includes(floor)) {
        downQueue.push(floor);
      }
    } else if (direction === "up" && floor > currentFloor) {
      if (!upQueue.includes(floor)) {
        upQueue.push(floor);
      }
    } else if (direction === "down" && floor > currentFloor) {
      if (!upQueue.includes(floor)) {
        upQueue.push(floor);
      }
    } else if (direction === "up" && floor < currentFloor) {
      if (!downQueue.includes(floor)) {
        downQueue.push(floor);
      }
    }
    changeButtonColor(floor);
    liftMoving();
  }
};

let liftMoving = function () {

    console.log(lift.style.top,"lift.style.top")
  clearTimeout(interval);

  if (direction === "down") {
    downQueue.sort((a, b) => b - a);
    floorToGo = downQueue[0];
  } else if (direction === "up") {
    upQueue.sort((a, b) => a - b);
    floorToGo = upQueue[0];
  }

  if (typeof floorToGo === "undefined") {
    if (direction === "down" && upQueue.length > 0) {
      direction = "up";
      liftMoving();
    } else if (direction === "up" && downQueue.length > 0) {
      direction = "down";
      liftMoving();
    }
    return;
  }

  if (direction === "down" && floorToGo > currentFloor) {
    upQueue.push(floorToGo);
    liftMoving();
    return;
  }

  moveToFloor(floorToGo);

  interval = setTimeout(() => {
    updateLiftState();
  }, 4000);
};

let moveToFloor = function (floor) {
  lift.style.top = floorPositions[floor];
  lift.style.transition = "4s";
  enableAllButtonsExcept(floor);
};

let enableAllButtonsExcept = function (floor) {
  let buttons = [btn0, btn1, btn2, btn3, btn4];
  buttons.forEach((btn, idx) => {
    btn.disabled = idx === floor;
  });
};

let updateLiftState = function () {
  let btn = document.querySelector(`#button-${floorToGo}`);
  btn.style.backgroundColor = "#EFEFEF";

  currentFloor = floorToGo;

  if (direction === "down") {
    downQueue.shift();
  } else if (direction === "up") {
    upQueue.shift();
  }

  if (direction === "down" && downQueue.length === 0) {
    if (upQueue.length > 0) {
      direction = "up";
    }
  } else if (direction === "up" && upQueue.length === 0) {
    if (downQueue.length > 0) {
      direction = "down";
    }
  }

  liftMoving();
};
