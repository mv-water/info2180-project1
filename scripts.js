

const form = document.querySelector(".newsletter form");
const input = document.querySelector('input[type="email"]');
const msg = document.querySelector(".message");



form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const email = input.value.trim();

    if (email == "")
    {
        msg.textContent = "Please enter a valid email address.";
    }
    else
    {
        msg.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    }

})
