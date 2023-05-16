//before settime out
 var button1 = $('[role="menuitem"]');
        console.log(button1[7]);
        console.log(button1);

//after settimout


      setTimeout(() => {
        var button1 = $('[role="menuitem"]');
        console.log(button1[7]);
        console.log(button1);
      }, 200);
      // setTimeout(alert("cbchcb"), 200);
      setTimeout(() => {
        debugger;
        alert("cbchcb");
      }, 200);

      //widow.load()

window.onload = function () { };

