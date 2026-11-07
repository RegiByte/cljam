---
{ "title": "Divergences", "order": 10 }
---
Every known place where cljam differs from JVM Clojure.

## Open

```kb-list
{ "type": "divergence", "status": "open" }
```

## Justified

```kb-list
{ "type": "divergence", "status": "justified" }
```

## By failure

How each difference shows up. **Silent** runs and gives a different value, **loud** errors where the JVM succeeds,
**printing** differs in output only, and **missing** is not implemented.

### Silent

```kb-list
{ "type": "divergence", "failure": "silent" }
```

### Loud

```kb-list
{ "type": "divergence", "failure": "loud" }
```

### Printing

```kb-list
{ "type": "divergence", "failure": "printing" }
```

### Missing

```kb-list
{ "type": "divergence", "failure": "missing" }
```
