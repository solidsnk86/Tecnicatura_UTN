import os
import platform
import psutil

system = platform.system()
release = platform.release()
version = platform.version()
machine = platform.machine()
processor = platform.processor().replace(" 25", "").replace("Stepping 0, ", "")
threads = os.cpu_count()
total_ram = round(psutil.virtual_memory().total / (1024**3), 2)
available_ram = round(psutil.virtual_memory().available / (1024**3), 2)
disk_usage = psutil.disk_usage("/")
total_disk = round(disk_usage.total / (1024**3), 2)
free_disk = round(disk_usage.free / (1024**3), 2)

output = """|-----------------------------------------------------------|
|           Especificaciones del Sistema Operativo          |
|-----------------------------------------------------------|
| Sistema Operativo  | {system:<35}  |
| Versión            | {release:<36} |
| Build              | {version:<36} |
| Arquitectura       | {machine:<36} |
| Procesador         | {processor}   |
| Núcleos/Hilos      | {threads:<36} |
| RAM Total          | {total_ram} GB                             |
| RAM Disponible     | {available_ram} GB                              |
| Disco Total        | {total_disk} GB                            |
| Disco Libre        | {free_disk} GB                             |
|-----------------------------------------------------------|"""

print(
    output.format(
        system=system,
        release=release,
        version=version,
        machine=machine,
        processor=processor,
        threads=threads,
        total_ram=total_ram,
        available_ram=available_ram,
        total_disk=total_disk,
        free_disk=free_disk,
    )
)
