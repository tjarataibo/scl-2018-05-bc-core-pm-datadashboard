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

Los resultados de cada curso, lectura, ejercicio y quizzes, porque es más eficiente ver una lista resumida que un listado uno a uno por alumnas. Es por ello, que se realiza una función de filtrado por nombre.


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

A través de una herramienta de diseño visual, fue posible diseñar la interfaz de usuario, como solución ideal:

* versión PC:

![img](https://i.imgur.com/mzBl7h1.jpg)

![img](https://i.imgur.com/mgxi7ir.jpg)

![img](https://i.imgur.com/sNKACRN.jpg)

![img](https://i.imgur.com/9Asi43d.jpg)

![img](https://i.imgur.com/PlEgapA.jpg)

![img](https://i.imgur.com/8zaPrK7.jpg)

![img](https://i.imgur.com/BoypxRt.jpg)

![img](https://i.imgur.com/U5fY2u3.jpg)

![img](img]https://i.imgur.com/gNxtCYU.jpg)

![img](https://i.imgur.com/bekuNo8.jpg)

![img](https://i.imgur.com/zFILwQ7.jpg)

![img](https://i.imgur.com/loviSWO.jpg)

![img](https://i.imgur.com/h0qJNxK.jpg)

* Versión Móvil:

![img](https://i.imgur.com/RR78XfT.jpg)

![img](https://i.imgur.com/9UmrEpj.jpg)

![img](https://i.imgur.com/PcPopei.jpg)

![img](https://i.imgur.com/UhINcdJ.jpg)

![img](https://i.imgur.com/IRvDqFy.jpg)

![img](https://i.imgur.com/bQh3zeI.jpg)

![img](https://i.imgur.com/OoGYkZr.jpg)

![img](https://i.imgur.com/WWvNi33.jpg)

![img](https://i.imgur.com/7wxIMd9.jpg)

![img](https://i.imgur.com/3bPYaxX.jpg)

![img](https://i.imgur.com/abuSyLp.jpg)

![img](https://i.imgur.com/wYliqoN.jpg)

![img](https://i.imgur.com/skbtDDu.jpg)

![img](https://i.imgur.com/fc6EuLM.jpg)

![img](https://i.imgur.com/FlH0O4D.jpg)
