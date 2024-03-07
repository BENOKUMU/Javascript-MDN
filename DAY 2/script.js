function getMonthName(mo) {
  mo--;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo");
  }
}

try{
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = "unknown";
    logMyErrors(e);
}


// Loops and iteration
for (let step = 0; step < 5; step++) {
    console.log("Walking east one step");
}

// for Statement => Repeats until a specific condition evaluates to false
// for (initialization; condition; afterthought)
//    statement

function countselected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countselected(musicTypes)} option(s).`);
});


// do..while
// do
//  statement
// while(condition);

let i = 0;
do {
    i += 1;
    console.log(i);

} while (i < 5)

while (n < 3) {
    n++;
    x += n;
}


for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
        break;
    }
}
