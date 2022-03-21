function createNode(value) {
    return {
        value: value,
        next: null,
        previous: null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        this.length++;
        let newnode = createNode(value);

        if(this.tail) {
            // list is not empty
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            return newNode;
        }
    }
}

