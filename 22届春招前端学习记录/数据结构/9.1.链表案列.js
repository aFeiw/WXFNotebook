// 链表的封装

// headre->节点(data|next)->节点->节点->null

function LinkedList() {
  function Node(data, next) {
    this.data = data;
    this.next = next;
  }
  //属性
  let header = null;
  this.length = 0;
}
