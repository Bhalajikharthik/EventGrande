fetch("/js/json/index_quote.json")
    .then(function (response) {
        //alert("inside response 1");
        return response.json();
    })
    .then(function (data) {
        //alert("inside data 1");
        appendData1(data);
    })
    .catch(function (err) {
        //alert("inside error 1 \n" + err);
        console.log('error: ' + err);
    });

function appendData1(data) {

    for (var i = 0; i < data.length; i++) {

        var title1 = document.getElementById("quote_title_".concat((i + 1).toString()));
        var subtitle1 = document.getElementById("quote_subtitle_".concat((i + 1).toString()));
        var desc1 = document.getElementById("quote_desc_".concat((i + 1).toString()));
        title1.innerHTML = data[i].title;
        subtitle1.innerHTML = data[i].subtitle;
        desc1.innerHTML = data[i].desc;

    }

} 

fetch("/js/json/index_advice.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData2(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData2(data) {

    for (var i = 0; i < data.length; i++) {

        var title1 = document.getElementById("advice_title_".concat((i + 1).toString()));
        var name1 = document.getElementById("advice_author_".concat((i + 1).toString()));
        var sport1 = document.getElementById("advice_author_sport".concat((i + 1).toString()));
        title1.innerHTML = data[i].title;
        name1.innerHTML = data[i].name;
        sport1.innerHTML = data[i].sport;

    }

} 

fetch("/js/json/index_recent.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData3(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData3(data) {

    for (var i = 1; i <= data.length; i++) {

        var date = document.getElementById("event_date_".concat((i).toString()));
        var month = document.getElementById("event_month_".concat((i).toString()));
        var title1 = document.getElementById("event_title_".concat(((i)*10 + 1).toString()));
        var link1 = document.getElementById("event_link_".concat(((i)*10 + 1).toString()));
        var content1 = document.getElementById("event_content_".concat(((i)*10 + 1).toString()));
        var title2 = document.getElementById("event_title_".concat(((i)*10 + 2).toString()));
        var link2 = document.getElementById("event_link_".concat(((i)*10 + 2).toString()));
        var content2 = document.getElementById("event_content_".concat(((i)*10 + 2).toString()));
        var title3 = document.getElementById("event_title_".concat(((i)*10 + 3).toString()));
        var link3 = document.getElementById("event_link_".concat(((i)*10 + 3).toString()));
        var content3 = document.getElementById("event_content_".concat(((i)*10 + 3).toString()));

        i=i-1;
        date.innerHTML = data[i].date;
        month.innerHTML = data[i].month;
        title1.innerHTML = data[i].title1;
        link1.setAttribute("href",data[i].link1);
        content1.innerHTML = data[i].content1;
        title2.innerHTML = data[i].title2;
        link2.innerHTML = data[i].link2;
        content2.innerHTML = data[i].content2;
        title3.innerHTML = data[i].title3;
        link3.innerHTML = data[i].link3;
        content3.innerHTML = data[i].content3;
        i++;
    }

} 