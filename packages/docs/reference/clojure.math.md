# clojure.math

> _Namespace:_ `clojure.math`

### `E`

**number**

The base of the natural logarithms.

---

### `PI`

**number**

The ratio of the circumference of a circle to its diameter.

---

### `TAU`

**number**

The ratio of the circumference of a circle to its radius (2 * PI).

---

### `abs`

**fn**

```clojure
(abs x)
```


Returns the absolute value of x.

---

### `acos`

**fn**

```clojure
(acos x)
```


Returns the arc cosine of x, in the range [0, π].

---

### `asin`

**fn**

```clojure
(asin x)
```


Returns the arc sine of x, in the range [-π/2, π/2].

---

### `atan`

**fn**

```clojure
(atan x)
```


Returns the arc tangent of x, in the range (-π/2, π/2).

---

### `atan2`

**fn**

```clojure
(atan2 y x)
```


Returns the angle θ from the conversion of rectangular coordinates (x, y)
  to polar (r, θ). Arguments are y first, then x.

---

### `cbrt`

**fn**

```clojure
(cbrt x)
```


Returns the cube root of x.

---

### `ceil`

**fn**

```clojure
(ceil x)
```


Returns the smallest integer value ≥ x.

---

### `cos`

**fn**

```clojure
(cos x)
```


Returns the trigonometric cosine of angle x in radians.

---

### `cosh`

**fn**

```clojure
(cosh x)
```


Returns the hyperbolic cosine of x.

---

### `exp`

**fn**

```clojure
(exp x)
```


Returns Euler's number e raised to the power of x.

---

### `floor`

**fn**

```clojure
(floor x)
```


Returns the largest integer value ≤ x.

---

### `floor-div`

**fn**

```clojure
(floor-div x y)
```


Returns the largest integer ≤ (/ x y). Unlike quot, floor-div rounds toward
  negative infinity rather than zero.

---

### `floor-mod`

**fn**

```clojure
(floor-mod x y)
```


Returns x - (floor-div x y) * y. Unlike rem, the result has the same sign
  as y.

---

### `hypot`

**fn**

```clojure
(hypot x y)
```


Returns sqrt(x² + y²), avoiding intermediate overflow or underflow.

---

### `log`

**fn**

```clojure
(log x)
```


Returns the natural logarithm (base e) of x.

---

### `log10`

**fn**

```clojure
(log10 x)
```


Returns the base-10 logarithm of x.

---

### `pow`

**fn**

```clojure
(pow x y)
```


Returns x raised to the power of y.

---

### `rint`

**fn**

```clojure
(rint x)
```


Returns the integer closest to x, with ties rounding to the nearest even
  integer (IEEE 754 round-half-to-even / banker's rounding).

---

### `round`

**fn**

```clojure
(round x)
```


Returns the closest integer to x, with ties rounding up (half-up).

---

### `signum`

**fn**

```clojure
(signum x)
```


Returns -1.0, 0.0, or 1.0 indicating the sign of x.

---

### `sin`

**fn**

```clojure
(sin x)
```


Returns the trigonometric sine of angle x in radians.

---

### `sinh`

**fn**

```clojure
(sinh x)
```


Returns the hyperbolic sine of x.

---

### `sqrt`

**fn**

```clojure
(sqrt x)
```


Returns the positive square root of x.

---

### `tan`

**fn**

```clojure
(tan x)
```


Returns the trigonometric tangent of angle x in radians.

---

### `tanh`

**fn**

```clojure
(tanh x)
```


Returns the hyperbolic tangent of x.

---

### `to-degrees`

**fn**

```clojure
(to-degrees rad)
```


Converts an angle measured in radians to an approximately equivalent angle
  measured in degrees.

---

### `to-radians`

**fn**

```clojure
(to-radians deg)
```


Converts an angle measured in degrees to an approximately equivalent angle
  measured in radians.

---