# frozen_string_literal: true

def balanced_brackets?(string)
  stack = []

  start_tags = ['{', '[', '(']
  end_tags = ['}', ']', ')']
  all_tags = start_tags + end_tags

  string.chars do |charcter|
    next unless all_tags.include?(charcter)

    if start_tags.include?(charcter)
      stack.push(charcter)
    else
      if end_tags.index(charcter) == start_tags.index(stack.last)
        stack.pop
      else
        return false
      end
    end
  end
  stack.empty?
end

puts balanced_brackets?('(hello)[world]')
# # => true

puts balanced_brackets?('([)]')
# => false

puts balanced_brackets?('[({}{}{})([])]')
# => true

puts balanced_brackets?('[([)])]')
# => false

# Hint :
# use this helpers if you need
# watch stack video here https://www.coursera.org/lecture/data-structures/stacks-UdKzQ
# watch anaylsis for classic stack problem balanced parentheses https://www.youtube.com/watch?v=CCyEXcNamC4
