var globalid = 0;
var input_id = 0;
var is_input_on_csrn = false;

function create_input_elem() {
    if (!is_input_on_csrn) {
        var list_elem = document.createElement("div");
        list_elem.id = globalid;
        globalid++;
        input_id = list_elem.id;
        var left_input = document.createElement('input');
        list_elem.append(left_input);
        var right_input = document.createElement('input');
        list_elem.append(right_input);
        var up_button = document.createElement('div');
        up_button.textContent = "↑";
        up_button.className = "button";
        up_button.onclick = up_b;
        list_elem.append(up_button);
        var down_button = document.createElement('div');
        down_button.textContent = "↓";
        down_button.className = "button";
        down_button.onclick = down_b;
        list_elem.append(down_button);
        var delete_button = document.createElement('div');
        delete_button.textContent = "×";
        delete_button.className = "button";
        delete_button.onclick = delete_b;
        list_elem.append(delete_button);
        document.getElementById("main").append(list_elem);
        is_input_on_csrn = true;
    }
}

function create_list_elem(input_id) {
    var list_elem = document.createElement("div");
    list_elem.id = input_id;
    var left_input = document.createElement('div');
    left_input.className = "cell";
    list_elem.append(left_input);
    var right_input = document.createElement('div');
    right_input.className = "cell";
    list_elem.append(right_input);
    var up_button = document.createElement('div');
    up_button.textContent = "↑";
    up_button.className = "button";
    up_button.onclick = up_b;
    list_elem.append(up_button);
    var down_button = document.createElement('div');
    down_button.textContent = "↓";
    down_button.className = "button";
    down_button.onclick = down_b;
    list_elem.append(down_button);
    var delete_button = document.createElement('div');
    delete_button.textContent = "×";
    delete_button.className = "button";
    delete_button.onclick = delete_b;
    list_elem.append(delete_button);
    return list_elem;
}

function save() {
    if (is_input_on_csrn) {
        input_elem = document.getElementById(input_id);
        left = input_elem.firstElementChild;
        right = input_elem.childNodes[1];
        if (left.value != "" && right.value != "") {
            list_elem = create_list_elem(input_id);
            list_elem.firstElementChild.textContent = left.value;
            list_elem.childNodes[1].textContent = right.value;
            document.getElementById("main").insertBefore(list_elem, input_elem);
            input_elem.remove();
            is_input_on_csrn = false;
        } else { alert("Вы ничего не вписали"); }
    }
}

function delete_b() {
    var count = document.getElementById("main").childElementCount;
    if (count == 1 || this.parentElement.id == input_id) {
        is_input_on_csrn = false;
    }
    parent = this.parentElement;
    parent.remove();
}

function up_b() {
    elem = document.getElementById('main');
    var index = Array.prototype.indexOf.call(elem.childNodes, this.parentElement);
    el = elem.childNodes[index - 1];
    if (index != 0) {
        elem.insertBefore(elem.childNodes[index], elem.childNodes[index - 1]);
    }
}

function down_b() {
    elem = document.getElementById('main');
    var index = Array.prototype.indexOf.call(elem.childNodes, this.parentElement);
    if (index != elem.childElementCount-1) {
        elem.insertBefore(elem.childNodes[index+1], elem.childNodes[index]);
    }
}

create_input_elem();