def sum(arg1, arg2)
 return 5000 if arg1 === 5000 and arg2 === 5000 
 return arg1 + sum(arg1 + 1, arg2)
end

puts sum(1, 5000)
