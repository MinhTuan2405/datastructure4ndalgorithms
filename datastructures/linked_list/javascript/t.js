class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    display() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        console.log(output + "null");
    }

    length() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    insert(data, position = -1) {
        const append = () => {
            const newNode = new Node(data);
            if (this.tail) {
                this.tail.next = newNode;
            } else {
                this.head = newNode;
            }
            this.tail = newNode;
        };

        const unshift = () => {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
        };

        const insertSpecific = () => {
            const listLength = this.length();
            if (position >= listLength) {
                console.log("Push at the last position instead");
                append();
                return;
            }

            const newNode = new Node(data);
            let current = this.head;
            let index = 0;

            while (index < position - 1 && current) {
                current = current.next;
                index++;
            }

            if (!current) {
                append();
            } else {
                newNode.next = current.next;
                current.next = newNode;
            }
        };

        if (position === -1) {
            append();
        } else if (position === 0) {
            unshift();
        } else {
            insertSpecific();
        }

        return this.length();
    }

    remove(position = -1, data = null) {
        const shift = () => {
            if (!this.head) return;
            this.head = this.head.next;
            if (!this.head) this.tail = null;
        };

        const pop = () => {
            if (!this.head) return;

            if (this.head === this.tail) {
                this.head = this.tail = null;
                return;
            }

            let current = this.head;
            while (current.next && current.next !== this.tail) {
                current = current.next;
            }

            current.next = null;
            this.tail = current;
        };

        const removeAt = (pos) => {
            if (!this.head || pos >= this.length()) return;
            if (pos === 0) {
                shift();
                return;
            }

            let current = this.head;
            let index = 0;

            while (index < pos - 1 && current.next) {
                current = current.next;
                index++;
            }

            if (current.next) {
                if (current.next === this.tail) {
                    this.tail = current;
                }
                current.next = current.next.next;
            }
        };

        const removeAll = (value) => {
            while (this.head && this.head.data === value) {
                this.head = this.head.next;
            }

            if (!this.head) {
                this.tail = null;
                return;
            }

            let current = this.head;
            while (current.next) {
                if (current.next.data === value) {
                    current.next = current.next.next;
                } else {
                    current = current.next;
                }
            }

            this.tail = current;
            while (this.tail && this.tail.next) {
                this.tail = this.tail.next;
            }
        };

        if (position === 'all' && data !== null) {
            removeAll(data);
        } else if (position === 0) {
            shift();
        } else if (position === -1) {
            pop();
        } else if (typeof position === 'number') {
            removeAt(position);
        }

        return this.length();
    }

    reverse() {
        if (!this.head) return;

        let prev = null;
        let current = this.head;

        while (current) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        this.tail = this.head;
        this.head = prev;
    }

    searching(target) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === target) {
                return {
                    index,
                    node: current
                };
            }
            current = current.next;
            index++;
        }

        return {
            index: -1,
            node: null
        };
    }
}

// Example usage
const ll = new LinkedList();
[0, 8, 1, 8, 2, 3, 8, 4, 8].forEach(val => ll.insert(val));

ll.display();
ll.reverse();
ll.display();
console.log(ll.searching(0));
