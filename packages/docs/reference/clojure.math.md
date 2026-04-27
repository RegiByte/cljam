---
outline: 2
---

# Namespace: `clojure.math`

## Functions

### `abs`

```clojure
(abs x)
```

Returns the absolute value of x.

---

### `acos`

```clojure
(acos x)
```

Returns the arc cosine of x, in the range [0, π].

---

### `asin`

```clojure
(asin x)
```

Returns the arc sine of x, in the range [-π/2, π/2].

---

### `atan`

```clojure
(atan x)
```

Returns the arc tangent of x, in the range (-π/2, π/2).

---

### `atan2`

```clojure
(atan2 y x)
```

Returns the angle θ from the conversion of rectangular coordinates (x, y)
  to polar (r, θ). Arguments are y first, then x.

---

### `cbrt`

```clojure
(cbrt x)
```

Returns the cube root of x.

---

### `ceil`

```clojure
(ceil x)
```

Returns the smallest integer value ≥ x.

---

### `cos`

```clojure
(cos x)
```

Returns the trigonometric cosine of angle x in radians.

---

### `cosh`

```clojure
(cosh x)
```

Returns the hyperbolic cosine of x.

---

### `exp`

```clojure
(exp x)
```

Returns Euler's number e raised to the power of x.

---

### `floor`

```clojure
(floor x)
```

Returns the largest integer value ≤ x.

---

### `floor-div`

```clojure
(floor-div x y)
```

Returns the largest integer ≤ (/ x y). Unlike quot, floor-div rounds toward
  negative infinity rather than zero.

---

### `floor-mod`

```clojure
(floor-mod x y)
```

Returns x - (floor-div x y) * y. Unlike rem, the result has the same sign
  as y.

---

### `hypot`

```clojure
(hypot x y)
```

Returns sqrt(x² + y²), avoiding intermediate overflow or underflow.

---

### `log`

```clojure
(log x)
```

Returns the natural logarithm (base e) of x.

---

### `log10`

```clojure
(log10 x)
```

Returns the base-10 logarithm of x.

---

### `pow`

```clojure
(pow x y)
```

Returns x raised to the power of y.

---

### `rint`

```clojure
(rint x)
```

Returns the integer closest to x, with ties rounding to the nearest even
  integer (IEEE 754 round-half-to-even / banker's rounding).

---

### `round`

```clojure
(round x)
```

Returns the closest integer to x, with ties rounding up (half-up).

---

### `signum`

```clojure
(signum x)
```

Returns -1.0, 0.0, or 1.0 indicating the sign of x.

---

### `sin`

```clojure
(sin x)
```

Returns the trigonometric sine of angle x in radians.

---

### `sinh`

```clojure
(sinh x)
```

Returns the hyperbolic sine of x.

---

### `sqrt`

```clojure
(sqrt x)
```

Returns the positive square root of x.

---

### `tan`

```clojure
(tan x)
```

Returns the trigonometric tangent of angle x in radians.

---

### `tanh`

```clojure
(tanh x)
```

Returns the hyperbolic tangent of x.

---

### `to-degrees`

```clojure
(to-degrees rad)
```

Converts an angle measured in radians to an approximately equivalent angle
  measured in degrees.

---

### `to-radians`

```clojure
(to-radians deg)
```

Converts an angle measured in degrees to an approximately equivalent angle
  measured in radians.

---

## Special Vars

### `E`

`2.718281828459045`

The base of the natural logarithms.

---

### `PI`

`3.141592653589793`

The ratio of the circumference of a circle to its diameter.

---

### `TAU`

`6.283185307179586`

The ratio of the circumference of a circle to its radius (2 * PI).

---