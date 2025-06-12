class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
    }

    // display the current list
    display () {
        let current = this.head
        const data = []
        while (current) {
            data.push (current.data)
            current = current.next
        }
        data.push ('None')
        console.log (data)
    }

    // get the length of the list
    length () {
        let totalLength = 0
        current = this.head
        while (current) {
            totalLength ++
            current = current.next
        }
        return totalLength
    }

    // insert data to the list
    /**
     * insert (n) => insert n to the last
     * insert (n, 0) => insert n to the first
     * insert (n, p) => insert n to the p'th position
     */
    insert (data, position=-1) {
        const append = () => {
            const newNode = new Node (data)
            if (this.tail) {
                this.tail.next = newNode
            }else {
                this.head = newNode
            }
            this.tail = newNode
        }

        const unshift = () => {
            const newNode = new Node (data)
            newNode.next = this.head
            this.head = newNode

            if (!this.tail) {
                this.tail = newNode
            }
        }

        const insertSpecific = () => {
            if (position > this.length () ) {
                console.log ('Push at the last position instead')
                append ()
                return
            }
            const newNode = new Node (data)
            let current = this.head
            let index = 0

            while (index < position - 1 && current) {
                current = current.next
                index ++
            }

            if (!current || !current.next) {
                append ()
            }else {
                newNode.next = current.next
                current.next = newNode
            }
        }

        if (position == -1) {
            append ()
        }else if (position == 0) {
            unshift ()
        }else {
            insertSpecific ()
        }

        return this.length ()
    }

    remove (position = -1, data = null) {
        const shift = () => {
            if (!this.head) return
            this.head = this.head.next

            if (!this.head) this.tail = null
        }

        const pop = () => {
            if (!this.head) return
            if (this.head == this.tail) {
                this.head = null
                this.tail = null
                return
            }

            let current = this.head
            while (current.next.next) {
                current = current.next
            }

            current.next = null
            this.tail = current
        }
    } 
}