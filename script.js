var h3 = document.createElement("h3");
h3.style.fontFamily = "Jersey 25 Charted";
h3.innerHTML = "Call Back Hell Task";

var div = document.createElement("div");
div.innerHTML = "";

//setTimeout() syntax
//setTimeout(callback,time)
function count10(callback) {
  setTimeout(() => {
    div.innerHTML = "10";
    callback();
  }, 1000);
}

function count9(callback) {
  setTimeout(() => {
    div.innerHTML = "9";
    callback();
  }, 1000);
}

function count8(callback) {
  setTimeout(() => {
    div.innerHTML = "8";
    callback();
  }, 1000);
}
function count7(callback) {
  setTimeout(() => {
    div.innerHTML = "7";
    callback();
  }, 1000);
}
function count6(callback) {
  setTimeout(() => {
    div.innerHTML = "6";
    callback();
  }, 1000);
}
function count5(callback) {
  setTimeout(() => {
    div.innerHTML = "5";
    callback();
  }, 1000);
}
function count4(callback) {
  setTimeout(() => {
    div.innerHTML = "4";
    callback();
  }, 1000);
}
function count3(callback) {
  setTimeout(() => {
    div.innerHTML = "3";
    callback();
  }, 1000);
}
function count2(callback) {
  setTimeout(() => {
    div.innerHTML = "2";
    callback();
  }, 1000);
}
function count1(callback) {
  setTimeout(() => {
    div.innerHTML = "1";
    callback();
  }, 1000);
}

function greet() {
  setTimeout(() => {
    div.innerHTML = "Happy Independence Day!";
  }, 1000);
}

document.body.append(h3, div);

count10(() => {
  count9(() => {
    count8(() => {
      count7(() => {
        count6(() => {
          count5(() => {
            count4(() => {
              count3(() => {
                count2(() => {
                  count1(() => {
                    greet();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
