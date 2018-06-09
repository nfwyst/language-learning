# logic operator: and or

a = true

b = false

p a && b
p a || b

# condition operator
p 4 > 3 ? a : b

# range operator

a = "Hello ruby"
b = a[0..4]
p b
b = a[0...4]
p b

# custome operator
class Vector
  attr_reader :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end

  def +(the_vector)
    self.class.new(@x + the_vector.x, @y + the_vector.y)
  end
end

a = Vector.new(2, 3)
b = Vector.new(2, 3)

p a + b

class String
  def +(number)
    "#{self}#{number}"
  end
end

p 'abc' + 8
p 'a' + 'd'
