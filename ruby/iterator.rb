a = [1,2,3]
a.each do |item|
  p item
end

b = {
  "a" => "b",
  "c" => "d"
}

b.each do |key, value|
  p "#{key}:#{value}"
end

a = a.sort{ |a, b|
  b<=>a
}

p a
