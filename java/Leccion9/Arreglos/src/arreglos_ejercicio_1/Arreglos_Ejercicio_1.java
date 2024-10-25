/*
 * Ejercicio 1: Leer 5 números, guardarlos en un arreglo 
 * y mostrarlos en el mismo orden introducido.
 */
package arreglos_ejercicio_1;

import java.util.Scanner;

public class Arreglos_Ejercicio_1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        
        int nums[] = new int[5];
        
        for (int i = 0; i < nums.length; i++) {
            System.out.println("Ingrese un número en la psosición["+i+"]: ");
            nums[i] += Integer.parseInt(entrada.nextLine());
        }
        System.out.println("nums 0 = " + nums[0]);
        System.out.println("nums 1 = " + nums[1]);
        System.out.println("nums 2 = " + nums[2]);
        System.out.println("nums 3 = " + nums[3]);
        System.out.println("nums 4 = " + nums[4]);
    }
    
}
