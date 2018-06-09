require "Date"

time = Time.new

p "#{time.year}#{time.month}#{time.day}#{time.yday}"
p time.strftime("%Y/%m/%d %H:%M:%S")

p Date.today
p Date.today + 3
