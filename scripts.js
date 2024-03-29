json_data = {
    "data": [{
        "name": "Test Whatsapp",
        "region": "US",
        "createdOn": 1559807714999,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url":"Some image url of the campaign" 
      },
      {
        "name": "Super Jewels Quest",
        "region": "CA, FR",
        "createdOn": 1559806715124,
        "price": "Price info of Super Jewels Quest",
        "csv": "Some CSV link for Super Jewels Quest",
        "report": "Some report link for Super Jewels Ques",
        "image_url":"Some image url of the campaign"
      },
      {
        "name": "Mole Slayer",
        "region": "FR",
        "createdOn": 1593199073768,
        "price": "Price info of Mole Slayer",
        "csv": "Some CSV link for Mole Slayer",
        "report": "Some report link for Mole Slayer",
        "image_url":"Some image url of the campaign"
      },
      {
        "name": "Mancala Mix",
        "region": "JP",
        "createdOn": 1573196673768,
        "price": "Price info of Mancala Mix",
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"Some image url of the campaign"
      }
    ]
  }

  $(document).ready(function(){
    $('.datepicker').datepicker();
    
    $('.tabs').tabs();
    console.log("Data", json_data["data"]);
    let data_table_list = [];

    for (i in json_data["data"]){
        let data = json_data["data"][i];
        console.log(data);
        let currentDate = new Date(data["createdOn"]);
        var today = new Date();
        let difference = today.getTime() - currentDate.getTime();
        let daysDifference = Math.floor(difference/1000/60/60/24);
        let day_status = '';

        console.log("difference", daysDifference)
        if(daysDifference < 0)
        {
            day_status = Math.abs(daysDifference) + ' Days Left'
        }
        else if(daysDifference === 0) {
            day_status = 'Campaign Live'
        }
        else {
            day_status = daysDifference + ' Days Ago'
        }
        console.log("day status", day_status);
        let campaignHtml = `<p>${data["name"]}</p><p>${data["region"]}</p>`;
        let viewHtml = `<span class="row"><img src="./Page 1/Dashboard/Row/Group 4/Price.png">
                        <p>View Pricing</p></span>`;
        let actionsHtml = `<span class="row"><div class="col s4"><img src="./Page 1/Dashboard/Row/Group 3/file.png"><p class="action_tab">CSV</p></div>
                                <div class="col s4"><img src="./Page 1/Dashboard/Row/Group 2/statistics-report.png"><p class="action_tab">Report</p></div>
                                <div class="col s4"><img src="./Page 1/Dashboard/Row/Group 4/Price.png"><p class="action_tab schedule_button">Schedule Again</p><input type="text" class="datepicker hide"></div>`
        let currentDateHtml = `<p>${formatDate(currentDate)}</p><p>${day_status}</p>`
        let new_row_html = `<tr>
            <td>${currentDateHtml}</td>
            <td>${campaignHtml}</td>
            <td>${viewHtml}</td>
            <td>${actionsHtml}</td>
            </tr>`;


        if(today.setHours(0,0,0,0) === currentDate.setHours(0,0,0,0))
        { 
            $("#live_datatable tbody").append(new_row_html);
        }
        else if(today.setHours(0,0,0,0) < currentDate.setHours(0,0,0,0)) {
            $("#upcoming_datatable tbody").append(new_row_html);
        }
        else {
            $("#past_datatable tbody").append(new_row_html);
        }

        // $("#live_datatable tbody").append(new_row_html);
        // $("#past_datatable tbody").append(new_row_html);
        // $("#upcoming_datatable tbody").append(new_row_html);

    }

    console.log("data table list", data_table_list);


    function formatDate(date) {
        var monthString = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
		var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return date.getDate() + " " + monthString[date.getMonth()]  + " " + year;
    }

    function custom_sort(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    $(".schedule_button").click(function() {
        $(this).
        console.log("clicked")
    })
  });