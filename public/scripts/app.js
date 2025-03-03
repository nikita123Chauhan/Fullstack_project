// Social Login Handlers
document.getElementById("google-login").addEventListener("click", () => {
    window.location.href = "https://trite-basalt-jujube.glitch.me/api/social-login/google";
  });
  
  document.getElementById("facebook-login").addEventListener("click", () => {
    window.location.href = "https://trite-basalt-jujube.glitch.me/api/social-login/facebook";
  });
  
  document.getElementById("instagram-login").addEventListener("click", () => {
    window.location.href = "https://trite-basalt-jujube.glitch.me/api/social-login/instagram";
  });
  
  // Manual Login Form Submission
  document.getElementById("manual-login-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
  
    fetch("https://trite-basalt-jujube.glitch.me/api/manual-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message || "Login Successful");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again!");
      });
  });
  