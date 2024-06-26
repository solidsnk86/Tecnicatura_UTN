print("")
print("|---------------------|")
print("| Contador de vocales |")
print("|---------------------|")
print("")
word = input("Ingrese una palabra:")


def vowels_count(word):
    vowels = "aeiouAEIOU"
    counter = 0
    for i in word:
        if i in vowels:
            counter += 1
    return counter


print(f"La cantidad de vocales de '{word}' son: {vowels_count(word)}")
