# VIDEO 01: UseRef - Ejemplo básico con input

En esta sesión vamos a trabajar con otro de los Hooks de React: UseRef

[https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref) 

UseRef nos va a servir para referenciar elementos del DOM, la manera de usarlo es la siguiente.

En primer lugar debemos crear una referencia mediante useRef:

```jsx
// UseRef para acceder al DOM
const inputReference = React.useRef(null);
```

Posteriormente lo conectamos a un elemento HTML mediante el atributo ref:

```jsx
<input ref={inputReference} type="text" placeholder="Introduce un nombre..." />
```

De esta manera, cuando queramos podemos acceder a ese elemento y a sus propiedades, por ejemplo leer el valor de ese input y setear un estado con ello:

```jsx
console.log("Esta es la referencia al elemento en el DOM:");
console.log(inputReference.current);
console.log("Este es el valor del input:");
setName(inputReference.current.value);
```
