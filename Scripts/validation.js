<script>

function validateForm() {
        var name = document.getElementById('name').value;
        var family = document.getElementById('family').value;
        var fathername = document.getElementById('fathername').value;
        var codeMeli = document.getElementById('codeMeli').value;
        var birthday = document.getElementById('birthday').value;
        var address = document.getElementById('address').value;
        var tel = document.getElementById('tel').value;
        var mobile = document.getElementById('mobile').value;

        let validname = name.length && family.length && fathername.length  != "";
        let validcodeMeli = codeMeli.length ==15;
        let validtel = tel.length && mobile.length ==15;
        

       

        if (validname && validcodeMeli && validtel) {
            alert("اطلاعات شما با موفقیت ثبت شد")
            
        }
        else {
            alert("اطلاعات اشتباه است!");
            
        }
    
    }










</script>