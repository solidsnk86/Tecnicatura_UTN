class TxtCreator {
  static async getData(url) {
    let data;
    const res = await fetch(url);
    data = res.json();
    return data;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await TxtCreator.getData("https://geolocation.microlink.io");
  const contenido = `Dirección IP: ${data.ip.address}\nCiudad: ${data.city.name}\nPaís: ${data.country.name}`;
  const blob = new Blob([contenido], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = "archivo.txt";

  document.body.appendChild(enlace);
  enlace.click();

  document.body.removeChild(enlace);
  URL.revokeObjectURL(enlace.href);
});
