class Persona:  # Creamos una clase
    # pass  # No se procesa nada más (No tiene contenido)
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    def mostrar_detalle(self):
        print(f"Persona: {self.nombre} {self.apellido}, edad: {self.edad}")


persona1 = Persona("Manuel", "Calavera", 369)
print(
    f"El objeto1 de la clase Persona: {persona1.nombre} {persona1.apellido}, {persona1.edad} años"
)

print(persona1.nombre)
print(persona1.apellido)
print(persona1.edad, "años")


persona2 = Persona("Goro", "MK", 1000)
print(
    f"El objeto2 de la clase persona: {persona2.nombre} {persona2.apellido}, {persona2.edad} años"
)

persona1.nombre = "Solid"
persona1.apellido = "Snake"
persona1.edad = "86"
print(
    f"El objeto1 modificado de la clase Persona: {persona1.nombre} {persona1.apellido}, {persona1.edad} años"
)

# Los atributos son: características
# Los métodos son: el comportamiento que van a tener los objetos (acciones)
persona1.mostrar_detalle()