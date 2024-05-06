# Ejercicio 3: Rango entre las edades de 20 y 30 años

# Pedir la edad al usuario
edad_usuario = int(input("Ingrese su edad: "))

# Comprobar si la edad está entre 20 y 30 años (sin incluir 30)
edad_20 = 20 <= edad_usuario < 30
# Comprobar si la edad está entre 30 y 40 años (sin incluir 40)
edad_30 = 30 <= edad_usuario < 40

# Imprimir resultados intermedios
print("¿Estás entre 20 y 30 años (excluyendo 30)?", edad_20)
print("¿Estás entre 30 y 40 años (excluyendo 40)?", edad_30)

# Comprobar si la edad está en cualquier rango y dar salida final
if edad_20 or edad_30:
    print("Estás dentro del rango entre 20 y 40 años (sin incluir 40).")
else:
    print("No estás dentro del rango entre 20 y 40 años.")
