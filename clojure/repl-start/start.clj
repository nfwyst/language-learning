; 判断参数是否在 set 中
(def vowel? (set "aeiou"))

(defn pig-latin [word]
  ; 定义一个函数, word 是一个String 对象, 其可以像一串字符一样对待
  (let [first-letter (first word)] ; 取得 word 的第一个字符并定义一个本地绑定
    (if (vowel? first-letter)
      (str word "ay") ; concat word with ay
      (str (subs word 1) first-letter "ay"))))

(println (pig-latin "red"))
(println (pig-latin "orange")) ; 调用 pig-latin 函数并打印计算结果
