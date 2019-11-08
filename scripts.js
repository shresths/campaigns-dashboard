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
    $('.tabs').tabs();
    console.log("Data", json_data["data"]);
    let data_table_list = [];

    for (i in json_data["data"]){
        let data = json_data["data"][i];
        console.log(data);
        let currentDate = data["createdOn"];
        let campaignHtml = data["name"];
        let viewHtml = `<p>button html</p>`;
        let actionsHtml = `<p>actionshtml</p>`
        let new_row_html = `<tr>
            <td>${currentDate}</td>
            <td>${campaignHtml}</td>
            <td>${viewHtml}</td>
            <td>${actionsHtml}</td>
            </tr>`;

        $("#live_datatable tbody").append(new_row_html);
        $("#past_datatable tbody").append(new_row_html);
        $("#upcoming_datatable tbody").append(new_row_html);

    }

    console.log("data table list", data_table_list)

    // function pushInDataTable (dataTableData) {

    //     dataTableData = dataTableData.sort(custom_sort).reverse();

    //     var data = {
    //         data: dataTableData,
    //         columns: columns
    //     };

    //     if(dataTableData.length > 0) {
    //         $('#search_bar').removeClass("hide");
    //         $('.refresh-btn').removeClass("hide"); }

    //    // console.log("data : ", data);
    //     //console.log("$('#myTable') :", $('#myTable'));
    //     var tableObj = $('#upcoming_camp').find('table').find('thead');
    //     var options = {
    //         data: data.data,
    //         columns: data.columns,
    //         columnsHtml: function(value, key) {
    //             return value;
    //         },
    //         pagination: PAGINATION_COUNT,
    //         showPaginationLabel: true,
    //         prevText: 'Prev',
    //         nextText: 'Next',
    //         searchField: $('#search'),
    //         responsive: [

    //         ]
    //     };

    //     if(tableObj.length > 0) {
    //         //console.log("yes", table);
    //         var originalData = table.config.data;
    //         for(var i in dataTableData) {
    //             originalData.push(dataTableData[i]);
    //         }
    //         table.isUpdating = true;
    //         originalData = originalData.sort(custom_sort).reverse();
    //         table.config.data = originalData;
    //         table.update();
    //     } else {
    //         //console.log("no");
    //         table = $('#upcoming_camp').tableSortable(options);
    //     }
    // }

    // let data = json_data["data"];
    // const pastDates = data.filter(x => Date.parse(x.createdOn) < new Date());

    // const futureDates = data.filter(x => Date.parse(x.createdOn) > new Date());

    // console.log("Past dates", JSON.stringify(pastDates, null, 4));

    // console.log("Future dates", JSON.stringify(futureDates, null, 4));


    // function formatDate(date) {
    //     var monthString = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	// 	var year = date.getFullYear();
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     var strTime = hours + ':' + minutes + ' ' + ampm;
    //     return date.getDate() + " " + monthString[date.getMonth()]  + " " + year + ", " + strTime;
    // }

    function custom_sort(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });