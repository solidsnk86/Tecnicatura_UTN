'''miVariable = 3
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
'''
"""
operandoA = 8
operandoB = 5
suma = operandoA + operandoB

# print("El resultado de la suma es:", suma)
print(f"El resultado de la suma es: {suma}") # Interpolación
resta = operandoA - operandoB
print(f"El resultado de la resta es: {resta}")
multiplicacion = operandoA * operandoB
print(f"El resultado de la multiplicación es: {multiplicacion}")
division = operandoA / operandoB
print(f"El resultado de la división es: {division}")
division = operandoA // operandoB
print(f"El resultado de la división (int) es: {division}")
modulo = operandoA % operandoB
print(f"El residuo de la división o residuo (modulo) es: {modulo}")
exponente = operandoA ** operandoB
print(f"El resultado del exponente es: {exponente}")
"""
'''
alto = int(input("Proporciona el alto del rectángulo: "))
ancho = int(input("Proporciona el ancho del rectángulo: "))
area = alto + ancho
perimetro = (alto + ancho) * 2

print("Área:", area)
print("Perímetro:", perimetro)
'''

mi_variable_3 = 10
print(mi_variable_3)

# Operadores de reasignación
mi_variable_3 = mi_variable_3 + 1
print(mi_variable_3)
# Sintaxis reducida de Python
mi_variable_3 += 1
print(mi_variable_3)

# Mi mi_variable_3 = mi_variable_3 - 2
mi_variable_3 -= 2
print(mi_variable_3)

# Mi mi_variable_3 = mi_variable_3 * 2
mi_variable_3 *= 3
print(mi_variable_3)

# Mi mi_variable_3 = mi_variable_3 / 2
mi_variable_3 /= 2
print(mi_variable_3)