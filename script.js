
document.querySelector('#toggle-password').addEventListener('click', togglePassword);

function togglePassword() {
    const input = document.querySelector("#password" && "#loginPassword");
    console.log(input);
    const icon = document.querySelector(".eyeIcon");
    console.log(icon);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}



// ==============================
// EMAIL VALIDATION
// ==============================
const isValidEmail = (email) => {
    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// ==============================
// PASSWORD VALIDATION
// ==============================
const isValidPassword = (password) => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

// ==============================
// REGISTER USER
// ==============================
const registerBtn = document.querySelector("#registerBtn");

const registerUser = () => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    // 1️⃣ Name check
    if (!name) {
        alert("Please enter your name");
        return;
    }

    // 2️⃣ Email empty check
    if (!email) {
        alert("Please enter email");
        return;
    }

    // 3️⃣ Email format check
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // 4️⃣ Password empty check
    if (!password) {
        alert("Please enter password");
        return;
    }

    // 5️⃣ Strong password check
    if (!isValidPassword(password)) {
        alert(
            "Password must contain:\n" +
            "- Minimum 8 characters\n" +
            "- 1 uppercase letter\n" +
            "- 1 lowercase letter\n" +
            "- 1 number\n" +
            "- 1 special character"
        );
        return;
    }
    const user = {
        name: name,
        email: email,
        password: password
    }
    localStorage.setItem('Users', JSON.stringify(user));
    window.location.href = 'login.html';
    // 👉 Next step: API / Google Sheet save
};

const loginBtn = document.querySelector('#loginBtn');
const loginUser = ()=>{
    const loginEmail = document.querySelector('#loginEmail').value.trim();
    const loginPassword = document.querySelector('#loginPassword').value.trim();
    const user = JSON.parse(localStorage.getItem("Users"));
    if(!loginEmail || !loginPassword) return alert("please enter all field required");
    if(loginEmail === user.email){
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html'
    }
    console.log(user);
}

if(registerBtn){
    registerBtn.addEventListener("click", registerUser);
}
if(loginBtn){
    loginBtn.addEventListener('click', loginUser);
}


