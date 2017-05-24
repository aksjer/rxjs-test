const Observable = Rx.Observable;

const a = Observable.of({ id: 1, params: 'urlParams' }, { id: 2, params: 'second' });
const b = str => new Observable(observer => {
    console.log('#3');
    observer.next('#4 ' + str);
});

a
    // .first()
    .do(e => console.log('#1 ' + JSON.stringify(e)))
    .map(e => e.params)
    .do(e => console.log('#2 ' + e))
    .switchMap(e => b(e))
    .subscribe(e => {
        console.log(e);
        console.log('**********');
    })