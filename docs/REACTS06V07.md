# VIDEO 07: UseRef - ****Ejercicio Calculadora Con Botones****

Aprovechando el código que hemos realizado de la calculadora, debes mejorarla añadiendo las siguientes funcionalidades.

1. El formulario tendrá valores por defecto, para ello debemos usar la etiqueta defaultValue, puedes encontrar más info en:
<https://reactjs.org/docs/uncontrolled-components.html#default-values>
2. El valor de la cuota debe tener dos decimales y estar redondeado
3. Los inputs tendrán botones para aumentar y disminuir cantidades:
    1. El precio de la casa irá de 5.000 en 5.000
    2. Los ahorros aportados irán de 1.000 en 1.000
    3. El plazo en años irá de 1 en 1
    4. El interés variará de 0,01 en 0,01 
4. Debéis tener cuidado con los decimales en general, sobre todo cuando aumentamos el interés (va de 0,01 en 0,01) ahí deberás redondear también si no quieres ver números y comportamientos extraños.

Nota para redondear podéis hacer uso del siguiente código que dejará solo dos decimales redondeados:

```jsx
(Math.round(payment * 100) / 100).toFixed(2)
```

La calculadora debe quedar al menos como la que veis en la imagen:

![Untitled](/docs/assets/Untitled.png)

Aunque si quieres puedes intentar que se parezca más a la de idealista:

![Untitled](/docs/assets/Untitled%201.png)

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s6-useref-samples>