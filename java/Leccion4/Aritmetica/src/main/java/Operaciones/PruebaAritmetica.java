package Operaciones;

public class PruebaAritmetica {

    public static void main(String[] args) {
        int a = 10; // Variables locales
        int b = 7; // Memoria stack
        miMetodo(); // Se ejecuta el nuevo amétodo aquí
        Aritmetica aritmetica1 = new Aritmetica();
        aritmetica1.a = 3;
        aritmetica1.b = 7;
        // aritmetica1.sumarNumeros();
        
        // Para almacenar un objeto o los atributos se utiliza la meoria heap
        int resultado = aritmetica1.sumarConRetorno();
        System.out.println("El resultado es: " + resultado);

        resultado = aritmetica1.sumarConArgumentos(8, 9);
        System.out.println("Resultado con argumentos: " + resultado);

        System.out.println("aritmetia1 a: " + aritmetica1.a);
        System.out.println("aritmetia1 b: " + aritmetica1.b);
        
        Aritmetica aritmetica2 = new Aritmetica(5,8);
        System.out.println("aritmetica2 a ="+ aritmetica2.a);
        System.out.println("aritmetica2 b ="+ aritmetica2.b);
        // System.gc(); Garbage Colector - Método para limpiar residuos NO UTILIZAR
    }
    
    public static void miMetodo() {
        //int a = 10; // Una variable está limitada
        System.out.println("Aqui hay otro método");
    }
}
