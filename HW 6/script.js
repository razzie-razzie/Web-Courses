var url = "https://my-json-server.typicode.com/razzie-razzie/Web-Courses/posts/";

function showAlbums(xhr) {
    var array = JSON.parse(xhr.responseText);
    var myHTMLStr = '<table>';
    myHTMLStr += '<thead><tr><th>ID</th><th>Title</th><th colspan="2">Edit|Delete</th></tr></thead>';
    if (Array.isArray(array)) {
        for (var i in array) {
            myHTMLStr += '<tr><td>' +
                array[i]['id'] + '</td><td>' +
                array[i]['title'] + '</td><td>' +
                '<button class="btn btn-danger" id="putBtn" onclick="drawPutForm(' +
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
            '<button id="putBtn" onclick="putForm()">Edit</button></td></tr>';
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
    request.open('GET', url);
    request.send();
}


function deleteRequest(id) {
    var request = new XMLHttpRequest();

    request.open('DELETE', url + id);
    request.send();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('Album was successfully deleted!');
            console.log(this.responseText);
        }
    };
}


function postRequest(id) {

    var request = new XMLHttpRequest();

    var obj = {};
    obj.id = document.getElementById('id').value;
    obj.title = document.getElementById('title').value;
    var json = JSON.stringify(obj);

    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(json);

    request.onload = function () {
        if (request.readyState == 4 && request.status == "201") {
            alert(request.responseText);
        }
    }
    request.onerror = function () {
        alert('Ошибка:' + request.status);
    }
}

function putRequest() {
    var id = document.getElementById('id').value;
    var xhr = new XMLHttpRequest();

    var put_obj = {};
    put_obj.id = document.getElementById('id').value;
    put_obj.title = document.getElementById('title').value;
    var json = JSON.stringify(put_obj);

    xhr.open("PUT", url + id);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(json);

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            alert(xhr.responseText);
        }
    }
    xhr.onerror = function () {
        alert('Ошибка:' + xhr.status);
    }
}

function drawPutForm(id) {
    document.getElementById('id').value = id;
}