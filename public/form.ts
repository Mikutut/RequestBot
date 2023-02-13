const form = document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const formText = formData.get("formText") ?? "";

  fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: formText
    })
  });
});
