(defn sum-loop [n]
  (loop [i 0 acc 0]
    (if (> i n)
      acc
      (recur (+ i 1) (+ acc i)))))
