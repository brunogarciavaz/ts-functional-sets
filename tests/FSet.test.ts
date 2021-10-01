import Set from '../FSet';

test('Singleton set one contains one', () => {
    const s1 = Set.singleton(1)
    expect(Set.contains(s1, 1)).toBe(true)
})

test('Union contains all elements of each set', () => {
    const s2 = Set.singleton(2)
    const s3 = Set.singleton(3)
    const union = Set.union(s2, s3)
    expect(Set.contains(union, 2)).toBe(true)
    expect(Set.contains(union, 3)).toBe(true)
})

test('createRange creates set with all numbers within rage', () => {
    const range = Set.createRange(1, 3)
    expect(Set.contains(range, 1)).toBe(true)
    expect(Set.contains(range, 2)).toBe(true)
    expect(Set.contains(range, 3)).toBe(true)
    expect(Set.contains(range, 0)).toBe(false)
})

test('toArray contains all numbers of an specified range set', () => {
    const range = Set.createRange(1, 5)
    expect(Set.toArray(range, 5)).toEqual([1, 2, 3, 4, 5])
})

test('Set with added element should contain that element', () => {
    const set = Set.add(Set.createRange(1, 3), 10)
    expect(Set.contains(set, 10)).toBe(true)
})

test('Set with subtracted element should not contain that element', () => {
    const set = Set.subtract(Set.createRange(1, 3), 2) 
    expect(Set.contains(set, 2)).toBe(false)
})

test('Map function f(x) => x*2 doubles each element of a given set', () => {
    const set = Set.createRange(1, 5)
    const mappedSet = Set.map(set, (x) => x * 2, 5)
    expect(Set.contains(mappedSet, 1)).toBe(false)
    expect(Set.contains(mappedSet, 10)).toBe(true)
    expect(Set.contains(mappedSet, 8)).toBe(true)
})


test('Union function', () => {
    // ... 
})

test('Diff function', () => {
    // ... 
})






