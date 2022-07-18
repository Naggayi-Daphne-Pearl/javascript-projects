// setting inital count 
let count = 0;

// selecting value and buttons 
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn'); 

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        // The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM.
        if (styles.contains('decrease')) {
            count--
            
        }
        else if (styles.contains('increase')) {
            count++
        }
        else {
            count = 0
        }

        if (count > 0) {
            value.style.color = "green";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count === 0) {
            value.style.color = "#222";
          }
        value.textContent = count;
    })
})

