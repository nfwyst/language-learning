; vector 
(println (count 
           (reverse 
             ["hello" "world" true]))) ; 反转 vector 并获取长度
(println (map + [2 4 7] [5 6] [1 2 3 4])) ; 对 vector 中的每个元素 map 一个加法函数, 加法执行次数以长度最短的 vector 为准
(println (apply + [1 2 3 4 5])); 调用一个函数, vector 作为参数

(println (filter #(> (count %) 3) ["Hello" "wo" "Curry"])); 过滤长度大于3的元素, 返回新的 vector, 第一个参数是匿名函数用于判断 vector 元素长度是否大于3

; 谓词
(def vectors ["String1" "String2"])
(every? #(instance? String %) vectors)
(not-every? #(instance? String %) vectors) 
(some #(instance? Number %) vectors)
(not-any? #(instance? Number %) vectors)

