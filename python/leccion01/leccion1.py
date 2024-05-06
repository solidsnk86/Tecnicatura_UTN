# Clase 2
miVariable = 3
print(miVariable)
miVariable = "Hola a todos los alumnos de la tecnicatura!"
print(miVariable)
miVariable = 3.5
print(miVariable)
x = 10
y = 2
z = x + y
print(f"El resultado es: {z}")
# Las literales se escriben x832, y576, z896
print(id(x))
print(id(y))
print(id(z))

# Tipos int, float, String, Bool
x = 10
print(x)
print(type(x))
x = 14.5
print(x)
print(type(x))
x = "Hola alumnos"
print(x)
print(type(x))
x = True
print(x)
print(type(x))
x = False
print(x)
print(type(x))

# Manejo de cadenas (Strings)
miGrupoFavaorito = "Pearl Jam"
caracteristicas = "The Best Rock Band"
print("Mi grupo favorito es:", miGrupoFavaorito, caracteristicas)

numero1 = "7"
numero2 = "8"
print(int(numero1) + int(numero2))

# Tipos Booleanos (bool)
miBooleano = 1 > 2
print(miBooleano)

if miBooleano:
    print("El resultado es verdadero")
else:
    print("El resultado es falso")

# Procesar la entrada del usuario
# función input
# resultado = input("Digite un número: ")  # Regresa un dato tipo string
# print(resultado)
print("")
# Conversión de la entrada de datos
numero1 = int(input("Escribe el primer número: "))
numero2 = int(input("Escribe el segundo número: "))
resultado = numero1 + numero2
print("El resultado es: ", resultado)
