Purely functional sets in TypeScript, inspired by an assigment in the course ["Functional Programming Principles in Scala" by Martin Odersky](https://www.coursera.org/learn/scala-functional-programming), with a few added features.

> Functional representation of sets based on the mathematical notion of
> characteristic functions. The goal is to gain practice with
> higher-order functions.
> 
> As an example to motivate our representation, how would you represent
> the set of all negative integers? You cannot list them all... one way
> would be to say: if you give me an integer, I can tell you whether
> it's in the set or not: for 3, I say 'no'; for -1, I say yes.
> 
> Mathematically, we call the function which takes an integer as
> argument and which returns a boolean indicating whether the given
> integer belongs to a set, the _characteristic_ function of the set.
> For example, we can characterize the set of negative integers by the
> characteristic function (x: Int) => x < 0.
