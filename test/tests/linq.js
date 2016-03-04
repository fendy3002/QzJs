QUnit.test( "Qz.Linq.min", function( assert ) {
    var data = [1, 2, 3];
    var actual = Qz.Linq.enums(data).min().result();
    assert.equal(actual, 1);
});

QUnit.test( "Qz.Linq.max", function( assert ) {
    var data = [1, 2, 3];
    var actual = Qz.Linq.enums(data).max().result();
    assert.equal(actual, 3);
});

QUnit.test( "Qz.Linq.where", function( assert ) {
    var data = [1, 2, 3];
    var actual = Qz.Linq.enums(data)
        .where(function(k){ return k == 2; }).result();
    assert.deepEqual(actual, [2]);
});

QUnit.test( "Qz.Linq.select", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .select(function(k){ return k.age; }).result();
    assert.deepEqual(actual, [10, 15, 20]);
});

QUnit.test( "Qz.Linq.orderBy", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .orderBy(function(k, l){ return k.age > l.age; }).result();
    assert.deepEqual(actual, [
        {name: 'c', age: 20},
        {name: 'b', age: 15},
        {name: 'a', age: 10},
    ]);

    actual = Qz.Linq.enums(data)
        .orderBy(function(k, l){ return k.age < l.age; }).result();
    assert.deepEqual(actual, [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ]);

    actual = Qz.Linq.enums(data)
        .orderBy(function(k, l){ return k.name < l.name; }).result();
    assert.deepEqual(actual, [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ]);
});

QUnit.test( "Qz.Linq.groupBy", function( assert ) {
    var data = [
        {city: 'a', pop: 10},
        {city: 'a', pop: 12},
        {city: 'b', pop: 15},
        {city: 'c', pop: 20},
        {city: 'c', pop: 23},
        {city: 'c', pop: 25},
    ];
    var actual = Qz.Linq.enums(data)
        .groupBy(
            function(k){ return { city: k.city }; },
            function(k, l){ return k.city == l.city; }
        )
        .result();
    assert.deepEqual(actual, [
        {
            key: {
                city: 'a'
            }, value:[
                {city: 'a', pop: 10},
                {city: 'a', pop: 12}
            ]
        },
        {
            key: {
                city: 'b'
            }, value:[
                {city: 'b', pop: 15}
            ]
        },
        {
            key: {
                city: 'c'
            }, value:[
                {city: 'c', pop: 20},
                {city: 'c', pop: 23},
                {city: 'c', pop: 25}
            ]
        }
    ]);
});

QUnit.test( "Qz.Linq.any", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .any(function(k){ return k.age == 20; });
    assert.deepEqual(actual, true);

    actual = Qz.Linq.enums(data)
        .any(function(k){ return k.age == 5; });
    assert.deepEqual(actual, false);
});

QUnit.test( "Qz.Linq.firstOrNull", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .firstOrNull(function(k){ return k.age == 20; });
    assert.deepEqual(actual, {name:'c', age: 20});
    actual = Qz.Linq.enums(data)
        .firstOrNull(function(k){ return k.age == 5; });
    assert.deepEqual(actual, null);
});

QUnit.test( "Qz.Linq.firstOrDefault", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .firstOrDefault(function(k){ return k.age == 20; }, { name: 'd', age: 25});
    assert.deepEqual(actual, {name:'c', age: 20});

    actual = Qz.Linq.enums(data)
        .firstOrDefault(function(k){ return k.age == 5; }, { name: 'd', age: 25});
    assert.deepEqual(actual, {name:'d', age: 25});
});
