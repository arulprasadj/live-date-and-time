/*! Livedatetime real time clock javascript ( https://github.com/arulprasadj/live-date-and-time ) -- Version: 1.2.0 -- Author: Arul Prasad J ('https://github.com/arulprasadj') */
function live_date_time(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    var suffix = "AM";
    if (h >= 12) {
        suffix = "PM";
        h = h - 12;
        if (h < 10) {
            h = "0" + h;
        }
    }
    if (h == 0) {
        h = 12;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = '' + days[day] + ', ' + months[month] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s + ' ' + suffix;
    $("#" + id).html(result);
    setTimeout('live_date_time("' + id + '");', '1000');
    return true;
}
