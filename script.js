document.addEventListener("DOMContentLoaded", () => {
    let attempts = 0;
    const maxAttempts = 50; 

    const checkWotNot = setInterval(() => {
        if (window.WotNot) {
            window.WotNot.open();
            clearInterval(checkWotNot);
            console.log("WotNot widget loaded and opened.");
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                clearInterval(checkWotNot);
                console.error("Failed to load WotNot widget within the expected time.");
            }
        }
    }, 200); 
});
