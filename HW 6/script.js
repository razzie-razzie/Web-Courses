function showAlbums(xhr) {
    var array = JSON.parse(xhr.responseText);
    var myHTMLStr = '<table>';
    myHTMLStr += '<thead><tr><th>User ID</th><th>ID</th><th>Title</th><th colspan="2">Edit|Delete</th></tr></thead>';
    if (Array.isArray(array)) {
        for (var i in array) {
            myHTMLStr += '<tr><td>' + array[i]['userId'] + '</td><td>' +
                array[i]['id'] + '</td><td>' +
                array[i]['title'] + '</td><td>' +
                '<button class="btn btn-danger" id="putBtn" onclick="drawFormPut(' +
                array[i]['id'] + ')">Edit</button></td><td>' +
                '<button class="btn btn-warning" id="deleteBtn" onclick="deleteRequest(' +
                array[i]['id'] + ')">Delete</button></td></tr>';
        }
    } else {
        myHTMLStr += '<tr><td>' + array.postId + '</td><td>' +
            array.id + '</td><td>' +
            array.name + '</td><td>' +
            array.email + '</td><td>' +
            array.body + '</td> <td class="btn btn-danger">' +
            '<button id="deleteBtn" onclick="deleteRequest()">Delete</button></td><button class="btn btn-warning"' +
            '<button id="putBtn" onclick="drawFormPut()">Edit</button></td></tr>';
    }
    myHTMLStr += '</table>';
    document.getElementById('table').innerHTML = myHTMLStr;
}



function getRequest() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showAlbums(this);
            console.log(this.responseText);
        }
    };
    request.open('GET', 'https://jsonplaceholder.typicode.com/albums');
    request.send();
}

function deleteRequest(id) {
    var request = new XMLHttpRequest();

    request.open('DELETE', 'https://jsonplaceholder.typicode.com/albums/' + id);
    request.send();
    
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Album was successfully deleted!');
            console.log(this.responseText);
        }
    };
}
