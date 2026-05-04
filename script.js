function bookRoom(){

    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;

    if(name == "" || room == ""){
        alert("Please fill all details");
        return;
    }

    localStorage.setItem(room, name);

    alert("Room Booked Successfully");
}