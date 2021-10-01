/**
* We represent a set by its characteristic function, i.e.
* its 'contains' predicate.
*/
type FSet = (x: number) => boolean

export default class Set {
    // Indicates whether a set contains a given element.
    static contains = (s: FSet, e: number): boolean => s(e)
    
    // Returns the set of the one given element.
    static singleton = (e: number): FSet => (x: number) => x===e

    // All elements that are in either 's' or 'f'
    static union = (s: FSet, f: FSet): FSet => (x: number) => s(x) || f(x)

    // All elements that are both in 's' and 'f'.
    static intersect = (s: FSet, f: FSet): FSet => (x: number) => s(x) && f(x)

    // All elements of `s` that are not in `t`.
    static diff = (s: FSet, f: FSet): FSet => (x: number) => s(x) && !f(x)

    // Subset of 's' for which 'p' holds.
    static filter = (s: FSet, p: (e: number) => boolean): FSet => (x: number) => s(x) && p(x)

    // Adds a given element to a set
    static add = (s: FSet, e: number): FSet => Set.union(s, Set.singleton((e)))

    // Subtracts a given element from a set
    static subtract = (s: FSet, e: number): FSet => Set.diff(s, Set.singleton((e)))

    //Creates set of an specified range
    static createRange = (a: number, b: number): FSet => Set.intersect((x) => x >= a, (x) => x <= b) 

    // Whether all numbers inside a defined bound within 's' that satisfy 'p'
    static forAll = (s: FSet, p: (e: number) => boolean, bound: number): boolean => {
        const iter = (a: number): boolean => {
            if(a > bound) return true
            else if (Set.contains(Set.diff(s, p), a)) return false
            else return iter(a + 1)
        }
        return iter(-bound)
    }

    // Whether there is a number inside a defined bound within 's' that satisfies 'p'
    static exists = (s: FSet, p: (e: number) => boolean, bound: number) => !Set.forAll(s,x => !p(x), bound)

    // Transform a set by applying 'f' to each element of 's'
    static map = (s: FSet, f: (e: number) => number, bound: number): FSet => (x: number) => Set.exists(s, y => x === f(y), bound)


    static toArray = (s: FSet, bound: number): number[] => {
        const iter = (acc: number[], a: number): number[] => {
            if(a > bound) return acc
            else if(Set.contains(s, a)) return iter([...acc, a], a + 1)
            else return iter(acc, a + 1) 
        }
        return iter([], -bound) 
    }
}





