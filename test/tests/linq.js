QUnit.test( "Qz.Linq.min", function( assert ) {
    var data = [1, 2, 3];
    var actual = Qz.Linq.enums(data).min().result();
    assert.equal(1, actual);
});

QUnit.test( "Qz.Linq.max", function( assert ) {
    var data = [1, 2, 3];
    var actual = Qz.Linq.enums(data).max().result();
    assert.equal(3, actual);
});

QUnit.test( "Qz.Linq.where", function( assert ) {
    var data = [1, 2, 3];
    var actual = Qz.Linq.enums(data)
        .where(function(k){ return k == 2; }).result();
    assert.deepEqual([2], actual);
});

QUnit.test( "Qz.Linq.select", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .select(function(k){ return k.age; }).result();
    assert.deepEqual([10, 15, 20], actual);
});

QUnit.test( "Qz.Linq.any", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .any(function(k){ return k.age == 20; });
    assert.deepEqual(true, actual);

    actual = Qz.Linq.enums(data)
        .any(function(k){ return k.age == 5; });
    assert.deepEqual(false, actual);
});

QUnit.test( "Qz.Linq.firstOrNull", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .firstOrNull(function(k){ return k.age == 20; });
    assert.deepEqual({name:'c', age: 20}, actual);
    actual = Qz.Linq.enums(data)
        .firstOrNull(function(k){ return k.age == 5; });
    assert.deepEqual(null, actual);
});

QUnit.test( "Qz.Linq.firstOrDefault", function( assert ) {
    var data = [
        {name: 'a', age: 10},
        {name: 'b', age: 15},
        {name: 'c', age: 20},
    ];
    var actual = Qz.Linq.enums(data)
        .firstOrDefault(function(k){ return k.age == 20; }, { name: 'd', age: 25});
    assert.deepEqual({name:'c', age: 20}, actual);

    actual = Qz.Linq.enums(data)
        .firstOrDefault(function(k){ return k.age == 5; }, { name: 'd', age: 25});
    assert.deepEqual({name:'d', age: 25}, actual);
});
