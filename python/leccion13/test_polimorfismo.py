from Empleado import Empleado
from Gerente import Gerente


def imprimir(obj) -> str:
    # print(
    #     obj
    # )  # De manera indirecta estamos llamadno al métdo __str__ de la clase Empleado o Gerente
    print(type(obj))  # Esto es para saber el tipo de datos que recibe
    print(obj.mostar_detalles())


empleado1 = Empleado("Oscar", 369.00)
imprimir(empleado1)
gerente1 = Gerente("Mario", 963.00, "Ventas")
imprimir(gerente1)
