; 定义一个变量(定义 and 赋值)且赋值之前不允许改变
; n 作为一个 Symbol 属于特定的命名空间
; Symbol 的值就是这个名字的值, 要使用 Symbol 代表的字符串需要使用引号
; def define a global binding 
(println (def n 2))

; 调用乘法函数
(println (* 3 n))

; 加载文件中的代码
(load-file "../repl-start/start.clj")

; 动态变量
(def ^:dynamic value 1) ; global binding

(defn f1 []
  (println "f1函数: value = " value); value 的值与其所处的调用环境有关 
  )

(defn f2 "测试 let 本地 binding" []
  (println "f2函数: let 之前 value = " value); 全局绑定
  (let [value 2]; 本地绑定
    (println "f2函数: let 中 value = " value)
    (f1)); let 的参数中调用的函数无法使用 let 的本地绑定
  (println "f2 函数: let 之后 value = " value)); 全局绑定

(f2)

(defn f3 "测试 宏 本地 binding" []
  (println "f3函数: 宏binding 之前 value = " value)
  (binding [value 3]; 本地绑定, 且会覆盖全局绑定,包括后续参数中调用的函数 f1
    (println "f3函数: 宏 binding 中 value = " value)
    (f1))
  (println "f3函数: 宏binding 之后 value =" value))

(f3)

(defn f4 "改变本地绑定的值" []
  (def value "hello world"))

(f4)

(println "调用f4函数之后: value = " value)
; let create bindings for current local form, the params is vector and expression
; macro binding is like let, but the macro binding will rewrite the global binding
; binding just can be used to dynamic var

