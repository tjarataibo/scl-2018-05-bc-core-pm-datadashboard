# Data Dashboard

## Introducción

En la presente página, se da a conocer información general de alumnas de Laboratoria, pudiendo realizar búsqueda y filtración de ellas, mostrando su orden por porcentaje de completitud de cursos y, en consecuencia; porcentaje de lecturas, ejercicios, autocorregidos y quizzes.   

Esto fue posible luego de una recolección de data, que fue transformada en información útil para posteriormente visualizarla de forma sencilla.
Para comprender esta recopilación de data, a continuación se describe un ejemplo en breve, para entender qué significa "data" y cómo lo implementamos de acuerdo a nuestro objetivo.

Si pensamos en un dashboard, podemos pensar en el tablero de control de un auto o de un avión. Un espacio desde el cual un usuario puede tener acceso a la información y controles más relevantes, en este caso, del vehículo que está utilizando. El dashboard de un auto le permite a quien conduce saber a qué velocidad está yendo, qué cambio está utilizando, cuánto combustible tiene disponible, qué tan caliente está el motor, cuántas revoluciones por minuto dan las ruedas, cuánta distancia has recorrido, etc.

En consideración a ello, nos es posible explorar esta información descrita de Laboratoria.



# User Experience Design

## Definición del producto

Para el desarrollo del producto, fue necesario desarrollar preguntas. Estas son las siguientes:


* ¿Quiénes son los principales usarios del producto?.

Las Training Manager son las principales usuarias del producto, puesto a que hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje.


* ¿Cuáles son los objetivos de estos usarios en relación con el producto?.

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   * Listar las alumnas de ese cohort
   * Para cada alumna:
     * Calcular porcentaje de completitud de todos los cursos.
     * Calcular grado de completitud de lecturas, ejercicios autocorregidos, y quizzes.
   * Ordenar alumnas por completitud general (porcentaje consumido/completado de todos los cursos del cohort en cuestión), de lecturas, ejercicios autocorregidos y quizzes.
   * Filtrar/buscar alumnas por nombre.


3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.
4. Incluir pruebas unitarias.


* ¿Cuáles son los datos más relevantes que el usuario quiere ver en la interfaz y por qué?. ¿Cómo los descubriste?.

El orden de resultados por cohort, alumnas y que, a la vez, se puedan filtrar la búsqueda, porque es más eficiente ver una lista resumida los resultados de cada curso, lectura, ejercicio y quizzes; que un listado uno a uno por alumnas.


* ¿Cuándo revisa normalmente estos datos?.



* ¿Cómo crees que el producto les está resolviendo sus problemas?.

Está ayudando a entregar información, de una forma más estética y más amable.


* ¿Cómo fue tu proceso de diseño?.



* ¿Dónde va a estar el producto?.



## Sketch de la solución

Una vez identificado el problema, se estableció un prototipo de solución que fue expresado a través del sketch que se muestra a continuación:

![img](https://i.imgur.com/2Thbe3D.jpg)

![img](https://i.imgur.com/FX9x4YB.jpg)

![img](https://i.imgur.com/UiUm6Fz.jpg)

![img](https://i.imgur.com/3GC2bO7.jpg)

![img](https://i.imgur.com/dXgS5V4.jpg)



## Diseño de la Interfaz de Usuario

A través de una herramienta de diseño visual, fue posible diseñar la interfaz de usuario como solución ideal:
