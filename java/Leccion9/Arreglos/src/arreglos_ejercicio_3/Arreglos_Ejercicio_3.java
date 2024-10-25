/*
 * Ejercicio 3: Leer 5 números, guardarlos en un arreglo 
 * y a continuación realizar la media de los números
 * positivos, la media de los negativos y contar el npumero de ceros
 */
package arreglos_ejercicio_3;

import java.util.Scanner;

public class Arreglos_Ejercicio_3 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        
        float[] nums = new float[5];
        
        for (int i = 0; i < nums.length; i++) {
            System.out.println("Ingrese un numero en la posicion "+i+" : ");
            nums[i] = entrada.nextInt();
        }
    }
}
