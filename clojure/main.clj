(def ^:dynamic v 1) 

(defn f1 []
  (println "f1: v =" v)) 

(defn f2 []
  (println "f2: before let v =" v) 
  (let [v 2] 
    (println "f2: in let, v =" v) 
    (f1))
  (println "f2: after let v =" v)) 

(defn f3 []
  (println "f3: before binding v =" v) 
  (binding [v 3] 
    (println "f3: in binding, v =" v) 
    (f1))
  (println "f3: after binding v =" v)) 

(defn f4 []
 (def v 4)) 

(f2)
(f3)
(f4)
(println "after calling f4, v =" v)
