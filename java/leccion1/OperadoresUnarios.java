public class OperadoresUnarios {
    public static void main(String[] args) {
        // Operadores Unarios: Cambio de Signo
        var varA = 7;
        var varB = -varA;
        System.out.println("varA = " + varA);
        System.out.println("varB = " + varB);

        // Operador de negación
        var varC = true;
        var varD = !varC;
        System.out.println("varC = " + varC);
        System.out.println("varD = " + varD);

        // Operadores Unarios de Incremento: Precincremento
        var varE = 9; // Se va a modificar su valor
        var varF = ++varE; // Símbolo antes de la variable
        System.out.println("varE = " + varE);
        System.out.println("varF = " + varF);

        // Postincremento
        var varG = 3;
        var varH = varG++; // Primero el valor de variable, lueho queda el incremento
        System.out.println("varG = " + varG);
        System.out.println(("varH = " + varH));

        // Operadore Unarios de decremento: Predecremento
        var varI = 4;
        var varJ = --varI;
        System.out.println("varI = " + varI);
        System.out.println("varJ = " + varJ);

        // Postdecremento
        var varK = 8;
        var varL = varK--; // Primero el valor de variable, lueho queda el decremento
        System.out.println("varI = " + varK); // Va a decrementar en 1
        System.out.println("varJ = " + varL);
    }
}
