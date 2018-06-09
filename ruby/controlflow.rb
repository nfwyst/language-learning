# get input
input = gets.to_i

# if statement
if input == 100
  system "say 妈妈问我怎么不开心"
elsif input == 200
  system "say 妈妈问我怎么这么开心"
else
  system "say 一个微笑都不给我"
end
# another ways that present if statement
system "say 如何成为一个作家" if input == 0

# unless statement
unless input == 100
  puts "this is not 100"
else
  puts "这是除了不是100的情况的各种情况"
end

# case statement
age = 10
case age
when 0..100
  puts "这是一个合法的年龄喔"
end

# while
while input != 0
 puts "hahahahahah"
 input = 0
end

# until
until input != 0
 puts "hahhahaeee"
 break if input == 0
end

# iterator
sum = 0
(1..2).each{|i|
  sum += i
}
puts sum

# error catch if gets.to_i is zero
begin
  puts 100 / input
rescue Exception => e
  puts "请不要键入0喔"
end
