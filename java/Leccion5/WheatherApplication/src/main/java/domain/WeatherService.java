package domain;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONObject;

public class WeatherService {

    private static final String API_KEY = "2232101b7a4c133da51de8620fc86462";
    private HttpClient client;

    public WeatherService() {
        client = HttpClient.newHttpClient();
    }

    // Método para obtener los datos del clima según la ciudad
    public String getWeatherData(String city) {
        try {
            // Crear la solicitud (request)
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric"))
                    .build();

            // Enviar la solicitud y obtener la respuesta
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Procesar la respuesta JSON
            JSONObject json = new JSONObject(response.body());
            String weatherDescription = json.getJSONArray("weather").getJSONObject(0).getString("description");
            double temperature = json.getJSONObject("main").getDouble("temp");
            int humidity = json.getJSONObject("main").getInt("humidity");

            // Devolver los datos en formato legible
            return "Clima en " + city.replaceAll("%20", " ").toUpperCase() + ":\n"
                    + "Descripción: " + this.translate(weatherDescription) + "\n"
                    + "Temperatura: " + temperature + "°C\n"
                    + "Humedad: " + humidity + "%";
        } catch (Exception e) {
            return "Error al obtener los datos del clima.";
        }
    }
    
    public String translate(String condition) {
    switch (condition) {
        case "few clouds":
            return "Leve nubosidad";
        case "overcast clouds":
            return "Nublado";
        case "sunny":
            return "Soleado";
        case "clear sky":
            return "Cielo despejado";
        case "scattered clouds":
            return "Nubes dispersas";
        case "broken clouds":
            return "Nubes desarmadas";
        case "light rain":
            return "Lluvia ligera";
        default:
            return condition;
    }
}

}
