class MiClase:
    # Variable de clase, este atributo dará a cada objeto el mismo valor
    variable_clase = "Esto es una variable de clase"

    def __init__(
        self, variable_instancia
    ):  # La variable de instancia da diferentes valores
        self.variable_instancia = variable_instancia


print(MiClase.variable_clase)
mi_clase = MiClase("Esta es una variable de instancia")
print(mi_clase.variable_instancia)
mi_clase2 = MiClase("Esta es otra prueba de variable de instancia")
print(mi_clase2.variable_instancia)
print(mi_clase2.variable_clase)
