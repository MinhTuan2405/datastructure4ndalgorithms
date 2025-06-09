# In Python, a list is a built-in dynamic sized array (automatically grows and shrinks). We can store all types of items (including another list) in a list. 
# A list may contain mixed type of items, this is possible because a list mainly stores references at contiguous locations and actual items maybe stored at different locations.

# List can contain duplicate items.
# List in Python are Mutable. Hence, we can modify, replace or delete the items.
# List are ordered. It maintain the order of elements based on how they are added.
# Accessing items in List can be done directly using their position (index), starting from 0.
##############################################################################################
# Note: Lists Store References, Not Values
# Each element in a list is not stored directly inside the list structure. Instead, the list stores references (pointers) to the actual objects in memory.
# Example (from the image representation). 

# The list a itself is a container with references (addresses) to the actual values.
# Python internally creates separate objects for 10, 20, "GfG", 40 and True, then stores their memory addresses inside a.
# This means that modifying an element doesn’t affect other elements but can affect the referenced object if it is mutable

# normally
a = [1, 3]
# using the constructor
b = list ([1, 3, 4])

# Creating List with Repeated Elements
# Create a list [2, 2, 2, 2, 2]
a = [2] * 5

# Create a list [0, 0, 0, 0, 0, 0, 0]
b = [0] * 7

# multidimesion array
a = [[0] * 10] * 10 # 10x10 array

for subarray in a:
    for item in subarray:
        print(item, sep=" ", end=" ")
    print()

#################################################
# operation in array

# access
a = [] * 10
for i in range (0, 10, 1):
    a.append (i)
print (a)
print (a[1:8:2])
print (a[::-1])
print (a[::1])
print (a[::2])
print (a[4:1:-1])
#########################################

# Adding Elements into List
# append(): Adds an element (one object a time) at the end of the list.
# extend(): Adds multiple elements to the end of the list.
# insert(): Adds an element at a specific position.

a = []
# Adding 10 to end of list
a.append(10)  
print("After append(10):", a)  

# Inserting 5 at index 0
a.insert(0, 5)
print("After insert(0, 5):", a) 

# Adding multiple elements  [15, 20, 25] at the end
a.extend([15, 20, 25])  
print("After extend([15, 20, 25]):", a)

##############################
# Updating Elements into List
a = [10, 20, 30, 40, 50]
# Change the second element
a[1] = 25 
print(a)

#################################
# Removing Elements from List
# remove(): Removes the first occurrence of an element.
# pop(): Removes the element at a specific index or the last element if no index is specified.
# del statement: Deletes an element at a specified index.
a = [10, 20, 30, 40, 50]

# Removes the first occurrence of 30
a.remove(30)  
print("After remove(30):", a)

# Removes the element at index 1 (20)
popped_val = a.pop(1)  
print("Popped element:", popped_val)
print("After pop(1):", a) 

# Deletes the first element (10)
del a[0]  
print("After del a[0]:", a)

#####################################
# iterate
a = [1, 2, 3, 4]
for value in a:
    print (value)


a = [1, 3, 4]
b = a
print (a, end="")
print ()
print (b, end="")
b[1] = 100
print ()
print (a, end="")
print ()
print (b, end="")