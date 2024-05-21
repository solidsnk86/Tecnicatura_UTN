// Nuestro primer Hola Mundo desde Java

import java.util.Scanner;

public class HolaMundo {
    public static void main(String args[]) {
        /*
         * System.out.println("Hola Mundo desde Java");
         * 
         * int miVariable = 10;
         * System.out.println(miVariable);
         * miVariable = 5;
         * System.out.println(miVariable);
         * // Tipo String
         * String miVariableCadena = "Bienvenidos";
         * System.out.println(miVariableCadena);
         * miVariableCadena = "Sigamos aprendiendo Programación";
         * System.out.println(miVariableCadena);
         */

        // Var - Interferencia de tipos de Java
        /*
         * int miVariableEntera2 = 10;
         * System.out.println("miVariableEnetera2 = " + miVariableEntera2);
         * var miVariableCadena2 = "Seguimos estudiando";
         * System.out.println("miVariableCadena2 = " + miVariableCadena2);
         * // sout
         * 
         * // Reglas para definir una variable en java
         * var usuario = "Osvaldo";
         * var titulo = "Ingeniero";
         * var union = titulo + " " + usuario;
         * System.out.println("union = " + union);
         * 
         * var a = 8;
         * var b = 4;
         * System.out.println(usuario + (a + b)); // Contexto
         * 
         * // Ejercicio: Caracteres especiales con Java
         * var nombre = "Natalia";
         * System.out.println("\nNueva Linea \n" + nombre); // Diagonal inversa + letra
         * n
         * System.out.println("Tabulador: \t" + nombre); // Diagonal iversa + letra t
         * System.out.println("\t\t.:MENU:.");
         * System.out.println("Retroceso:\b\b" + nombre); // Diagonal inversa + letra b
         * System.out.println("Comillas Simples: \'" + nombre + "\'"); // Diagonal
         * inversa + comilla simple
         * System.out.println("Comillas Dobles \"" + nombre + "\""); // Diagonal inversa
         * + comilla doble
         */

        try (// Clase Scanner
                Scanner entrada = new Scanner(System.in)) {
            System.out.println("Digite su nombre: ");
            var usuario2 = entrada.nextLine();
            System.out.println("usuario2: " + usuario2);
            System.out.println("Escriba el título: ");
            var titulo2 = entrada.nextLine();
            System.out.println("Resultado: " + titulo2 + " " + usuario2);
        }

    }

}
