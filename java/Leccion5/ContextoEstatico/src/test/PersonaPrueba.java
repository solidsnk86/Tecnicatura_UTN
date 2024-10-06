package test;

import domain.Persona;

public class PersonaPrueba {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Gabriel");
        
        System.out.println("persona1: "+persona1);
        
        Persona persona2 = new Persona("Mario");
        System.out.println("persona2 = " + persona2);
        
        persona2.setNombre("Mandingo");
        //persona2.setIdPersona(3);
        System.out.println("persona2 = " + persona2);
    }
}
