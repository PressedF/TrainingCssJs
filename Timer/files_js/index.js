var button = $('.button');
var m_l = $('.number3');
var se_c = $('.number2');
var mi_n = $('.number1');
var ml = 0;
var sec = 0;
var min = 0;
var index = 0;
var times;
button.addClass('clicked');
if (button.hasClass('clicked')) {
    button.on('click', function () {
        button.val('Stop');
        if (index == 0) {
            index = 1;
            nowStart();
        }
        else {
            clearInterval(times);
            index = 0;
            button.val('Start');
        }
        function nowStart() {
            times = setInterval(function () {
                ml++;
                if (ml < 10)
                    m_l.text('00' + ml.toString());
                if (ml < 60 && ml > 10)
                    m_l.text('0' + ml.toString());
                if (ml > 59) {
                    ml = 0;
                    m_l.text('000');
                    sec++;
                    if (sec < 10)
                        se_c.text('0' + sec.toString());
                    if (sec > 10 && sec < 60)
                        se_c.text(sec.toString());
                    if (sec > 59) {
                        sec = 0;
                        se_c.text('00');
                        min++;
                        if (min < 10)
                            mi_n.text('0' + min.toString());
                        if (min > 10 && min < 60)
                            mi_n.text(min.toString());
                        if (min > 59) {
                            min = 0;
                            mi_n.text('00');
                        }
                    }
                }
            }, 1);
        }
    });
}
// Потратил на эту хрень jquery и ts :((
