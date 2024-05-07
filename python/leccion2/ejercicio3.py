# Ejercicio 3: Rango entre las edades de 20 y 30 años

# Pedir la edad al usuario
edad_usuario = int(input("Ingrese su edad: "))

# Comprobar si la edad está entre 20 y 30 años
edad_20 = 20 <= edad_usuario < 30
# Comprobar si la edad está entre 30 y 40 años
edad_30 = 30 <= edad_usuario < 40

# Imprimir resultados intermedios
print("")
print("¿Estás entre 20 y 30 años?", edad_20)

print("¿Estás entre 30 y 40 años?", edad_30)
print("")
# Comprobar si la edad está en cualquier rango y dar salida final
if edad_20 or edad_30:
    print("Estás dentro del rango entre 20 a 30 años.")
else:
    print("No estás dentro del rango entre 20 a 30 años.")
