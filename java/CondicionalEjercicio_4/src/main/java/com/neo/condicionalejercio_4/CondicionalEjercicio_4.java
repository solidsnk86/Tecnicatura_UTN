// Determinar si un alumno aprueba o reprueba un curso, sabiendo que
// aprobará si su promedio de calificaciones es mayor o igual a 70
// o reprueba caso contrario.

package com.neo.condicionalejercio_4;   
import java.util.Scanner;
import java.text.MessageFormat;

public class CondicionalEjercicio_4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        var calificaciones = 3;
        var suma =0;
        
        for (var i = 0; i < calificaciones; i++) {
            System.out.println("Digite la " + (i + 1) + "° calificacion: ");
            var nota = input.nextInt();
            suma += nota;
        }
        
        var promedio = suma / 3;
        
        if (promedio >= 70) {
            System.out.println(MessageFormat.format("La calificacion del alumno es: {0}. Esta Aprobado", promedio));
        } else {
            System.out.println("La calificacion del alumno es: " + promedio + ". Esta Desaprobado");
        }
    }
}
