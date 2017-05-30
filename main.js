const Observable = Rx.Observable;
const observer = {
    next: val => console.log(val),
    error: err => console.log(err),
    complete: () => console.log('complete')
}
// const a = Observable.of({ id: 1, params: 'urlParams' }, { id: 2, params: 'second' });
// const b = str => new Observable(observer => {
//     console.log('#3');
//     observer.next('#4 ' + str + ' test');
// });

// a
//     // .first()
//     .do(e => console.log('#1 ' + JSON.stringify(e)))
//     .map(e => e.params)
//     .do(e => console.log('#2 ' + e))
//     .switchMap(e => b(e))
//     .subscribe(observer)

const people = [
    { id: 1, name: 'John', age: 24 },
    { id: 2, name: 'Bob', age: 14 },
    { id: 3, name: 'Marley', age: 56 },
    { id: 4, name: 'Jack', age: 47 }
];
const fruits = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'lemon' },
    { id: 3, name: 'cramberry' },
    { id: 4, name: 'banana' },
]

const a$ = new Rx.Subject();
const b$ = Rx.Observable.zip(
    Rx.Observable.timer(0, 1000),
    Rx.Observable.from(people),
    // Rx.Observable.from(fruits),
    (a, b) => b)
// .first(e => e.age > 20)
// .subscribe(observer);
const c$ = Rx.Observable.zip(
    Rx.Observable.timer(0, 1500),
    Rx.Observable.from(fruits),
    // Rx.Observable.from(fruits),
    (a, b) => b)

// .debounceTime(1000)
// .throttleTime(1000)
// .subscribe(observer);

// Rx.Observable.interval(1000)
b$
    // .mergeMap(e => {
    //     debugger
    //     return c$
    // })
    // .concat(c$)
    .merge(c$)
// .subscribe(observer);
// var liste1 = [[0, 1], [2, 3], [4, 5]];
// var liste2 = [0, [1, [2, [3, [4, [5]]]]]];

// const aplatir = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? aplatir(b) : b), []);
// const a = aplatir(liste1); // renvoie [0, 1, 2, 3, 4, 5]

// var nombres = [
//     { id: 1, name: 'john', age: 25 },
//     { id: 2, name: 'bob', age: 23 },
//     { id: 3, name: 'yann', age: 15 },
// ];
// console.log(JSON.stringify(nombres));
// nombres.sort(function (a, b) {
//     // console.log(`${a} - ${b} = ${a - b}`);
//     return a.age - b.age;
// });
// console.log(JSON.stringify(nombres));

Rx.Observable.range(1, 10)
    // .take(5)
    // .min()
    // .max()
    // .average()
    // .count()
    // .scan((a, b) => a + b)
    // .reduce((a, b) => a + b)
    .subscribe(observer)