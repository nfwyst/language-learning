# method
def add(a = 3, b = 2)
  return a + b
end

puts add

# class
puts "abc".class # String
puts String.class # Class
puts Class.class # Class
a = String.new("this is a string")
puts a
class Student
  # class constant
  Version = '1.0'
  attr_accessor :name
  attr_reader :number
  attr_writer :gender

  def initialize(name, number, gender)
    @name = name
    @number = number
    @gender = gender
  end

  def self.nick_name
    return "学生类"
  end

  # setter
  def name=(name)
    @name = name
  end

  # getter
  def name
    return @name
  end

  def sayHi()
    puts "我的名字叫#{@name}, 学号是#{@number}"
  end

  # private
  private
  def privateFn
    puts "this is a private method"
  end

end

a = Student.new('test', 1, '保密')
a.sayHi
a.name = 'no'
puts a.name
puts Student::Version
puts Student::nick_name

# class inherit
class UniversityStudent < Student
  def say_english
    puts "my english is very good"
  end
end

puts UniversityStudent::Version

# class extend
class Student
  def say_good
    puts "hello"
  end
end

a.say_good

# dinfine Module
module Mathematics
  PI = 3.1415

  def self.sqrt(number)
    if number < 0
      return -number
    else
      return number
    end
  end

  def helll
    p "hello eee"
  end
end

class Student
  include Mathematics
end

a.helll

puts Mathematics::sqrt(-100)
