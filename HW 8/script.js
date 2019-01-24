function Person(username, firstname, lastname, gender, concurrency) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.concurrency = concurrency;
}

function createObjectsArray(data) {
    var personsArray = [];
    $.each(data.value, function (key, data) {
        var person = new Person(data.UserName, data.FirstName, data.LastName, data.Gender, data.Concurrency);
        personsArray.push(person);
    })
    return personsArray;
}


function showData(personArray) {
    var trHTML = '<tr><th>User Name</th><th>First Name</th><th>Last Name</th><th>Gender</th><th>Concurrency</th></tr>';
    for (i = 0; i < personArray.length; i++) {
        trHTML += '<tr><td>' + personArray[i].username + '</td><td>' + personArray[i].firstname + '</td><td>' + personArray[i].lastname + '</td><td>' + personArray[i].gender + '</td><td>' + personArray[i].concurrency + '</td></tr>';
    }
    $('#added-table').append(trHTML);
}

function basicConfig() {
    document.getElementById("added-table").style.display = "block";
    document.getElementById("added-table").innerHTML = "";
}


$("#count").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/TripPinServiceRW/People/$count",
        success: function (data) {
            alert("There are " + data + " people");
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
//чет не работает
$("#expand").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/People?$expand=Photos",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage + "\nError");
        }
    });
})

$("#orderby").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$orderby=FirstName",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$('#search').click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$search=Female",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$('#select').click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$select=UserName,%20FirstName",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$("#skip").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$skip=1",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});


$("#top").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$top=3",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$("#filter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/TripPinServiceRW/People?$filter=Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender'Male'",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$("#three-filters").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$filter=startswith(FirstName,'R') and startswith(UserName,'r') and contains(LastName, 'e')",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});

$("#three-parameters").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$select=FirstName&$top=5&&$filter=startswith(FirstName,'R')&&$skip=1",
        success: function (data) {
            basicConfig();
            showData(createObjectsArray(data));
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
});