nombres = ["Juan Pablo", "Franco", "Maximiliano", "Elias", "Agustín", "Gabriel"]
# print(nombres[-3])

# print(nombres[0:2])  # Solo muestra el índice 0, 1 sin mostrar el 2
# Ir al índice de la lista (sin incluirlo)
# print(nombres[:3])  # Indices a mostrar 0, 1, 2
# Desde el índice indicado hasta el final
# print(nombres[1:])
# Modificamos un valor
nombres[0] = "El Beto Alonso"
nombres[4] = "Chikita López"

for nombre in nombres:
    if nombre == "Chikita López":
        print(f"{nombre} vs MANDINGO!! 🤣")
    else:
        print(f"{nombre}: alumno del Perla Negra")


print(len(nombres))  # Longitud de una lista

# Agregamos un elemento
nombres.append("Juan Carlo")
print(nombres)

# Insertar elemento en el indice indicado
nombres.insert(3, "El Freni")
nombres.insert(1, "Débora")
print(nombres)

# Eliminamos un elemento de la lista
nombres.remove("El Freni")
print(nombres)

# Eliminar el último elemento
nombres.pop()
print(nombres)

# Eliminar un índice específico

del nombres[1]
print(nombres)

# Limpiar la lista
nombres.clear()
print(nombres)

# Eliminar la lista
del nombres
# print(nombres)  # Esto nos dará error

# Tuplas (inmutables)
cocina = ("🥄", "🍴", "🔪")
print(cocina)
print(len(cocina))

# Acceder a un elemento
print(cocina[2])
# De manera inversa
print(cocina[-1])
# Acceder a un rango
print(cocina[:1])
# Una tupla siempre debe contener más de un elemento y se muestra entre paréntisis, ejemplo: la coma ,
verduras = ("🥔",)
# De lo contario sería un str
