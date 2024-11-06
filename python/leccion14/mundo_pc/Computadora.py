from Teclado import Teclado
from Raton import Raton
from Monitor import Monitor


class Computadora:
    contador_computadora = 0

    def __init__(self, nombre, monitor, teclado, raton):
        Computadora.contador_computadora += 1
        self._id_computadora = Computadora.contador_computadora
        self._nombre = nombre
        self._monitor = monitor
        self._teclado = teclado
        self._raton = raton

    def __str__(self):
        return f"""
        {self._nombre}: {self._id_computadora}
        Monitor: {self._monitor}
        Teclado: {self._teclado}
        Ratón: {self._raton}
        """


if __name__ == "__main__":
    monitor1 = Monitor("HP", "24 pulgadas")
    teclado1 = Teclado("HP", "USB")
    raton1 = Raton("HP", "Bluetooth")
    computadora1 = Computadora("HP", monitor1, teclado1, raton1)
    print(computadora1)
    monitor2 = Monitor("Acer", "19 pulgadas")
    teclado2 = Teclado("Acer", "USB")
    raton2 = Raton("Acer", "USB")
    computadora2 = Computadora("Acer", monitor1, teclado1, raton1)
    print(computadora2)
