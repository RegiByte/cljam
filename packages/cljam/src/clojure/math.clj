(ns clojure.math)

;; Runtime-injected native helpers. Declared here so clojure-lsp can resolve
;; them; the interpreter treats bare (def name) as a no-op and leaves the
;; native binding from coreEnv intact.
(declare floor*)
(declare ceil*)
(declare round*)
(declare rint*)
(declare pow*)
(declare exp*)
(declare log*)
(declare log10*)
(declare cbrt*)
(declare hypot*)
(declare sin*)
(declare cos*)
(declare tan*)
(declare asin*)
(declare acos*)
(declare atan*)
(declare atan2*)
(declare sinh*)
(declare cosh*)
(declare tanh*)
(declare signum*)
(declare floor-div*)
(declare floor-mod*)
(declare to-radians*)
(declare to-degrees*)

;; ---------------------------------------------------------------------------
;; Constants
;; ---------------------------------------------------------------------------

(def PI
  "The ratio of the circumference of a circle to its diameter."
  3.141592653589793)

(def E
  "The base of the natural logarithms."
  2.718281828459045)

(def TAU
  "The ratio of the circumference of a circle to its radius (2 * PI)."
  6.283185307179586)

;; ---------------------------------------------------------------------------
;; Rounding
;; ---------------------------------------------------------------------------

(defn floor
  "Returns the largest integer value ≤ x."
  [x]
  (floor* x))

(defn ceil
  "Returns the smallest integer value ≥ x."
  [x]
  (ceil* x))

(defn round
  "Returns the closest integer to x, with ties rounding up (half-up)."
  [x]
  (round* x))

(defn rint
  "Returns the integer closest to x, with ties rounding to the nearest even
  integer (IEEE 754 round-half-to-even / banker's rounding)."
  [x]
  (rint* x))

;; ---------------------------------------------------------------------------
;; Exponents and logarithms
;; ---------------------------------------------------------------------------

(defn pow
  "Returns x raised to the power of y."
  [x y]
  (pow* x y))

(defn exp
  "Returns Euler's number e raised to the power of x."
  [x]
  (exp* x))

(defn log
  "Returns the natural logarithm (base e) of x."
  [x]
  (log* x))

(defn log10
  "Returns the base-10 logarithm of x."
  [x]
  (log10* x))

(defn sqrt
  "Returns the positive square root of x."
  [x]
  (clojure.core/sqrt x))

(defn cbrt
  "Returns the cube root of x."
  [x]
  (cbrt* x))

(defn hypot
  "Returns sqrt(x² + y²), avoiding intermediate overflow or underflow."
  [x y]
  (hypot* x y))

;; ---------------------------------------------------------------------------
;; Trigonometry
;; ---------------------------------------------------------------------------

(defn sin
  "Returns the trigonometric sine of angle x in radians."
  [x]
  (sin* x))

(defn cos
  "Returns the trigonometric cosine of angle x in radians."
  [x]
  (cos* x))

(defn tan
  "Returns the trigonometric tangent of angle x in radians."
  [x]
  (tan* x))

(defn asin
  "Returns the arc sine of x, in the range [-π/2, π/2]."
  [x]
  (asin* x))

(defn acos
  "Returns the arc cosine of x, in the range [0, π]."
  [x]
  (acos* x))

(defn atan
  "Returns the arc tangent of x, in the range (-π/2, π/2)."
  [x]
  (atan* x))

(defn atan2
  "Returns the angle θ from the conversion of rectangular coordinates (x, y)
  to polar (r, θ). Arguments are y first, then x."
  [y x]
  (atan2* y x))

;; ---------------------------------------------------------------------------
;; Hyperbolic
;; ---------------------------------------------------------------------------

(defn sinh
  "Returns the hyperbolic sine of x."
  [x]
  (sinh* x))

(defn cosh
  "Returns the hyperbolic cosine of x."
  [x]
  (cosh* x))

(defn tanh
  "Returns the hyperbolic tangent of x."
  [x]
  (tanh* x))

;; ---------------------------------------------------------------------------
;; Miscellaneous
;; ---------------------------------------------------------------------------

(defn abs
  "Returns the absolute value of x."
  [x]
  (clojure.core/abs x))

(defn signum
  "Returns -1.0, 0.0, or 1.0 indicating the sign of x."
  [x]
  (signum* x))

(defn floor-div
  "Returns the largest integer ≤ (/ x y). Unlike quot, floor-div rounds toward
  negative infinity rather than zero."
  [x y]
  (floor-div* x y))

(defn floor-mod
  "Returns x - (floor-div x y) * y. Unlike rem, the result has the same sign
  as y."
  [x y]
  (floor-mod* x y))

(defn to-radians
  "Converts an angle measured in degrees to an approximately equivalent angle
  measured in radians."
  [deg]
  (to-radians* deg))

(defn to-degrees
  "Converts an angle measured in radians to an approximately equivalent angle
  measured in degrees."
  [rad]
  (to-degrees* rad))
