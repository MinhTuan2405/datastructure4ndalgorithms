from time import sleep
from turtle import position
from typing import Optional

class Node:
    def __init__(self, data: int):
        self.data: int = data
        self.next: Optional["Node"] = None

class LinkedList:
    def __init__(self):
        self.head: Optional[Node] = None
        self.tail: Optional[Node] = None

    # display all the current list
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    # get length the current list
    def length(self):
        totalLength = 0
        current = self.head
        while current:
            totalLength += 1
            current = current.next
        return totalLength

    # insert data to the list
    # insert (n) => insert n to the last
    # insert (n, 0) => insert n to the first
    # insert (n, p) => insert n to the p'th position
    def insert(self, data, position=-1):
        def append():
            newNode = Node(data)
            if self.tail:
                self.tail.next = newNode
            else:
                self.head = newNode
            self.tail = newNode

        def unshift():
            newNode = Node(data)
            newNode.next = self.head
            self.head = newNode
            if self.tail is None:
                self.tail = newNode

        def insertSpecific():
            if position >= self.length():
                print("Push at the last element instead")
                append()
                return

            newNode = Node(data)
            current = self.head
            index = 0

            while index < position - 1 and current is not None:
                current = current.next
                index += 1

            if current is None or current.next is None:
                append()
            else:
                newNode.next = current.next
                current.next = newNode

        if position == -1:
            append()
        elif position == 0:
            unshift()
        else:
            insertSpecific()

        return self.length()
    
    # remove the element from the list
    # remove () => remove the last element
    # remove (0) => remove the first element 
    # remove (p) => remove the p'th element
    # remove ("all", n) => remove all the n value from the list
    def remove (self, position=-1, data=None):
        def shift ():
            if not self.head:
                return
            self.head = self.head.next

            if self.head is None:
                self.tail = None
        
        def pop ():
            if not self.head:
                return
            
            if self.head == self.tail:
                self.head = self.tail = None

            current = self.head
            while current.next.next:
                current = current.next
            
            current.next = None
            self.tail = current
            
        def remove_at (pos):
            if not self.head:
                return
            
            if pos == 0:
                shift ()
                return

            current = self.head
            index = 0
            while index < pos - 1 and current.next:
                current = current.next
                index += 1
            if current.next:
                if current.next == self.tail:
                    self.tail = current
                current.next = current.next.next

        def remove_all (value):
            # remove all data at the beginning
            while self.head and self.head.data == value:
                self.head = self.head.next
            
            if not self.head:
                return

            current = self.head
            while current.next:
                if current.next.data == value:
                    current.next = current.next.next
                else:
                    current = current.next
            
            self.tail = current
        

        if position == 'all' and data is not None:
            remove_all (data)
        elif position == 0:
            shift ()
        elif position == -1:
            pop ()
        elif isinstance (position, int):
            remove_at (position)

        return self.length ()


    def reverse (self):
        if not self.head:
            return
        
        current = self.head
        prev = None
        while current:
            nextNodeOfCurrent = current.next
            current.next = prev
            prev = current
            current = nextNodeOfCurrent

        self.tail = self.head
        self.head = prev
        
if __name__ == "__main__":
    ll = LinkedList()
    for val in [0, 8, 1, 8, 2, 3, 8, 4, 8]:
        ll.insert(val)

    ll.display()
    ll.reverse ()
    ll.display ()

