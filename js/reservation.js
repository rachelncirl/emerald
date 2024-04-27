function loadDatePicker() {

    // Destroy any existing calendar before building
    $(".datepicker").datepicker("destroy");

    // Create a new calendar
    $(".datepicker").datepicker({
        minDate: 0,
        beforeShowDay: function (date) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
            var dayrates = getRates();
            var title = "\u20AC" + dayrates[date.getDay()];
            price();
            return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : "", title];
        },
        onSelect: function (dateText, inst) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
            var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

            if (!date1 || date2) {
                $("#input1").val(dateText);
                $("#input2").val("");
                $(this).datepicker();
                price();
            } else if (selectedDate < date1) {
                $("#input2").val($("#input1").val());
                $("#input1").val(dateText);
                $(this).datepicker();
                console.log(dateText);
                price();
            } else {
                $("#input2").val(dateText);
                $(this).datepicker();
                price();
            }
        }
    });
}

function getRates() {
    var guestFactor = document.getElementById("guests").value;
    var roomFactor = document.getElementById("room").value;
    var sunday = Math.round(195 * guestFactor * roomFactor);
    var monday = Math.round(150 * guestFactor * roomFactor);
    var tuesday = Math.round(150 * guestFactor * roomFactor);
    var wednesday = Math.round(160 * guestFactor * roomFactor);
    var thursday = Math.round(175 * guestFactor * roomFactor);
    var friday = Math.round(235 * guestFactor * roomFactor);
    var saturday = Math.round(270 * guestFactor * roomFactor);
    return [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
}

function price() {
    var future = moment(document.getElementById("input2").value);
    var start = moment(document.getElementById("input1").value);

    var nights = future.diff(start, 'days');
    if (!isNaN(nights)) {
        console.log("Number of nights: " + nights);
        document.getElementById("nights").value = nights;
    } else {
        document.getElementById("nights").value = "0";
    }

    var dayrates = getRates();
    var sundays = getDaysBetweenDates(start, future, 0) * dayrates[0];
    var mondays = getDaysBetweenDates(start, future, 1) * dayrates[1];
    var tuesdays = getDaysBetweenDates(start, future, 2) * dayrates[2];
    var wednesdays = getDaysBetweenDates(start, future, 3) * dayrates[3];
    var thursdays = getDaysBetweenDates(start, future, 4) * dayrates[4];
    var fridays = getDaysBetweenDates(start, future, 5) * dayrates[5];
    var saturdays = getDaysBetweenDates(start, future, 6) * dayrates[6];

    document.getElementById("price").value = "Purchase €" + (sundays + mondays + tuesdays + wednesdays + thursdays + fridays + saturdays);
}


/* Given a start date, end date and day index, return
** the number of occurrances of that day
** @param {Date} start - date to start from
** @param {Date} end - date to end on
** @param {int} day - index of the day
** @returns {int} - number of occurrances of the day
*/
function getDaysBetweenDates(start, end, day) {
    var result = 0;
    // Copy start date
    var current = new Date(start);
    // Shift to next of required days
    current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
    // While less than end date, increment and loop
    while (current < end) {
        result++;
        current.setDate(current.getDate() + 7);
    }
    return result;
}

function requestBooking(e) {
    $("#reservationModal").modal('show');
    var room = document.getElementById("room");
    var guests = document.getElementById("guests");
    console.log(document.getElementById("email").value);
    document.getElementById("bookingName").textContent = document.getElementById("name").value;
    document.getElementById("bookingEmail").textContent = document.getElementById("email").value;
    document.getElementById("bookingPhone").textContent = document.getElementById("phone").value;
    document.getElementById("bookingNights").textContent = document.getElementById("nights").value;
    document.getElementById("bookingGuests").textContent = guests.options[guests.selectedIndex].text;
    document.getElementById("bookingRoom").textContent = room.options[room.selectedIndex].text;
    document.getElementById("bookingCheckIn").textContent = document.getElementById("input1").value;
    document.getElementById("bookingCheckOut").textContent = document.getElementById("input2").value;
    document.getElementById("bookingPrice").textContent = document.getElementById("price").value;
    return false;
}

/* When the payment is made hide the payment form and display
** the booking summary
*/
function pay() {
    var x = document.getElementById('paymentForm');
    x.style.display = 'none';
    var summary = document.getElementById('bookingSummary');
    summary.style.display = 'block';
}

/* When closing the modal reset the entire payment reservation 
** form, rebuild the datepicker and flip the pay and booking modal content
*/
function resetForm() {
    document.getElementById("reservationForm").reset();
    loadDatePicker();
    var x = document.getElementById('bookingSummary');
    x.style.display = 'none';
    var summary = document.getElementById('paymentForm');
    summary.style.display = 'block';
}
