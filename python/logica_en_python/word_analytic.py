print()
print("|---------------------|")
print("| Contador de Vocales |")
print("|          y          |")
print("|       Palabras      |")
print("|---------------------|")
print()
word = input("Ingrese una palabra: ")


def analytics(word):
    vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ"
    words = len(word.split())
    counter = 0
    for i in word:
        if i in vowels:
            counter += 1
    return counter, words


[vowels, words] = analytics(word)

print(
    f"""
    Cantidad de palabras: {words}
    La cantidad de vocales que hay en el texto: '{word}' son: {vowels}
    """
)
