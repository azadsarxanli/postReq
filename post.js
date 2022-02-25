function submitForm(event) {
  let url = "https://jsonplaceholder.typicode.com/posts";

  event.preventDefault();
  let json = {
    error: {
      name: {
        value: "",
        msg: "Zəhmət olmasa adınızı daxil edin !",
        param: "name",
        location: "body",
      },
      phone: {
        value: "",
        msg: "Lütfən düzgün əlaqə nömrənizi daxil edin !",
        param: "phone",
        location: "body",
      },
    },
    success: {
      message: "her shey ugurla gonderildi",
    },
  };
  const nameResponsed = $("#nameResponsed");
  const phoneResponsed = $("#phoneResponsed");
  let userName = document.querySelector("#userField");
  let userLastName = document.querySelector("#userField1");
  console.log(userName);
  if (userName.value === "" || userLastName.value === "") {
    let successMess = document.querySelector(".success-message");

    successMess.classList.remove("active");
    userName.style.border = "1px solid blue";
    userLastName.style.border = "1px solid blue";
    console.log("ifin icinde");
    nameResponsed.html("");
    phoneResponsed.html("");

    if (userName.value === "") {
      nameResponsed.html(json.error.name.msg);
      userName.style.border = "1px solid red";
    }
    if (userLastName.value === "") {
      phoneResponsed.html(json.error.phone.msg);
      userLastName.style.border = "1px solid red";
    }
  } else {
    userName.style.border = "1px solid blue";
    userLastName.style.border = "1px solid blue";
    phoneResponsed.html("");
    nameResponsed.html("");

    $.ajax({
      type: "POST",
      url: url,
      cache: false,
      data: userName.value,
      success: function (data) {
        if (data) {
          let successMess = document.querySelector(".success-message");
          let form = $("#formSubmit");
          form.addClass("active");
          successMess.classList.add("active");
          nameResponsed.html(json.success.message);
          console.log(data);
        } else {
        }
      },
    });
  }
}
