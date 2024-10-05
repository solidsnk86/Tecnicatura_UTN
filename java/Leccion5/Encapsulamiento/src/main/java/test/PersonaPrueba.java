package test;

import dominio.Persona;

public class PersonaPrueba {

    public static void main(String[] args) {
        Persona persona1 = new Persona("Osvaldo", 57000, false);
        System.out.println("persona1 = " + persona1.getNombre());

        // modificación a través de los métodos
        persona1.setNombre("Gabriel");
        // persona1.nombre = "Román" // Esto ya no se puede utilizar porque es de acceso privado
        // System.out.println(persona1.nombre); Error
        System.out.println("persona1 con su nombre modificado = " + persona1.getNombre());
        System.out.println("El sueldo de persona1 es: $"+ persona1.getSueldo());
        System.out.println("persona1 se ha eliminado?: "+ persona1.isEliminado());
        
        Persona persona2 = new Persona("Mario", 369000, true);
        System.out.println("persona2 = "+ persona2.getNombre());
        System.out.println("El sueldo de persona2 es: $"+persona2.getSueldo());
        System.out.println("persona2 se ha eliminado?: "+ persona2.isEliminado());
    }
}
