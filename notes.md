*React

compnents: buidling block of your react application.
view -> components
 returns a render method (element aka compoent(jsx))

- arrow function (this)
- what is this is javascript, how it behaves for object, function declaration, funciton expresion and arrow
functions
- class in es6, constructor in class, super in the constructor 
- methods vs arrow function
- spread and rest operator 
- destructering of object and exprots in es6 
- bind, call and apply in javascirt 


React compnents 
class compnents - smart compnents, stateful, state driven, life cycle methods 
functional compnents - stateless , it is also called a dumb component, rendering  no lifecyle methods 


State : State is data of a component which is local to component and cannot be modifed outside the compnent 
the only way to update state in react is using a method called setState()
Prop: State of the parent can be passed to the child compnent as props

State is multable : it can be updated(changed)
props are immutable: it cannot be changed


lifecyle of react compnent 
three statge
    - mount 
        - componentDidMount()
    - update phase
    - unmount 
        - compnentDidUnmount()
