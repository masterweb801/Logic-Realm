
let popup = document.getElementById("popup");
let gicon = document.getElementById("gicon");
let jin = document.getElementById("jin");
let form = document.getElementById("cont-form");

document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = document.getElementById("cnt-name").value;
    let email = document.getElementById("cnt-email").value;
    let category = document.getElementById("cnt-drop").value;
    let title = document.getElementById("cnt-title").value;
    let budget = document.getElementById("budget").value;
    let details = document.getElementById("cnt-msg").value;
    const url = "/api/order/newOrder.php";
    // const url = "http://localhost/LR_API/order/newOrder.php";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, budget, category, title, details })
        });
        const json = await response.json();
        message(json['response_desc'], json['order_id'])
    } catch (error) {
        message("Something is Wrong", null)
    }
})

function message(msg, orderId) {
    jin.classList.add("blur-filter");
    form.classList.add("blur-filter");
    popup.classList.remove("popup");
    popup.classList.add("poped-msg");
    gicon.classList.remove("gift-icon");
    gicon.classList.add("poped-gift");
    document.getElementById("msg-close").style.visibility = "visible";
    document.getElementById("result-msg").innerText = msg;
    if (orderId !== null) {
        document.getElementById("order-id").innerText = "Your Wish ID is " + orderId;
        document.getElementById("contact-form").reset();
    }
}

function closeMessage() {
    document.getElementById("msg-close").style.visibility = "hidden";
    document.getElementById("result-msg").innerText = "";
    document.getElementById("order-id").innerText = "";
    popup.classList.remove("poped-msg");
    popup.classList.add("popup");
    gicon.classList.remove("poped-gift");
    gicon.classList.add("gift-icon");
    jin.classList.remove("blur-filter");
    form.classList.remove("blur-filter");
}
document.getElementById("code-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let code = document.getElementById("wish-id").value;
    const url = "/api/order/checkOrder.php";
    // const url = "http://localhost/LR_API/order/checkOrder.php";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code })
        });
        const json = await response.json();
        if (json['response_code'] != 404) {
            let data = json['response_data'];
            wishDetails(data['id'], data["title"], data['email'], data['budget'], data['status'], data['stc'])
        } else {
            wishDetails("", "", "Wish Not Found", "", "", "")
        }
    } catch (error) {
        console.log(error);
    }
})

function wishDetails(id, title, email, budget, status, progress) {
    document.getElementById("wish-code-result").style.visibility = "visible";
    document.getElementById("wd-id").innerText = id;
    document.getElementById("wd-title").innerText = title;
    document.getElementById("wd-email").innerText = email;
    document.getElementById("wd-budget").innerText = budget;
    document.getElementById("wd-status").innerText = status;
    document.getElementById("wd-progress").innerText = progress;
    if (progress === "100" && status === "checking") {
        document.getElementById("wd-done").style.visibility = "visible";
    }
}

function wishDetailsClose() {
    document.getElementById("wish-code-result").style.visibility = "hidden";
    document.getElementById("wd-done").style.visibility = "hidden";
    document.getElementById("wd-id").innerText = "";
    document.getElementById("wd-title").innerText = "";
    document.getElementById("wd-email").value = "";
    document.getElementById("wd-budget").innerText = "";
    document.getElementById("wd-status").innerText = "";
    document.getElementById("wd-progress").innerText = "";
}

async function closeWish() {
    const url = "/api/order/closeOrder.php";
    // const url = "http://localhost/LR_API/order/closeOrder.php";
    let code = document.getElementById("wish-id").value;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ code })
        });
        const json = await response.json();
        if (json['response_code'] === 200) {
            wishDetailsClose();
        } else {
            alert("Something Went Wrong!");
            console.log(json['response_desc']);
        }
    } catch (error) {
        alert("Something Went Wrong!");
        console.log(error);
    }
}