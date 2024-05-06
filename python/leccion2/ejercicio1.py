# Ejercicio 1: Valor dentro de un rango

valor_minimo = 0
valor_maximo = 5
num = int(input("Ingrese un valor numérico entre 0 y 5: "))
dentro_del_rango = num >= valor_minimo and num <= valor_maximo
if dentro_del_rango:
    print(f"El valor {num} está dentro del rango.")
else:
    print(f"El valor {num} no está en el rango solicitado.")
    