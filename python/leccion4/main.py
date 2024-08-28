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
nombres.append([1, 2, 3])
nombres.append(True)
nombres.append(10.45)
nombres.append(7)
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

# Recorremos los elementos de una tupla
for el in cocina:
    print(el, end=" ")  # Evita la impresión en consola con salto de línea (\n)

# Para modificar una tupla se debe usar una conversión
cocina_lista = list(cocina)
cocina_lista[0] = "🍳"
cocina = tuple(cocina_lista)
print("\n", cocina)

# Eliminamos la tupla
# del cocina
# print(cocina)

# Tipo Set
planetas = {"Marte", "Júpiter", "Venus"}
print(len(planetas))

# Revisar si un elemente existe dentro de un set
print("Marte" not in planetas)

# Agregar a un set
planetas.add("Tierra")
print(planetas)

# Eliminar elementos
planetas.remove(
    "Júpiter"
)  # esta función alerta el error de tipeo o si no existe ele elemento
print(planetas)
planetas.discard("Tierra")  # Esta función no presenta error
print(planetas)

# Limpoar Set o Conjunto
planetas.clear()
print(planetas)

# Eliminar el set
del planetas

# 'Maradona': 10 Un diccionario esta compuesto por dos elementos
# Una Llave y un Valor
diccionario = {
    "IDE": "Itegrated Development Envirioment",
    "POO": "Programación Orientada a Objetos",
    "SABD": "Sistema de Administración de Base de Datos",
}

print(len(diccionario))
print(diccionario)

# Acceder a un diccionario con la llave key
print(diccionario.get("IDE"))
print(diccionario["IDE"])

# Modificamos los elementos
diccionario["IDE"] = "Entorno de Desarrollo Integrado"
print(diccionario)

# Como recorre los elementos

for termino in diccionario:  # Recorremos solo mostrando las llaves
    print(termino)

# Necesitamos una funcion para recorrer un diccionario
for termino, valor in diccionario.items():
    print(f"{termino}: {valor}")

# Otra manera de recorrer a un diccionario
for termino in diccionario.keys():
    print(termino)

for termino in (
    diccionario.keys() and diccionario.values()
):  # Función para acceder al valor
    print(termino)

# Comprobar la exixstencia em algún elemento
print("IDE" in diccionario)  # devuelve booleano

# Agregar un elemento
diccionario["PK"] = "Primary Key"
print(diccionario)

# Eliminar elemento
diccionario.pop("SABD")
print(diccionario)

# Vaciar un diccionario
diccionario.clear()
print(diccionario)

# Eleminar diccionario
del diccionario

# Concatenar listas
lista_1 = [1, 2, 3, 1]
lista_2 = [4, 5, 6, 1]
lista_3 = lista_1 + lista_2
print(lista_3)

lista_3.extend([7, 8, 9, 1])  # Función para agregar varios elementos a una lista
print(lista_3)

print(lista_3.index(5))  # Función para ubicar el índice
# print(lista_3.index(0)) # Error por no ser el elemento parte de la lista

# Como saber cuantos valores hay repetidos en una lista
print(lista_3.count(1))

# Para poner al revés una lista
print(lista_3.reverse())

# Para que una lista se multiplique repitiendo sus elementos
lista = [1, 2, 3] * 2
print(lista)

lista_3 = lista_3 * 2
print(lista_3)

# Métodos de ordenamientos
lista_3.sort()  # Ascendente
print(lista_3)
lista_3.sort(reverse=True)  # Descendente
print(lista_3)

tupla = (4, "Hola", 6.78, [1, 2, 3], 4, "HOLA")
print(tupla)
# Lo que podemos usar en las listas son: index, count, len
# En tuplas podemos convertir de tupla a lista y de lista a tupla
