package com.neo.condicionalejercicio_6;

import java.util.Scanner;
import java.text.MessageFormat;

public class CondicionalEjercicio_6 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite el primer número: ");
        int num1 = input.nextInt();

        System.out.println("Digite el segundo número: ");
        int num2 = input.nextInt();

        double result;

        if (num1 == num2) {
            result = num1 * num2;
        } else if (num1 > num2) {
            result = num1 - num2;
        } else {
            result = num1 + num2;
        }

        System.out.println(MessageFormat.format("El resultado es {0}", result));
    }
}
