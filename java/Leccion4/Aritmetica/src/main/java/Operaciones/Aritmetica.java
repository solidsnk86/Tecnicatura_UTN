package Operaciones;

import javax.swing.JOptionPane;

public class Aritmetica {

    // Atributos de la clase
    int a, b;

    // Métodos
    public void sumarNumeros() {
        int resultado = a + b;
        JOptionPane.showMessageDialog(null, resultado);
    }
}
