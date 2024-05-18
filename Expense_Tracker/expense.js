const revoke = document.getElementById("revoke");
const category = document.getElementById("category");
const amount = document.getElementById("amount");
const date1 = document.getElementById("date");
const result = document.getElementById("results");
const error = document.getElementById("errors")
let active = false;
let data = [];
const call = () => {
    amount.value = '';
    date1.value = '';
    category.value='';
    active = !active
    // active = true
    if (active) {
        revoke.style = "display:block"
    }
    else {
        revoke.style = "display:none"
    }
}
const valid = () => {
    error.innerHTML = ''
    if (category.value === '') {
        error.innerHTML = `Category  Field are misssing`;
        return false
    }
    if (amount.value === "") {
        error.innerHTML = " Amount Field is misssing";
        return false

    } if (date1.value === "") {
        error.innerHTML = " Date Field is misssing";
        return false

    }
    return true
}
const addexpense = () => {

    array1 = []
    amountSpent = parseFloat(amount.value);
    categorySpent = category.value;
    dateSpent = date1.value;
    id = (new Date()).getTime();
    array1.push(id, categorySpent, amountSpent, dateSpent);
    data.push(array1);
    // console.log(data)
    amount.value = '';
    date1.value = '';
    category.value='';
    view();
    call();
}
const remove = (id) => {
    for (let j = 0; j < data.length; j++) {

        if (data[j][0] === id) {
            data.splice(j)
        }
    }
    view();
}
const edit=(id) => 
    {
        for (let j = 0; j < data.length; j++) {

            if (data[j][0] === id) {
                call();
                category.value=data[j][1];
                amount.value=data[j][2];
                date1.value=data[j][3];
            
            }
        } 
    }
const view = () => {
    results.innerHTML = `
    <tr>
    <th>Category</th>
    <th>Amount spent</th>
    <th>Date</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
    `
    for (let i = 0; i < data.length; i++) {
        if (data == []) {
            results.innerHTML += `
                <td>
                no data found
                </td>
                `
        }
        else {
            results.innerHTML += `
            <tr>
            <td>${data[i][1]}</td>
            <td>${data[i][2]}</td>
            <td>${data[i][3]}</td>
            <td><button><i class="fa fa-pencil" aria-hidden="true" onclick="edit(${data[i][0]})"></i></button>
            <td><button><i class="fa fa-trash" aria-hidden="true" onclick="remove(${data[i][0]})"></i></button>
            </tr>
            `
        }
    }
}
