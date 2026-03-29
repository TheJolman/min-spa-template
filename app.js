async function render() {
  const hash = location.hash.slice(1) || "home";
  const app = document.getElementById("app");

  try {
    const res = await fetch(`pages/${hash}.html`);
    if (!res.ok) throw new Error("Not found");
    app.innerHTML = await res.text();
  } catch {
    app.innerHTML = "<h1>404</h1><p>Page not found.</p>"
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
