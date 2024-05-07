# Ejercicio 2:
# La pregunta es si un padre puede asistir al juego de su hijo.​
# Verificamos si tiene vacaciones​
# Verificamos si tiene el día libre​
# Usar estructura ‘if else’ con el operador or​

vacaciones = True
dia_libre = True

# 
if not (vacaciones or dia_libre):
    print("El tiene trabajo que hacer!")
else:
    print("El puede asistir al juego.")
