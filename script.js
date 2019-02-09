$(document).ready(function () {
      // Global Variables
      let num1 = [];
      let num2 = [];
      let operator;
      let buttonArray = [$('#button-0'), $('#button-1'), $('#button-2'), $('#button-3'), $('#button-4'), $('#button-5'), $('#button-6'), $('#button-7'), $('#button-8'), $('#button-9'),];
      // Begin Functionality
      $('button').on('click', function () {
        var id = this.id;
        console.log(id);
        for (let i = 0; i < buttonArray.length; i++) {
          if (buttonArray[i].attr('id') === id) {
            var storedVal = parseInt(this.textContent);
            console.log(storedVal);
            if (operator != null) {
              num2.push(storedVal);
            } else {
              num1.push(storedVal);
            }
            console.log(num1, num2);
            $('#first-number').html(num1);
            $('#second-number').html(num2);
          };
        };
        if (id === 'button-plus') {
        operator = '+';
        };
        if (id === 'button-minus') {
          operator = '-';
        };
        if (id === 'button-multiply') {
          operator = '*';
        };
        if (id === 'button-divide') {
          operator = '&divide;';
        };
        if (id === 'button-power') {
          operator = '^';
        };
        console.log(operator);
        $('#operator').html(operator);
        if (id === 'button-equal') {
          if (operator === '+') {
          var result = parseInt($('#first-number').html()) + parseInt($('#second-number').html());
          } else if (operator === '-') {
          var result = parseInt($('#first-number').html()) - parseInt($('#second-number').html());
          } else if (operator === '*') {
          var result = parseInt($('#first-number').html()) * parseInt($('#second-number').html());
          } else if (operator === '&divide;') {
          var result = parseInt($('#first-number').html()) / parseInt($('#second-number').html());
          } else if (operator === '^') {
          var result = Math.pow(parseInt($('#first-number').html()), parseInt($('#second-number').html()));
          }
          $('#result').html(result);
        }
        if (id === 'button-clear') {
          num1 = [];
          num2 = [];
          operator = null;
          $('#first-number').text('');
          $('#operator').text('');
          $('#second-number').text('');
          $('#result').text('');
        };
      });
    });