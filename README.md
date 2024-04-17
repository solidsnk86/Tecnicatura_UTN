# Clase de Git Bash UTN Facultad Regional San Rafael (Mendoza)

**Profesor Ariel Betancud**

Este repositorio se creó con fines educativos para aprender Git Bash y sus comandos aprendidos en la clase de programación I con el profe [Ariel](https://github.com/ArielBetancud22).

Tiene un lector de archivos `.txt` con Javascript Vanilla utilizando la función `FileReader` y luego se
hace un `fetch` del archivo al _root_ del HTML.
Contiene estilado en CSS.

Vista del sitio: [https://solidsnk86.github.io/class-git/](https://solidsnk86.github.io/class-git/)

Aquí algunos comandos:

```bash
# Clonar un repositorio remoto en tu máquina local
git clone <url_del_repositorio>

# Iniciar un nuevo repositorio en un directorio local
git init

# Agregar archivos al área de preparación (staging area) para el próximo commit
git add <nombre_del_archivo>

# Agregar todos los archivos modificados y eliminados al área de preparación
git add .

# Confirmar los cambios con un mensaje descriptivo
git commit -m "Mensaje del commit"

# Ver el estado de los archivos en el repositorio
git status

# Ver el historial de commits
git log

# Crear una nueva rama
git branch <nombre_de_la_rama>

# Cambiar a una rama específica
git checkout <nombre_de_la_rama>

# Crear una nueva rama y cambiar a ella en un solo comando
git checkout -b <nombre_de_la_rama>

# Fusionar una rama específica en la rama actual
git merge <nombre_de_la_rama>

# Descargar los cambios del repositorio remoto al repositorio local
git pull

# Subir cambios locales al repositorio remoto
git push

# Ver la diferencia entre el archivo local y el estado en el repositorio
git diff <nombre_del_archivo>

# Deshacer los cambios en un archivo y restaurarlo al último commit
git checkout -- <nombre_del_archivo>


# Ver la diferencia entre el archivo local y el estado en el repositorio
git diff <file_name>

# Eliminar un archivo del directorio de trabajo y del índice de git
git rm <file_name>

# Restablecer el estado del índice a la última confirmación
git reset HEAD <file_name>

# Deshacer los cambios en el directorio de trabajo
git checkout -- <file_name>

# Ver una lista detallada de los cambios realizados en un archivo
git log -p <file_name>

# Crear una nueva rama y cambiar a ella en un solo comando
git checkout -b <branch_name>

# Cambiar de rama conservando los cambios sin confirmar en el directorio de trabajo
git checkout -m <branch_name>

# Mostrar estadísticas sobre los archivos modificados y confirmaciones en el repositorio
git log --stat

# Mostrar la diferencia entre dos ramas
git diff <branch_name1>..<branch_name2>

# Aplicar un parche desde un archivo o una URL
git apply <patch_file>

# Mostrar un resumen de las confirmaciones realizadas por cada colaborador
git shortlog

# Este comando realiza dos acciones en una sola línea:
# -a: Agrega todos los archivos modificados y eliminados al área de preparación (staging area).
# -m "Mensaje del commit": Agrega un mensaje al commit para describir los cambios realizados.
git commit -am "Mensaje del commit"
```
