/* Email */
function sendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        from_email: document.getElementById("from_email").value
    };

    console.log(params);
    emailjs.send("service_gf1srvb", "template_zn7yuof", params).then(function (res) {
        console.log("Sucess! " + res.status);
    })
}