class Persona:  # Creamos una clase
    # pass  # No se procesa nada más (No tiene contenido)
    def __init__(self):
        self.nombre = "Juan"
        self.apeelido = "Meza"
        self.edad = 75


persona1 = Persona()

print(persona1.nombre)
print(persona1.apeelido)
print(persona1.edad, "años")
