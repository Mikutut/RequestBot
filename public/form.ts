function submitForm(e: SubmitEvent) {
  e.preventDefault();

  const form = (e.target !== null) ? (e.target as HTMLFormElement) : document.getElementById("form") as HTMLFormElement;
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
}
