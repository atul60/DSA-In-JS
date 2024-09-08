class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        if(this.head) {
            let ptr = this.head;
            while(ptr.next) {
                ptr = ptr.next;
            }
            ptr.next = node;
        } else {
            this.head = node;
        }
        this.size += 1;
    }

    deleteLastNode() {
        let ptr = this.head;
        let deletedItem;
        while(ptr.next.next) {
            ptr = ptr.next;
        }
        deletedItem = ptr.next.element;
        ptr.next = null;
        return deletedItem;
    }

    print() {
        let ptr = this.head;
        while(ptr) {
            console.log(ptr.next + '->');
            ptr = ptr.next;
        }
    }
}

const l1 = new SinglyLinkedList();
l1.add(4);
l1.add(3);
l1.add(1);
l1.add(7);
l1.add(8);
l1.print();
// console.log(l1.size);
