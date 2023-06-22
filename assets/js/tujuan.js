let url = "https://dahlia-samsi.vercel.app/";
document.getElementById("url").value = url;

const copy = () => {
  navigator.clipboard.writeText(url);
};

document.getElementById("tujuan").addEventListener("keyup", () => {
  url = "https://dahlia-samsi.vercel.app/?to=";
  url += encodeURIComponent(document.getElementById("tujuan").value);
  document.getElementById("url").value = url;
  document.getElementById("copy-url").innerText = "Copy";
});

document.getElementById("copy-url").addEventListener("click", (e) => {
  copy();
  e.target.innerText = "Copied!";
});
