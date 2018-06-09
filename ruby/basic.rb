a = "hello world"
puts a

# there are no basic data type in ruby
# all type is class or object

# Number 数字
puts 1.methods
puts 1.2.to_s
puts 0.4 - 0.3
puts 1.<=5 #=> true
puts 1<=5 #=> true
# type conversion
puts 1.1.to_i
puts 1.to_f

# String 文本
puts "hello #{a}" # insert value in string
puts "hello" * 2 # repeat the string value
puts "hello".methods
puts "".empty?
puts %Q{我是谁}
puts %q|我要去哪里|


# Range 范围
puts 1..2
puts 1...3

# Boolean Class 布尔对象 Nil
puts true.methods
puts true.nil? #=> false
puts nil.nil? #=> true

# Array 数组
mem = Array.new
msm = [1,2,3]
mem[4] = 9
# intersection
puts mem & msm
# union
puts mem | msm
# contact
puts mem + msm
mem.push(10)
puts mem.pop(2)
mem.delete(10)
mem.insert(1, 100)
puts mem
puts msm

# Hash
hash = {"key"=>"value", "key1"=>1}
puts hash
hash1 = Hash.new
hash1["niubi"] = %Q{你说什么?}
puts hash1
puts hash1.to_a
puts hash1.to_a.to_h
