/*
# Diseñar un programa que muestre el producto de los
# 10 primeros números impares
# Hacerlo con JOptionPane
 */
package ciclos11;

import javax.swing.JOptionPane;

public class EjercicioCiclos11 {

    public static void main(String[] args) {
        long resultado = 1;
        for (int i = 1; i <= 20; i+=2) {
            resultado *= i;
        }
        JOptionPane.showMessageDialog(null, "El producto de los 10 primeros números impares es: "+resultado);
    }
}
