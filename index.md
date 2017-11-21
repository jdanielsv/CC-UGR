# CLOUD COMPUTING

## Descripción del problema
La gestión de tareas de un hogar a día de hoy se hace de forma manual asignando a los usuarios uno a uno las tareas que tiene que hacer y cuando tiene que hacerlas.
## Solución
Se propone un servicio que, a partir de los datos proporcionados por la API de del TFG del alumno, se genere un informe y una asignación automática de las tareas pendientes.
Estas tareas están organizadas por tipos de tareas los cuales solamente ciertos usuarios pueden realizar esos tipos. Además las tareas tendrán un peso y una importancia con lo que el sistema, a partir de esos parámetros y de la cantidad de tareas asignadas que tiene cada usuario podrá llevar una asignación equitativa.
Además se incluirá otro servicio de telegram que notifique cuando se asignen las tareas e información de las tareas asignadas a cada usuario.
## Arquitectura
Se utilizará una arquitectura basada en microservicios. Uno de los microservicios (el gestor de las tareas) estará desarrollado en python y el microservicio para el bot de telegram estará desarrollado en nodejs.
Además, las tareas que han sido asignadas por el servicio se guardarán en la BD basada en X.
![alt text](images/arquitectura.jpg "Arquitectura")
# Provisionamiento
El Provisionamiento se ha realizado gracias a las máquinas virtuales de AWS.
Se han utilizado la versión 16.04 t2.micro de Ubuntu. Además, para la instalación de los recursos que se necesitarán en el proyecto se utilizará Ansbile.

## Ansible
Se ha elegido Ansible por su sencillez de uso: se basa en una arquitectura cliente/servidor en la que, mediante playbooks ( o tareas ) se va provisionando el sistema. Para acceder a la información completa entrar [aquí](https://github.com/jdanielsv/CC-UGR/tree/master/provision)

## Licencia
Proyecto bajo la licencia de Apache License
