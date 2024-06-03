print("Programa para determinar si el año es bisiesto.")
num = int(input("Ingrese un año: "))


def leap_year(num):
    if (num % 4 == 0) and (num % 100 != 0) or num % 400 == 0:
        print(f"El año {num} es bisiesto.")
    else:
        print(f"El año {num} no es bisiesto.")


leap_year(num)
