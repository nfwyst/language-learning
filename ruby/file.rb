require "FileUtils"

# file
File.rename("test.txt", "t.txt")
FileUtils.cp("t.txt", "tcopy.txt")
File.delete("t.txt")

dir = Dir.open('.')
while file_name = dir.read
  p file_name
end

Dir.mkdir("temp")
Dir.delete("temp")
